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
          if (filters.dairy && !menu.allergyFree.includes("dairy"))
            return false;
          if (filters.gluten && !menu.allergyFree.includes("gluten"))
            return false;
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
    return (
      <div className="flex justify-center items-center h-screen w-auto">
        <Spinner className="h-1/6 sm:h-2/6 w-auto" />
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-8">
      <div className="flex justify-center align-center place-items-start sm:h-[80vh] w-auto xl:w-[1100px] px-8">
        <div className="w-full flex flex-col">
          <div className="flex flex-col sm:flex-row w-full sm:border-b-[3px] justify-between border-black sm:h-12">
            <div className="sm:w-auto h-auto text-center justify-center sm:justify-start px-2 flex items-center gap-6">
              <Typography variant="medium">
                Children (0-3): <strong>{filters.kids0to3}</strong>
              </Typography>
              <Typography variant="medium">
                Children (4-7): <strong>{filters.kids4to7}</strong>
              </Typography>
              <Typography variant="medium">
                Children (8-11): <strong>{filters.kids8to11}</strong>
              </Typography>
              <Typography variant="medium">
                Adults & Children (12-17): <strong>{filters.adults}</strong>
              </Typography>
            </div>
            <div className="order-first mb-4 sm:mb-0 sm:order-none">
              <Link to={`/`}>
                <Button variant="outlined">Back</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:w-full sm:h-full justify-center">
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
