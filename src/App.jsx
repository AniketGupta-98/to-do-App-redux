import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TodoForm from "./components/toDoForm";
import TodoList from "./components/toDoList";
import "./App.css";

// 🍃 Generate random falling leaves
function generateLeaves(count = 12) {
  const leaves = [];
  for (let i = 0; i < count; i++) {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${10 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 10}s`,
      transform: `rotate(${Math.random() * 360}deg)`,
    };
    leaves.push(<div key={`leaf-${i}`} className="leaf" style={style} />);
  }
  return leaves;
}

// ✨ Generate floating fireflies
function generateFireflies(count = 25) {
  const flies = [];
  for (let i = 0; i < count; i++) {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${5 + Math.random() * 5}s`,
      animationDelay: `${Math.random() * 5}s`,
    };
    flies.push(<div key={`firefly-${i}`} className="firefly" style={style} />);
  }
  return flies;
}

// 🎨 Jungle theme
const theme = createTheme({
  palette: {
    primary: { main: "#8bc34a" },
    secondary: { main: "#ffc107" },
    background: {
      paper: "#2e3b2f",
      default: "#214b3c",
    },
    text: {
      primary: "#f0fdf4",
      secondary: "#c0d0c4",
    },
  },
  typography: {
    h4: { fontWeight: 700, color: "#fffde7" },
    subtitle1: { color: "#c0d0c4" },
  },
});

function App() {
  return (
    <div className="jungle-bg">
      {/* Sky & Stars */}
      <div className="sky"></div>
      <div className="stars" />

      {/* Parallax Tree Layers */}
      <div className="trees layer-back"></div>
      <div className="trees layer-mid"></div>
      <div className="trees layer-front"></div>

      {/* Animated Leaves & Fireflies */}
      <div className="leaves">{generateLeaves(15)}</div>
      <div className="fireflies">{generateFireflies(25)}</div>

      {/* Jungle To-Do App */}
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="sm"
          sx={{
            minHeight: "100vh",
            position: "relative",
            zIndex: 10,
            py: 5,
          }}
        >
          <Paper
            elevation={10}
            sx={{
              borderRadius: 4,
              mt: 6,
              p: 4,
              backgroundColor: "rgba(46, 59, 47, 0.85)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
            }}
          >
            <Box textAlign="center" mb={3}>
              <Typography variant="h4" color="primary" gutterBottom>
                🌿 Jungle To-Do
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Stay wild & organized
              </Typography>
            </Box>

            <TodoForm />
            <Box mt={4}>
              <TodoList />
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
