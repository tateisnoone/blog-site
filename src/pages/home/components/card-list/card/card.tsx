import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/supabase";
import { Command } from "@/components/ui/command";
import { Controller, useForm } from "react-hook-form";
import qs from "qs";
import underscore from "underscore";
import { useSearchParams } from "react-router-dom";
interface myCardProps {
  width: string;
}

type blogValueTypes = {
  created_at: string;
  id: number;
  user_id: string;
  title: string;
  title_ge: string;
  description: string;
  description_ge: string;
  image_url: string;
};

type blogSearchFormValue = {
  searchText: string;
};

const MyCard: React.FC<myCardProps> = ({ width }) => {
  const [blog, setBlog] = useState<blogValueTypes[]>();
  const [searchParams] = useSearchParams();
  const parsedQueryParams = qs.parse(searchParams.toString());
  const { control, watch } = useForm<blogSearchFormValue>({
    defaultValues: parsedQueryParams,
  });
  useEffect(() => {
    const parsedSearchParams = qs.parse(searchParams.toString());

    const searchText = parsedSearchParams?.searchText;

    supabase
      .from("blog")
      .select("*")
      .ilike("title", `%${searchText ?? ""}%`)
      .throwOnError()
      .then((res) => {
        const blogsList = res.data as unknown as blogValueTypes[];
        setBlog(blogsList);
      });
  }, []);
  const watchedSearchText = watch("searchText");

  const fetchBlogs = useCallback(
    underscore.debounce((watchedSearchText: string) => {
      supabase
        .from("blog")
        .select("*")
        .ilike("title", `${watchedSearchText}%`)
        .throwOnError()
        .then((res) => {
          const blogsList = res.data as unknown as blogValueTypes[];
          setBlog(blogsList);
        });
    }, 500),
    []
  );
  useEffect(() => {
    if (watchedSearchText?.length > 2) {
      fetchBlogs(watchedSearchText);
    }
  }, [watchedSearchText, fetchBlogs]);

  return (
    <>
      <div className="container lg mx-auto px-4  mt-8 mb-8 font-sans">
        <Command className="rounded-lg border shadow-md mt=10 mb-10 w-3/5 dark:border-solid dark:border-neutral-800">
          <Controller
            name="searchText"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <input
                  onChange={onChange}
                  value={value}
                  placeholder="Enter search text..."
                  className="h-10 p-2 shadow-md dark:bg-inherit "
                />
              );
            }}
          />
        </Command>
        {blog?.map((blog) => {
          const blogImageUrl = blog?.image_url
            ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${
                blog?.image_url
              }`
            : "";
          return (
            <Card
              key={blog.id}
              className={`rounded-xl border-solid border-b border-zinc-200 bg-card text-card-foreground shadow h-[480px] ${width} mb-5`}
            >
              <CardHeader>
                <div className="w-full h-52 overflow-hidden rounded-xl mb-4">
                  <img src={blogImageUrl} />
                </div>
                <CardTitle>{blog?.title}</CardTitle>
                <CardDescription>
                  <NavLink to="/author" className="hover:underline">
                    John Doe,
                  </NavLink>{" "}
                  {blog.created_at}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{blog?.description}</p>
              </CardContent>
              <CardFooter>
                <p className="bg-slate-300 w-23 rounded-sm">Technology</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default MyCard;
