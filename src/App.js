import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  //Listener
  useEffect(() => {
    //fetching the data from the database
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault(); //Disables refresh feature of the form, form refreshes by default when presse enter.
    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  // { username: username, text: input }

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="logo"
      />
      <h1> MESNGR</h1>
      <h2>Welcome {userName}</h2>
      <form className="app-form">
        <FormControl className="app-formControl">
          <Input
            className="app-input"
            placeholder="Enter a message..."
            value={input}
            onChange={changeInput}
          />
          <IconButton
            className="app-iconButton"
            disabled={!input}
            variant="outlined"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
