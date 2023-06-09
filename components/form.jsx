import React, { useState } from "react";
import {
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import axios from "axios";

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const handleSubmit = async (username) => {
   
      const resp = await axios.get(`https://api.github.com/users/${username}`);
      onSubmit(resp.data);
      setUsername("");
  };

  return (
    <SafeAreaView>
      <TextInput
        type="text"
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="GitHub username"
        ref={input => {
          this.textInput = input;
        }}
      />
      <Button title = "Add card" onPress={() => handleSubmit(username)} />
    </SafeAreaView>
  );
};

export default Form;