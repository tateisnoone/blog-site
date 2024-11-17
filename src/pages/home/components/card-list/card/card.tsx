import { PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import img from "../../../../../assets/placeholder.svg";

const MyCard: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <div className="container lg mx-auto px-4  mt-8 mb-8 font-sans">
        <Card className="rounded-xl border-solid border-b border-zinc-200 bg-card text-card-foreground shadow h-[480px] w-3/5 mb-5">
          <CardHeader>
            <div className="w-full h-52 overflow-hidden rounded-xl mb-4">
              <img src={img} />
            </div>
            <CardTitle>The Future Of Blockchain Technology</CardTitle>
            <CardDescription>John Doe, 2023 Jun</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi a perspiciatis aliquam doloribus iste laudantium
              aliquid! Est, enim laboriosam accusamus, at fugit reprehenderit
              itaque sapiente voluptatibus inventore quisquam aperiam similique.
            </p>
          </CardContent>
          <CardFooter>
            <p className="bg-slate-300 w-23 rounded-sm">Technology</p>
          </CardFooter>
        </Card>
        <Card className="rounded-xl border-solid border-b border-zinc-200 bg-card text-card-foreground shadow h-[480px] w-3/5 mb-5">
          <CardHeader>
            <div className="w-full h-52 overflow-hidden rounded-xl mb-4">
              <img src={img} />
            </div>
            <CardTitle>The Future Of Blockchain Technology</CardTitle>
            <CardDescription>John Doe, 2023 Jun</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi a perspiciatis aliquam doloribus iste laudantium
              aliquid! Est, enim laboriosam accusamus, at fugit reprehenderit
              itaque sapiente voluptatibus inventore quisquam aperiam similique.
            </p>
          </CardContent>
          <CardFooter>
            <p className="bg-slate-300 w-23 rounded-sm">Technology</p>
          </CardFooter>
        </Card>
        <Card className="rounded-xl border-solid border-b border-zinc-200 bg-card text-card-foreground shadow h-[480px] w-3/5 mb-5">
          <CardHeader>
            <div className="w-full h-52 overflow-hidden rounded-xl mb-4">
              <img src={img} />
            </div>
            <CardTitle>The Future Of Blockchain Technology</CardTitle>
            <CardDescription>John Doe, 2023 Jun</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi a perspiciatis aliquam doloribus iste laudantium
              aliquid! Est, enim laboriosam accusamus, at fugit reprehenderit
              itaque sapiente voluptatibus inventore quisquam aperiam similique.
            </p>
          </CardContent>
          <CardFooter>
            <p className="bg-slate-300 w-23 rounded-sm">Technology</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default MyCard;
