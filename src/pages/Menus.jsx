import {
  Typography,
  Chip,
  Button,
  Checkbox,
  Select,
  Option,
  Card,
} from "@material-tailwind/react";
import { useState } from "react";
import MenuCard from "../components/MenuCard";
import { menus } from "../constants";
import { Link } from "react-router-dom";

export default function Menus() {
  const [dairy, setDairy] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [dietary, setDietary] = useState("none");

  return (
    <div className="flex flex-col">
      <div className="flex justify-center align-center place-items-start h-[80vh] w-[1100px] px-8">
        <div className="w-full flex flex-col">
          <div className="flex w-full border-b-[3px] border-black h-12">
            <div className="w-6/12 h-auto justify-start px-2 flex items-center">
              <Typography variant="small">
                Adults: 2, Kids 0-3: 2, Kids 4-7: 2, Kids 8-11: 2
              </Typography>
            </div>
            <div className="justify-start w-full h-auto px-2 flex items-center gap-4">
              <Typography variant="h6">Selected:</Typography>
              {dairy && <Chip variant="ghost" value="Dairy free" />}
              {gluten && <Chip variant="ghost" value="Gluten free" />}
              {nuts && <Chip variant="ghost" value="Nut free" />}
              {dietary !== "none" ? (
                <Chip variant="ghost" value={dietary} />
              ) : (
                <></>
              )}
            </div>
            <div className="">
              <Link to={`/`}>
                <Button variant="outlined">Back</Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full h-full">
            <div className="w-3/12 h-max justify-center border-r-[3px] border-black px-2 flex items-center">
              <div className="flex items-center gap-1 flex-col my-4">
                <Typography variant="h6">Food Allergies</Typography>
                <ul>
                  <li>
                    <Checkbox
                      label="Dairy"
                      onChange={(val) => setDairy(!dairy)}
                    />
                  </li>
                  <li>
                    <Checkbox
                      label="Gluten"
                      onChange={(val) => setGluten(!gluten)}
                    />
                  </li>
                  <li>
                    <Checkbox label="Nuts" onChange={(val) => setNuts(!nuts)} />
                  </li>
                </ul>
                <Typography variant="h6">Dietary Needs</Typography>
                <Select
                  label="Select Need"
                  size="large"
                  onChange={(val) => setDietary(val)}
                >
                  <Option value="none">None</Option>
                  <Option value="vegetarian">Vegetarian</Option>
                  <Option value="vegan">Vegan</Option>
                  <Option value="pescatarian">Pescatarian</Option>
                </Select>
              </div>
            </div>
            <div className="justify-start w-9/12 h-auto min-h-fit p-8 flex items-center gap-4 flex-wrap">
              {menus.map((menu, index) => (
                <MenuCard
                  title={menu.name}
                  menu={menu}
                  key={index}
                  adults={3}
                  p1Count={2}
                  p2Count={6}
                  id={index}
                />
              ))}
            </div>
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
