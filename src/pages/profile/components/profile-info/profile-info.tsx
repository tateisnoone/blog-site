import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { EditProfile } from "../edit-profile/edit-profile";

const ProfileInfo = () => {
  return (
    <>
      <div className="container sm:px-44 mx-auto flex gap-5 font-sans mb-9 mt-9">
        <Card className="flex flex-col p-9 rounded-xl border-solid border-b border-zinc-200 bg-card text-card-foreground shadow h-[400px] w-full mb-5">
          <div className="flex flex-row  items-center mb-9">
            <Avatar className="w-28 h-28 mr-3">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader className="p-0">
              <CardTitle className="dark:text-white mb-3">Welcome</CardTitle>
              <CardDescription className="mb-3">
                You can view or change the details of your profile on this page
              </CardDescription>
            </CardHeader>
          </div>

          <CardContent className="flex flex-col dark:text-white font-sans text-lg">
            <h2>Full Name:</h2>
            <h2>Full Name (GE):</h2>
            <h2>Phone Number:</h2>
            <EditProfile />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfileInfo;
