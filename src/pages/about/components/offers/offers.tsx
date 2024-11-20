import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../../components/ui/card";
const Offers = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5 mb-7">
        <h2 className="text-black dark:text-white font-bold font-sans text-3xl">
          What We Offer
        </h2>
      </div>
      <div className="container sm:px-44 mx-auto flex gap-5 font-sans mb-9">
        <Card className="rounded-xl border-solid border-b border-zinc-200 bg-card bg-gray-50 text-card-foreground shadow h-[225px] w-3/5 mb-5">
          <CardHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-book-open w-10 h-10 text-primary mb-2"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            <CardTitle className="dark:text-black">Rich Content</CardTitle>
            <CardDescription>
              Access a wide range of articles, tutorials, and insights on the
              latest tech trends and best practices.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="rounded-xl border-solid border-b border-zinc-200 bg-card bg-gray-50 text-card-foreground shadow h-[225px] w-3/5 mb-5">
          <CardHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users w-10 h-10 text-primary mb-2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <CardTitle className="dark:text-black">Vibrant Community</CardTitle>
            <CardDescription>
              Connect with like-minded individuals, share your knowledge, and
              grow your professional network.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="rounded-xl border-solid border-b border-zinc-200 bg-card bg-gray-50 text-card-foreground shadow h-[225px] w-3/5 mb-5">
          <CardHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-zap w-10 h-10 text-primary mb-2"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            <CardTitle className="dark:text-black">
              Cutting-edge Topics
            </CardTitle>
            <CardDescription>
              Stay ahead of the curve with content covering emerging
              technologies and innovative solutions.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Offers;
