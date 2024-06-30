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
    ingredient.amount = Math.ceil(
      adultPortion[index].amount +
        portion1[index].amount +
        portion2[index].amount +
        portion3[index].amount
    );
  });

  return (
    <>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => handleOpen("xs")} variant="gradient">
          {`Menu ${id + 1}`}
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
        size={size || "xs"}
        handler={handleOpen}
      >
        <DialogHeader className="text-center flex justify-center">{`Menu ${
          id + 1
        }`}</DialogHeader>
        <DialogBody>
          <ul className="text-center">
            {consolidatedPortion.map((ingredient) => (
              <li>{`${ingredient.ingredient} ${ingredient.amount} ${ingredient.measurement}`}</li>
            ))}
          </ul>
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
    // <Card className="mt-6 w-52">
    //   <CardBody>
    //     <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
    //       {title}
    //     </Typography>
    //     <ul className="text-center">
    //       {consolidatedPortion.map((ingredient) => (
    //         <li>{`${ingredient.ingredient} ${ingredient.amount} ${ingredient.measurement}`}</li>
    //       ))}
    //     </ul>
    //   </CardBody>
    //   <CardFooter className="pt-0 justify-center flex">
    //     <Button>Print</Button>
    //   </CardFooter>
    // </Card>
  );
}
