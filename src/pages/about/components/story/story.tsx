import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
const Story = () => {
  return (
    <>
      <div className="container sm:px-44 mx-auto mb-9">
        <Card className="rounded-xl border-solid border-b border-zinc-200 bg-card bg-gray-200 text-card-foreground shadow h-[225px] mb-5 font-sans p-4">
          <CardHeader>
            <CardTitle className="mb-3 dark:text-black">Our Story</CardTitle>
            <CardDescription>
              Founded in 2023, bitBlogs started as a small project by a group of
              passionate developers who wanted to create a space for sharing
              their experiences and learning from others. What began as a simple
              blog quickly grew into a thriving community of tech enthusiasts
              from all around the world.
            </CardDescription>
            <CardDescription>
              Today, bitBlogs is proud to be a leading platform for
              technology-focused content, fostering innovation and collaboration
              in the ever-evolving world of tech.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="container sm:px-44 mx-auto flex flex-col font-sans items-center text-center gap-5 mb-14">
        <h2 className="font-semibold text-3xl">Join Us on Our Journey</h2>
        <p className="text-gray-500 leading-7">
          Whether you're a seasoned developer, a curious beginner, or somewhere
          in between, there's a place for you at bitBlogs. Let's shape the
          future of technology together.
        </p>
        <Button className="w-44 bg-blue-500 hover:bg-blue-400">
          Get Started Today
        </Button>
      </div>
    </>
  );
};

export default Story;
