import React from "react";

const Button: React.FC = () => {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      onClick={() => alert("Hello from Remote App2!")}
    >
      Remote Button
    </button>
  );
};

export default Button;
