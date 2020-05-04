import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Instructions({ instructions, setInstructions }) {
  const handleOnChange = (event) => {
    setInstructions(event.target.value);
  };

  return (
    <div style={{ width: "50%" }}>
      <TextField
        style={{ width: "100%" }}
        id="filled-multiline-static"
        label="Instructions"
        multiline
        rows={20}
        value={instructions}
        onChange={handleOnChange}
        variant="filled"
      />
    </div>
  );
}
