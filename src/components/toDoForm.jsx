import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/toDoSlice";
import { TextField, Button, Box } from "@mui/material";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      gap={2}
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      my={3}
    >
      <TextField
        label="New task"
        variant="filled"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: 2,
          "& .MuiFilledInput-root": {
            borderRadius: 2,
            boxShadow: "none",
            "&:before, &:after": {
              borderBottom: "none",
            },
          },
          "& .MuiInputLabel-root": {
            color: "green",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "green",
          },
          "& .MuiFilledInput-input": {
            color: "green",
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 3,
          boxShadow: 4,
          textTransform: "none",
          fontWeight: "bold",
          transition: "transform 0.2s, background-color 0.2s",
          "&:hover": {
            backgroundColor: "secondary.dark",
            transform: "scale(1.05)",
          },
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;
