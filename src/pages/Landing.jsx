import {
  Typography,
  Input,
  Select,
  Option,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Landing(params) {
  const [value, setValue] = useState("none");

  return (
    <div className="flex flex-col justify-center items-center gap-10 my-20">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="h-full w-full flex-grow place-items-center mr-10">
          <div className="h-80 flex flex-col justify-center items-end gap-4">
            <Typography variant="h4" className="text-end">
              How many?
            </Typography>
            <div className="flex gap-6 items-center">
              <Typography className="w-full" variant="h6">
                Adult
              </Typography>
              <Input
                placeholder="# of Adults"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex gap-6 items-center">
              <Typography className="w-full" variant="h6">
                Child aged 0-3
              </Typography>
              <Input
                placeholder="# of children 0-3"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex gap-6 items-center">
              <Typography className="w-full" variant="h6">
                Child aged 4-7
              </Typography>
              <Input
                placeholder="# of children 4-7s"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex gap-6 items-center">
              <Typography className="w-full" variant="h6">
                Child aged 8-11
              </Typography>
              <Input
                placeholder="# of children 8-11"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
        </div>

        <span className="vertical-line"></span>

        <div className="h-full w-full flex-grow place-items-center ml-10">
          <div className="h-80 flex flex-col justify-center items-start gap-4">
            <div className="flex items-center">
              <Typography className="w-32" variant="h6">
                Food Allergies
              </Typography>
              <div className="gap-2 w-64 flex">
                <Checkbox label="Dairy" />
                <Checkbox label="Gluten" />
                <Checkbox label="Nuts" />
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <Typography className="w-full" variant="h6">
                Dietary Needs
              </Typography>
              <Select
                label="Select Need"
                //   value={value}
                onChange={(val) => setValue(val)}
              >
                <Option value="none">None</Option>
                <Option value="vegetarian">Vegetarian</Option>
                <Option value="vegan">Vegan</Option>
                <Option value="pescatarian">Pescatarian</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <Link to={`menus`}>
        <Button>Find menus</Button>
      </Link>
    </div>
  );
}
