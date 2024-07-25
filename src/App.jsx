import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  const isMdUp = useMediaQuery('(min-width: 768px)');
  const [variant, setVariant] = useState('h2');

  useEffect(() => {
    setVariant(isMdUp ? 'h1' : 'h2');
  }, [isMdUp]);

  return (
    <div className="flex justify-center items-center px-30 py-10 flex-col text-center">  { /* This is tailwind */ }
      <Typography variant={variant}>DCM Hagar's House {isMdUp ? `` : <br />}Menu Helper</Typography>
      <Outlet />
    </div>
  );
}

export default App;
