import {
  Typography,
  Chip,
  Button,
  Checkbox,
  Select,
  Option,
  Card,
  Spinner,
} from "@material-tailwind/react";
import { useState, useEffect, useContext } from "react";
import MenuCard from "../components/MenuCard";
import { getMenus, db } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { FiltersContext } from "../FiltersContext";

export default function Menus() {
    const { filters, setFilters } = useContext(FiltersContext);
    const [menus, setMenus] = useState([]);
    const [filteredMenus, setFilteredMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch menus when the component mounts
    useEffect(() => {
      const fetchMenus = async () => {
        try {
          const fetchedMenus = await getMenus(db);
          setMenus(fetchedMenus);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching menus: ", error);
          setLoading(false);
        }
      };

      fetchMenus();
    }, []);

    // Apply filters whenever filters or menus change
    useEffect(() => {
      if (!loading) {
        const applyFilters = () => {
          const filtered = menus.filter((menu) => {
            if (filters.dairy && !menu.allergyFree.includes("dairy")) return false;
            if (filters.gluten && !menu.allergyFree.includes("gluten")) return false;
            if (filters.nuts && !menu.allergyFree.includes("nuts")) return false;
            if (filters.dietary !== "none" && menu.dietary !== filters.dietary)
              return false;
            return true;
          });
          setFilteredMenus(filtered);
        };

        applyFilters();
      }
    }, [filters, menus, loading]);

    const handleCheckboxChange = (field) => {
        setFilters({ ...filters, [field]: !filters[field] });
    };

    const handleSelectChange = (value) => {
        setFilters({ ...filters, dietary: value });
    };

    if (loading) {
      return <div className="flex justify-center items-center h-screen w-auto">
        <Spinner className="h-1/6 sm:h-2/6 w-auto" />
      </div>;
    }

  return (
    <div className="flex flex-col mt-8">
      <div className="flex justify-center align-center place-items-start sm:h-[80vh] w-auto xl:w-[1100px] px-8">
        <div className="w-full flex flex-col">
          <div className="flex flex-col sm:flex-row w-full sm:border-b-[3px] border-black sm:h-12">
            <div className="sm:w-6/12 h-auto text-center justify-center sm:justify-start px-2 flex items-center">
              <Typography variant="small">
                Adults: {filters.adults}, Kids 0-3: {filters.kids0to3}, Kids 4-7: {filters.kids4to7}, Kids 8-11: {filters.kids8to11}
              </Typography>
            </div>
            <div className="justify-start sm:w-full h-auto px-2 flex items-center my-2 sm:my-0 gap-4 flex-wrap">
              <Typography variant="h6">Selected:</Typography>
              {filters.dairy && <Chip variant="ghost" value="Dairy free" />}
              {filters.gluten && <Chip variant="ghost" value="Gluten free" />}
              {filters.nuts && <Chip variant="ghost" value="Nut free" />}
              {filters.dietary !== "none" && <Chip variant="ghost" value={filters.dietary} />}
            </div>
            <div className="order-first mb-4 sm:mb-0 sm:order-none">
              <Link to={`/`}>
                <Button variant="outlined">Back</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:w-full sm:h-full">
            <div className="sm:w-3/12 h-max justify-center sm:border-r-[3px] border-black px-2 flex items-center">
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
            <div className="justify-center sm:justify-start sm:w-9/12 h-auto sm:min-h-fit p-8 flex items-center gap-4 flex-wrap">
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
