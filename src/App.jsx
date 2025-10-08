import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import TodoForm from "./components/toDoForm";
import TodoList from "./components/toDoList";

function App() {
  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', py: 5 }}>
      <Paper
        elevation={4}
        sx={{
          borderRadius: 4,
          padding: 4,
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" color="primary" gutterBottom>
            🎯 Redux To-Do
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Stay organized and boost productivity
          </Typography>
        </Box>
        <TodoForm />
        <Box mt={4}>
          <TodoList />
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
