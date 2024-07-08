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
import { useMediaQuery } from "@mui/material";
// import { db, getMenus } from "../firebase/firebase";

export default function Landing(params) {
  const { filters, setFilters } = useContext(FiltersContext);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleSearch = () => {
    navigate("/menus");
  };

  const isMdUp = useMediaQuery("(min-width: 821px)");

  // const handleMenus = async () => {
  //   try {
  //     const menus = await getMenus(db);
  //     console.log(menus);
  //   } catch (error) {
  //     console.error("Error fetching menus: ", error);
  //   }
  // };

  // const addMenu = async () => {
  //   // Add a document with a generated ID.
  //   try {
  //     const docRef = await addDoc(collection(db, "menus"), {
  //       first: "Alan",
  //       middle: "Mathison",
  //       last: "Turing",
  //       born: 1912
  //     });

  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  // const addAllMenus = async () => {
  //   for (const menu of menus) {
  //     try {
  //       const docRef = await addDoc(collection(db, "menus"), {
  //         name: menu.name,
  //         allergyFree: menu.allergyFree,
  //         dietary: menu.dietary,
  //         adultPortion: menu.adultPortion,
  //         portion1: menu.portion1,
  //         portion2: menu.portion2,
  //         portion3: menu.portion3
  //       });

  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   }
  // }

  return (
    <div className="flex flex-col justify-center items-center sm:gap-10 mt-20 sm:my-20">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="h-full w-full flex-grow place-items-center sm:mr-10">
          <div className="h-80 flex flex-col justify-center items-center sm:items-end gap-4">
            <Typography variant="h4" className="text-center sm:text-end">
              How many?
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
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

        {isMdUp ? <span className="vertical-line"></span> : <hr />}

        <div className="h-full w-full flex-grow place-items-center mt-6 sm:ml-10">
          <div className="h-72 sm:h-80 flex flex-col justify-center items-center sm:items-start gap-4">
            <div className="flex items-center flex-col sm:flex-row">
              <Typography className="w-32" variant="h6">
                Food Allergies
              </Typography>
              <div className="gap-2 flex">
                <Checkbox
                  label="Dairy"
                  checked={filters.dairy}
                  onChange={(e) => handleChange("dairy", e.target.checked)}
                />
                <Checkbox
                  label="Gluten"
                  checked={filters.gluten}
                  onChange={(e) => handleChange("gluten", e.target.checked)}
                />
                <Checkbox
                  label="Nuts"
                  checked={filters.nuts}
                  onChange={(e) => handleChange("nuts", e.target.checked)}
                />
              </div>
            </div>
            <div className="flex gap-6 items-center flex-col sm:flex-row">
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

            {/* <Button onClick={handleMenus}>Print menus</Button>
            <Button onClick={addMenu}>Add menu</Button>
            <Button onClick={addAllMenus}>Add all menus</Button> */}
          </div>
        </div>
      </div>

      <Button className="-mt-4" onClick={handleSearch}>
        Find menus
      </Button>
    </div>
  );
}
