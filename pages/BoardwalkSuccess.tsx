import Image from "next/image";
import boardwalkLogo from "@/public/BoardwalkSquareWithText.png";

const BoardwalkSuccess = () => {
  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Image src={boardwalkLogo} alt="Discord Logo" width={200} />
      </div>
      <p style={{ fontSize: "1.3rem" }}>
        Alby successfully connected to your Boardwalk. You can return to the app
        now.
      </p>
    </div>
  );
};

export default BoardwalkSuccess;
