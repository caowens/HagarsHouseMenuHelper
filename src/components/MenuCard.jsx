import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

export default function MenuCard({
  title,
  menu,
  adults = 0,
  p1Count = 0,
  p2Count = 0,
  p3Count = 0,
  id,
}) {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  const TABLE_HEAD = ["Ingredient", "Amount", "Measurement"];

  const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
  };

  let adultPortion = JSON.parse(JSON.stringify(menu.adultPortion));
  adultPortion.forEach((ingredient) => {
    ingredient.amount *= adults;
  });

  let portion1 = JSON.parse(JSON.stringify(menu.portion1));
  portion1.forEach((ingredient) => {
    ingredient.amount *= p1Count;
  });

  let portion2 = JSON.parse(JSON.stringify(menu.portion2));
  portion2.forEach((ingredient) => {
    ingredient.amount *= p2Count;
  });

  let portion3 = JSON.parse(JSON.stringify(menu.portion3));
  portion3.forEach((ingredient) => {
    ingredient.amount *= p3Count;
  });

  let consolidatedPortion = [...adultPortion];
  consolidatedPortion.forEach((ingredient, index) => {
    ingredient.amount = roundToHundredth(
      adultPortion[index].amount +
        portion1[index].amount +
        portion2[index].amount +
        portion3[index].amount
    );
  });

  return (
    <>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => handleOpen("md")} variant="gradient" className="w-40">
          {title}
        </Button>
      </div>

      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader className="text-center flex justify-center">
          {title}
        </DialogHeader>
        <DialogBody>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {consolidatedPortion.map(
                ({ ingredient, amount, measurement }, index) => {
                  const isLast = index === consolidatedPortion.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={ingredient}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ingredient}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {measurement}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </DialogBody>
        <DialogFooter className="flex justify-center items-center">
          <Button
            variant="text"
            color="blue-gray"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
          <Button
            variant="gradient"
            color="black"
            onClick={() => handleOpen(null)}
          >
            <span>Print</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
