import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../../../components/ui/card";
const AuthorInfo = () => {
  return (
    <>
      <div className="container sm:px-44 mx-auto flex gap-5 font-sans mb-9 mt-9">
        <Card className="flex p-9 rounded-xl border-solid border-b border-zinc-200 bg-card text-card-foreground shadow h-[212px] w-full mb-5">
          <div>
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-8 border-4 border-blue-500">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted ">
                JD
              </span>
            </span>
          </div>
          <CardHeader className="p-0">
            <CardTitle className="dark:text-white mb-3">John Doe</CardTitle>
            <CardDescription className="mb-3">
              Tech enthusiast, software engineer, and avid blogger. Passionate
              about AI, web development, and the future of technology.
            </CardDescription>
            <CardContent className="p-0">
              <div className="h-9 flex justify-start gap-3 ">
                <Button className="rounded-full w-[34px] h-[34px] bg-white border-solid border-slate-100 border-2 dark:bg-black hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="CurrentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-twitter h-4 w-4 text-black  dark:text-white"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button className="rounded-full w-[34px] h-[34px] bg-white border-solid border-slate-100 border-2 dark:bg-black hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-twitter h-4 w-4 text-black  dark:text-white"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button className="rounded-full w-[34px] h-[34px] bg-white border-solid border-slate-100 border-2 dark:bg-black hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="llucide lucide-twitter h-4 w-4 text-black  dark:text-white"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
                <Button className="rounded-full w-[34px] h-[34px] bg-white border-solid border-slate-100 border-2 dark:bg-black hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-twitter h-4 w-4 text-black  dark:text-white"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="p-0">
              <div className="flex gap-3">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-users h-4 w-4 mr-1"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>{" "}
                  1234 Followers
                </span>
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-users h-4 w-4 mr-1"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>{" "}
                  567 Following
                </span>
              </div>
            </CardFooter>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default AuthorInfo;
