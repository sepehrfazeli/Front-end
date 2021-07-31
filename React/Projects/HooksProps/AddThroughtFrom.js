import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    if(text === '' ){
    event.preventDefault();}
    else{
    event.preventDefault();
    //To prevent the form from refreshing
    //the page, call event.preventDefault()
    //inside handleSubmit(). This prevents
    //the browser from performing its default
    //behavior when a form is submitted.
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    };
    props.addThought(thought);
    setText('');}
  };
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
