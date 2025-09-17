// pages/index.js
import { useState } from "react";
import { useRouter } from "next/router";
import PinInput from "../components/PinInput";

const IndexPage = () => {
  const [pin, setPin] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic PIN validation (You can make it more complex later)
    if (pin === "1234") {
      router.push("/vault");
    } else {
      alert("Invalid PIN");
    }
  };

  return (
    <div>
      <h1>Welcome to Your Data Vault</h1>
      <form onSubmit={handleSubmit}>
        <PinInput value={pin} onChange={(e) => setPin(e.target.value)} />
        <button type="submit">Enter Vault</button>
      </form>
    </div>
  );
};

export default IndexPage;
