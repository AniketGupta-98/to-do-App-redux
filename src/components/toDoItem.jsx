import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/toDoSlice";
import { ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          onClick={() => dispatch(deleteTodo(todo.id))}
          sx={{
            color: "rgba(255, 200, 100, 0.9)",
            "&:hover": { color: "amber.main" },
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
      sx={{
        mb: 1,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 2,
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        sx={{
          color: "rgba(200,255,180,0.8)",
          "&.Mui-checked": {
            color: "rgba(144, 238, 144, 0.9)",
          },
        }}
      />
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "rgba(180,180,180,0.8)" : "#f0fdf4",
        }}
      />
    </ListItem>
  );
};

export default TodoItem;
