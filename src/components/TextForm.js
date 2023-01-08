import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase Was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log('Uppercase Was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    // console.log('Uppercase Was clicked' + text);
    let newText = "";
    setText(newText);
    props.showAlert(" All cleared!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra Spaces removed!", "success");
  };
  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
    props.showAlert(" Speaking!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#1a3d4b96" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear All
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleSpeakClick}
        >
          Speak
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words, {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here."}</p>
      </div>
    </>
  );
}
