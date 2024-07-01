import {
  Typography,
  Chip,
  Button,
  Checkbox,
  Select,
  Option,
  Card,
} from "@material-tailwind/react";
import { useState, useEffect, useContext } from "react";
import MenuCard from "../components/MenuCard";
import { menus } from "../constants";
import { Link } from "react-router-dom";
import { FiltersContext } from "../FiltersContext";

export default function Menus() {
    const { filters, setFilters } = useContext(FiltersContext);
    const [filteredMenus, setFilteredMenus] = useState([]);

    useEffect(() => {
        const applyFilters = () => {
            const filtered = menus.filter((menu) => {
                if (filters.dairy && !menu.allergyFree.includes("dairy")) return false;
                if (filters.gluten && !menu.allergyFree.includes("gluten")) return false;
                if (filters.nuts && !menu.allergyFree.includes("nuts")) return false;
                if (filters.dietary !== 'none' && menu.dietary !== filters.dietary) return false;
                return true;
            });
            setFilteredMenus(filtered);
        };

        applyFilters();
    }, [filters]);

    const handleCheckboxChange = (field) => {
        setFilters({ ...filters, [field]: !filters[field] });
    };

    const handleSelectChange = (value) => {
        setFilters({ ...filters, dietary: value });
    };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center align-center place-items-start h-[80vh] w-[1100px] px-8">
        <div className="w-full flex flex-col">
          <div className="flex w-full border-b-[3px] border-black h-12">
            <div className="w-6/12 h-auto justify-start px-2 flex items-center">
              <Typography variant="small">
                Adults: {filters.adults}, Kids 0-3: {filters.kids0to3}, Kids 4-7: {filters.kids4to7}, Kids 8-11: {filters.kids8to11}
              </Typography>
            </div>
            <div className="justify-start w-full h-auto px-2 flex items-center gap-4">
              <Typography variant="h6">Selected:</Typography>
              {filters.dairy && <Chip variant="ghost" value="Dairy free" />}
              {filters.gluten && <Chip variant="ghost" value="Gluten free" />}
              {filters.nuts && <Chip variant="ghost" value="Nut free" />}
              {filters.dietary !== "none" && <Chip variant="ghost" value={filters.dietary} />}
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
                      checked={filters.dairy}
                      onChange={() => handleCheckboxChange("dairy")}
                    />
                  </li>
                  <li>
                    <Checkbox
                      label="Gluten"
                      checked={filters.gluten}
                      onChange={() => handleCheckboxChange("gluten")}
                    />
                  </li>
                  <li>
                    <Checkbox 
                        label="Nuts" 
                        checked={filters.nuts}
                        onChange={() => handleCheckboxChange("nuts")}
                    />
                  </li>
                </ul>
                <Typography variant="h6">Dietary Needs</Typography>
                <Select
                  label="Select Need"
                  size="large"
                  value={filters.dietary}
                  onChange={(val) => handleSelectChange(val)}
                >
                  <Option value="none">None</Option>
                  <Option value="vegetarian">Vegetarian</Option>
                  <Option value="vegan">Vegan</Option>
                  <Option value="pescatarian">Pescatarian</Option>
                </Select>
              </div>
            </div>
            <div className="justify-start w-9/12 h-auto min-h-fit p-8 flex items-center gap-4 flex-wrap">
              {filteredMenus.map((menu, index) => (
                <MenuCard
                  title={menu.name}
                  menu={menu}
                  key={index}
                  adults={filters.adults}
                  p1Count={filters.kids0to3}
                  p2Count={filters.kids4to7}
                  p3Count={filters.kids8to11}
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
