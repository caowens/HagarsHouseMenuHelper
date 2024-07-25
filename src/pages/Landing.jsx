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

  // const isMdUp = useMediaQuery("(min-width: 821px)");

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
        <div className="h-full w-full flex-grow place-items-center">
          <div className="h-80 flex flex-col justify-center items-center gap-4">
            <Typography variant="h4" className="text-center">
              How many?
            </Typography>
    
            <div className="flex flex-col gap-2 items-center">
              <Typography className="w-full" variant="h6">
                Adult
              </Typography>
              <Input
                placeholder="# of Adults"
                value={filters.adults}
                onChange={(e) => handleChange("adults", e.target.value)}
                className="!border-t-blue-gray-200 text-center focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Typography className="w-full" variant="h6">
                Child aged 0-3
              </Typography>
              <Input
                placeholder="# of children 0-3"
                value={filters.kids0to3}
                onChange={(e) => handleChange("kids0to3", e.target.value)}
                className="!border-t-blue-gray-200 text-center focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Typography className="w-full" variant="h6">
                Children (Aged 4-7)
              </Typography>
              <Input
                placeholder="# of children 4-7s"
                value={filters.kids4to7}
                onChange={(e) => handleChange("kids4to7", e.target.value)}
                className="!border-t-blue-gray-200 text-center focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Typography className="w-full" variant="h6">
                Children (Aged 8-11)
              </Typography>
              <Input
                placeholder="# of children 8-11"
                value={filters.kids8to11}
                onChange={(e) => handleChange("kids8to11", e.target.value)}
                className="!border-t-blue-gray-200 text-center focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Button className="sm:mt-8 mt-16" onClick={handleSearch}>
        Find menus
      </Button>
    </div>
  );
}
