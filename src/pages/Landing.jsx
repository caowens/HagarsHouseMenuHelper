import {
  Typography,
  Input,
  Select,
  Option,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState, useContext } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { FiltersContext } from "../FiltersContext";

export default function Landing(params) {
  const { filters, setFilters } = useContext(FiltersContext);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleSearch = () => {
    navigate("/menus");
  };

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
                value={filters.adults}
                onChange={(e) => handleChange("adults", e.target.value)}
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
                value={filters.kids0to3}
                onChange={(e) => handleChange("kids0to3", e.target.value)}
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
                value={filters.kids4to7}
                onChange={(e) => handleChange("kids4to7", e.target.value)}
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
                value={filters.kids8to11}
                onChange={(e) => handleChange("kids8to11", e.target.value)}
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
                <Checkbox label="Dairy" checked={filters.dairy} onChange={(e) => handleChange("dairy", e.target.checked)} />
                <Checkbox label="Gluten" checked={filters.gluten} onChange={(e) => handleChange("gluten", e.target.checked)} />
                <Checkbox label="Nuts" checked={filters.nuts} onChange={(e) => handleChange("nuts", e.target.checked)} />
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <Typography className="w-full" variant="h6">
                Dietary Needs
              </Typography>
              <Select
                label="Select Need"
                value={filters.dietary}
                onChange={(val) => handleChange("dietary", val)}
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

        <Button onClick={handleSearch}>Find menus</Button>
    </div>
  );
}
