// pages/vault.js
import { useState } from "react";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";

const VaultPage = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (newFile) => {
    setFiles((prevFiles) => [...prevFiles, newFile]);
  };

  return (
    <div>
      <h1>Your Personal Data Vault</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <FileList files={files} />
    </div>
  );
};

export default VaultPage;
