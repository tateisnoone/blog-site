import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { EditProfile } from "../edit-profile/edit-profile";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getProfileInfo } from "@/supabase/profile";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

type ProfileData = {
  avatar_url: string | null;
  full_name: string | null;
  full_name_ge?: string | null;
  id: string;
  updated_at: string | null;
  username: string | null;
  website?: string | null;
  number?: string | null;
};
const ProfileInfo = () => {
  const [user] = useAtom(userAtom);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    if (user?.user?.id) {
      getProfileInfo(user.user.id).then(
        (res: PostgrestSingleResponse<ProfileData[]>) => {
          if (res.error) {
            console.error(res.error);
          } else if (res.data && res.data.length > 0) {
            setProfileData(res.data[0]);
          }
        }
      );
    }
  }, [user]);
  return (
    <>
      <div className="container sm:px-44 mx-auto flex gap-5 font-sans mb-48 mt-9">
        <Card className="flex flex-col p-9 rounded-xl border-solid border-b border-zinc-200 bg-card text-card-foreground shadow h-[350px] w-full mb-5">
          <div className="flex flex-row  items-center mb-3">
            <Avatar className="w-28 h-28 mr-3">
              <AvatarImage src={profileData?.avatar_url ?? undefined} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader className="p-0">
              <CardTitle className="dark:text-white mb-3">
                Welcome {profileData?.full_name}
              </CardTitle>
              <CardDescription className="mb-3">
                You can view or change the details of your profile on this page
              </CardDescription>
            </CardHeader>
          </div>
          <CardContent className="flex flex-col dark:text-white font-sans text-lg">
            <h2>Full Name: {profileData?.full_name}</h2>
            <h2>Full Name (GE): {profileData?.full_name_ge}</h2>
            <h2>Phone Number: {profileData?.number}</h2>
          </CardContent>
          <CardFooter>
            <EditProfile />
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ProfileInfo;
