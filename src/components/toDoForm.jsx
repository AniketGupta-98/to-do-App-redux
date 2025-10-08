import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/toDoSlice';
import { TextField, Button, Box } from '@mui/material';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      gap={2}
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      my={3}
    >
      <TextField
        label="Enter a new task"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 3,
          boxShadow: 3,
          textTransform: 'none',
          fontWeight: 'bold',
          transition: '0.3s',
          '&:hover': {
            backgroundColor: 'primary.dark',
            transform: 'scale(1.03)',
          },
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;
