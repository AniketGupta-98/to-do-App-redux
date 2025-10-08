import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/toDoSlice';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => dispatch(deleteTodo(todo.id))}>
          {/* <DeleteIcon /> */}
        </IconButton>
      }
      disablePadding
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      />
    </ListItem>
  );
};

export default TodoItem;
