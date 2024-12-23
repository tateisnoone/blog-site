import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { supabase } from "@/supabase";
import { useAtom } from "jotai";
import { Controller, useForm } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useState } from "react";

type BlogsListCreateValues = {
  title: string;
  title_ge: string;
  description: string;
  description_ge: string;
  image_file: null | File;
};

const BlogsListFilterFormDefaultValues = {
  title: "",
  title_ge: "",
  description: "",
  description_ge: "",
  image_file: null,
};

const CreateBlogForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [user] = useAtom(userAtom);
  const { control, handleSubmit } = useForm<BlogsListCreateValues>({
    defaultValues: BlogsListFilterFormDefaultValues,
  });

  const onSubmit = (formValues: BlogsListCreateValues) => {
    console.log(formValues);
    if (formValues?.image_file) {
      supabase.storage
        .from("blog_image")
        .upload(formValues?.image_file?.name, formValues?.image_file)
        .then((res) => {
          return supabase.from("blog").insert({
            title: formValues.title,
            title_ge: formValues.title_ge,
            description: formValues.description,
            description_ge: formValues.description_ge,
            image_url: res.data?.fullPath,
            user_id: user?.user?.id,
          });
          
        })
        .then(() => {
          setShowAlert(true);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 mt-10 p-10">
      <h1>Add blog</h1>
      <div className="flex w-96 flex-col items-center justify-center gap-y-4">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Title" />
            );
          }}
        />
        <Controller
          control={control}
          name="title_ge"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Title GE" />
            );
          }}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Description"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="description_ge"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Description GE"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="image_file"
          render={({ field: { onChange } }) => {
            return (
              <Input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
                placeholder="File"
              />
            );
          }}
        />
        <Button onClick={handleSubmit(onSubmit)}>Create Blog</Button>
        {showAlert && (
          <Alert className="bg-green-100">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You successfully added the blog post!
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default CreateBlogForm;
