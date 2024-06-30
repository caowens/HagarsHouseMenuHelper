import {
  Typography,
  Chip,
  Button,
  Checkbox,
  Select,
  Option,
  Card
} from "@material-tailwind/react";
import { useState } from "react";

export default function Menus() {
  const [value, setValue] = useState("none");

  return (
    <div className="flex justify-center align-center place-items-start h-[80vh] border-solid w-[1100px] border-[1px] rounded-2xl p-8 mt-6 shadow-lg">
      <div className="border-solid rounded-lg w-full flex flex-col">
        <div className="flex w-full h-12">
          <div className="w-5/12 h-auto justify-start border-solid border-[1px] px-2 flex items-center">
            <Typography variant="p">
              Adults: 2, Kids 0-3: 2, Kids 4-7: 2, Kids 8-11: 2
            </Typography>
          </div>
          <div className="justify-start w-7/12 h-auto border-solid border-[1px] px-2 flex items-center gap-4">
            <Typography variant="h6">Selected:</Typography>
            <ChipDismissible text="Nut free" />
            <ChipDismissible text="Dairy free" />
            <ChipDismissible text="Gluten free" />
            <ChipDismissible text="Vegetarian" />
          </div>
        </div>
        <div className="flex w-full h-full">
          <div className="w-3/12 h-full justify-center border-solid border-[1px] px-2 flex items-center">
            <div className="flex items-center gap-1 flex-col my-4">
              <Typography variant="h6">Food Allergies</Typography>
              <ul>
                <li>
                  <Checkbox label="Dairy" />
                </li>
                <li>
                  <Checkbox label="Gluten" />
                </li>
                <li>
                  <Checkbox label="Nuts" />
                </li>
              </ul>
              <Typography variant="h6">Dietary Needs</Typography>
              <Select
                label="Select Need"
                //   value={value}
                size="large"
                onChange={(val) => setValue(val)}
              >
                <Option value="none">None</Option>
                <Option value="vegetarian">Vegetarian</Option>
                <Option value="vegan">Vegan</Option>
                <Option value="pescatarian">Pescatarian</Option>
              </Select>
            </div>
          </div>
          <div className="justify-start w-9/12 h-full border-solid border-[1px] px-2 flex items-center gap-4">
            <Typography variant="h6">Content</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChipDismissible({ text }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Chip
        open={open}
        value={text ? text : "Dismissible"}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
