import Image from "next/image";

import discordLogo from "@/public/discord-logo.png";
import prismLogo from "@/public/prism-logo.png";

const DiscordSuccess = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Image src={discordLogo} alt="Discord Logo" width={50} height={50} />
        <Image
          src={prismLogo}
          alt="Other Image"
          width={50}
          height={50}
          style={{ marginLeft: "20px" }}
        />
      </div>
      <p>
        Alby successfully connected to the Zap Bot. You can return to discord
        now.
      </p>
    </div>
  );
};

export default DiscordSuccess;
