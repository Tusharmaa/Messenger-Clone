import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message-user"}`}>
      <Card className={isUser ? "message-userCard" : "message-guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {isUser
              ? message.message
              : `${message.username || "unkown user"} : ${message.message}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

//
