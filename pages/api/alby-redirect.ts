import { NextApiRequest, NextApiResponse } from "next";
import NDK, { NDKEvent, NDKPrivateKeySigner } from "@nostr-dev-kit/ndk";
import { nip04, generateSecretKey } from "nostr-tools";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const tempSigner = new NDKPrivateKeySigner(
      Buffer.from(generateSecretKey()).toString("hex")
    );
  
    // lud16, relay, and pubkey come from alby
    // nwaSecret, userPubkey come from Zap Bot /connect command
    const { nwaSecret, userPubkey, lud16, relay, pubkey } = req.query;
  
    const ndk = new NDK({
      explicitRelayUrls: ["wss://relay.primal.net/"],
      signer: tempSigner,
    });
  
    await ndk.connect();
  
    const nwaContent = JSON.stringify({
      secret: nwaSecret,
      lud16: lud16,
      relay: relay,
      walletPubkey: pubkey, // this breaks the spec, but works for now
    });
  
    // build the nwa reponse event
    const nwaResponse = new NDKEvent(ndk);

    nwaResponse.kind = 33194;
    nwaResponse.content = await nip04.encrypt(
      tempSigner.privateKey!,
      userPubkey as string,
      nwaContent
    );
    nwaResponse.tags = [['d', userPubkey as string]]
    
    await nwaResponse.sign();
    await nwaResponse.publish();

    res.redirect("/"); // Redirects back to the home page
  } catch (e) {
    console.error(e);
    res.status(500).send("An error occurred");
  }  
}
