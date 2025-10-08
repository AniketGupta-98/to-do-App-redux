import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { List, Typography } from "@mui/material";
import TodoItem from "./toDoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    console.log("todos useSelector", todos);
  }, [todos]);

  if (!todos.length) {
    return <Typography variant="body1">No tasks yet. Add one!</Typography>;
  }

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
