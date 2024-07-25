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
      <div className="flex flex-col sm:flex-row justify-center bg-image w-full h-auto py-10">
        <div className="logo h-[100px] w-[100px] self-center sm:ml-16 mr-0"></div>
        <div className="w-full h-auto align-middle justify-center self-center">
          <Typography variant={variant}>Hagar's House {isMdUp ? `` : <br />}Menu Helper</Typography>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
