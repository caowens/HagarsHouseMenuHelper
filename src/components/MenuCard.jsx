import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function MenuCard({ title, portions }) {
  return (
    <Card className="mt-6 w-52">
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
          Menu 1
        </Typography>
        <ul className="text-center">
          <li>
            <Typography>Turkey 8oz</Typography>
          </li>
          <li>
            <Typography>Turkey 8oz</Typography>
          </li>
          <li>
            <Typography>Turkey 8oz</Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="pt-0 justify-center flex">
        <Button>Print</Button>
      </CardFooter>
    </Card>
  );
}
