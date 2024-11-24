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
import { useState } from "react";

export function EditProfile() {
  const [editPayload, setEditPayload] = useState({
    fullName: "",
    fullNameGe: "",
    number: "",
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-sans">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[450px]">
        <DialogHeader className="font-sans">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 p-0">
          <div className="grid grid-cols-4 items-center gap-4 p-0">
            <Label htmlFor="name" className="text-right font-sans">
              Full Name
            </Label>
            <Input
              id="name"
              value={editPayload.fullName}
              onChange={(e) => {
                setEditPayload({
                  fullName: e.target.value,
                  fullNameGe: editPayload.fullNameGe,
                  number: editPayload.number,
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
              value={editPayload.fullNameGe}
              onChange={(e) => {
                setEditPayload({
                  fullNameGe: e.target.value,
                  fullName: editPayload.fullName,
                  number: editPayload.number,
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
                  fullName: editPayload.fullName,
                  fullNameGe: editPayload.fullNameGe,
                });
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture" className="font-sans">
              Avatar
            </Label>
            <Input id="picture" type="file" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <DialogFooter>
            <Button type="submit" className="font-sans">
              Save changes
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
