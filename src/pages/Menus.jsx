import { Typography, Chip, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function Menus() {
    return (
        <div className="flex justify-center align-center place-items-center h-[80vh] rounded-full border-solid w-[1100px]">
            <div className="border-solid rounded-full w-full flex flex-col">
                <div className="flex w-full h-12">
                    <div className="w-4/12 h-auto justify-start border-solid border-black border-[1px] px-2 flex items-center">
                        <Typography variant="p">Adults: 2, Kids 0-3: 2, Kids 4-7: 2, Kids 8-11: 2</Typography>
                    </div>
                    <div className="justify-start w-8/12 h-auto border-solid border-black border-[1px] px-2 flex items-center gap-4">
                        <Typography variant="h6">Selected:</Typography>
                        <ChipDismissible text="Nut free" />
                        <ChipDismissible text="Dairy free" />
                        <ChipDismissible text="Gluten free" />
                        <ChipDismissible text="Vegetarian" />
                    </div>
                </div>
            </div>
        </div>
    );
};

function ChipDismissible({ text }) {
  const [open, setOpen] = useState(true);
 
  return (
    <>
      <Chip open={open} value={text ? text : "Dismissible"} onClose={() => setOpen(false)} />
    </>
  );
}