import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userAtom } from "@/store/auth";
import { fillProfileInfo } from "@/supabase/profile";
import { FillProfileInfoPayload } from "@/supabase/profile/index.types";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { FormEvent, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function EditProfile() {
  const user = useAtomValue(userAtom);
  const [editPayload, setEditPayload] = useState<FillProfileInfoPayload>({
    full_name: "",
    full_name_ge: "",
    number: "",
    avatar_url: "",
  });

  const { mutate: handleEditProfile } = useMutation({
    mutationKey: ["edit-profile-info"],
    mutationFn: fillProfileInfo,
  });

  const avatars = [
    {
      label: "John Doe",
      url: createAvatar(lorelei, { seed: "John Doe" }).toDataUri(),
    },
    {
      label: "Jane Doe",
      url: createAvatar(lorelei, { seed: "Jane Doe" }).toDataUri(),
    },
    {
      label: "Random",
      url: createAvatar(lorelei, { seed: "Random" }).toDataUri(),
    },
  ];
  const handleAvatarSelect = (avatarUrl: string) => {
    setEditPayload((prev) => ({
      ...prev,
      avatar_url: avatarUrl,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleEditProfile({ ...editPayload, id: user?.user?.id });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-sans">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="font-sans">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 p-0">
            <div className="grid grid-cols-4 items-center gap-4 p-0">
              <Label htmlFor="name" className="text-right font-sans">
                Full Name
              </Label>
              <Input
                id="name"
                value={editPayload.full_name}
                onChange={(e) => {
                  setEditPayload({
                    full_name: e.target.value,
                    full_name_ge: editPayload.full_name_ge,
                    number: editPayload.number,
                    avatar_url: editPayload.avatar_url,
                  });
                }}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right font-sans">
                Full Name (GE)
              </Label>
              <Input
                id="username"
                value={editPayload.full_name_ge}
                onChange={(e) => {
                  setEditPayload({
                    full_name_ge: e.target.value,
                    full_name: editPayload.full_name,
                    number: editPayload.number,
                    avatar_url: editPayload.avatar_url,
                  });
                }}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="number" className="text-right font-sans">
                Phone Number
              </Label>
              <Input
                id="number"
                value={editPayload.number}
                onChange={(e) => {
                  setEditPayload({
                    number: e.target.value,
                    full_name: editPayload.full_name,
                    full_name_ge: editPayload.full_name_ge,
                    avatar_url: editPayload.avatar_url,
                  });
                }}
                className="col-span-3"
              />
            </div>
            <div className="flex items-center justify-start gap-4 mb-5">
              <Label htmlFor="picture" className="font-sans ml-9 mr-1">
                Avatar
              </Label>
              <Select onValueChange={handleAvatarSelect}>
                <SelectTrigger className="w-full font-sans">
                  <SelectValue placeholder="Choose Avatar" />
                </SelectTrigger>
                <SelectContent className="font-sans">
                  {avatars.map((avatar) => (
                    <SelectItem key={avatar.url} value={avatar.url}>
                      {avatar.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <DialogFooter>
              <Button type="submit" className="font-sans">
                Save changes
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
