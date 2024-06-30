import { Button, Typography } from "@material-tailwind/react";
import Landing from "./pages/Landing";
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="flex justify-center items-center px-30 py-10 flex-col">
      <Typography variant="h1">Hagar's House Menu Helper</Typography>
      <Outlet />
    </div>
  );
}

export default App;
