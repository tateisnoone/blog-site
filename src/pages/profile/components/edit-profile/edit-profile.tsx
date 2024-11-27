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
import { useState } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
export function EditProfile() {
  const user = useAtomValue(userAtom);
  const [, setEditPayload] = useState<FillProfileInfoPayload>({
    full_name: "",
    full_name_ge: "",
    number: "",
    avatar_url: "",
  });
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (fieldValues: any) => {
    handleEditProfile({ ...fieldValues, id: user?.user?.id });
  };
  const handleAvatarSelect = (avatarUrl: string) => {
    setEditPayload((prev) => ({
      ...prev,
      avatar_url: avatarUrl,
    }));
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 p-0">
            <div className="grid grid-cols-4 items-center gap-4 p-0">
              <Label htmlFor="name" className="text-right font-sans">
                Full Name
              </Label>
              <Input
                id="name"
                {...register("full_name", {
                  required: t("sign-up.NameRequired"),
                  minLength: {
                    value: 3,
                    message: t("sign-up.MinLength"),
                  },
                })}
                className="col-span-3"
              />
              {errors.full_name?.message && (
                <span className="text-red-500">
                  {typeof errors.full_name.message === "string"
                    ? errors.full_name.message
                    : t("sign-up.MinLength")}
                </span>
              )}
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right font-sans">
                Full Name (GE)
              </Label>
              <Input
                id="username"
                {...register("full_name_ge", {
                  required: t("sign-up.NameRequired"),
                  minLength: {
                    value: 3,
                    message: t("sign-up.MinLength"),
                  },
                })}
                className="col-span-3"
              />
              {errors.full_name_ge?.message && (
                <span className="text-red-500">
                  {typeof errors.full_name_ge.message === "string"
                    ? errors.full_name_ge.message
                    : t("sign-up.MinLength")}
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="number" className="text-right font-sans">
                Phone Number
              </Label>
              <Input
                id="number"
                {...register("number", {
                  required: t("sign-up.EmailRequired"),
                })}
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
