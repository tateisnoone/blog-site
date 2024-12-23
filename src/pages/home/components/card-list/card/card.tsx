import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router-dom";

import { Command } from "@/components/ui/command";
import { Controller, useForm } from "react-hook-form";
import qs from "qs";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useQuery } from "@tanstack/react-query";
import { getBlogs, getBlogsBySearch } from "@/supabase/blog";
import { DASHBOARD_PATHS } from "@/routes/dashboard/index.enum";
import { useDebounce } from "@uidotdev/usehooks";

dayjs.extend(relativeTime);

interface myCardProps {
  width: string;
}



type blogSearchFormValue = {
  searchText: string;
};

const MyCard: React.FC<myCardProps> = ({ width }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const parsedQueryParams = qs.parse(searchParams.toString());
  const { control, watch } = useForm<blogSearchFormValue>({
    defaultValues: parsedQueryParams,
  });

  const searchText = watch("searchText");

  const [debouncedSearchText] = useDebounce(searchText, 1000);

  const { data: blogsData } = useQuery({
    queryKey: ["blogs", debouncedSearchText],
    queryFn: () =>
      searchText ? getBlogsBySearch(`%${searchText}%`) : getBlogs(),
    enabled: true,
  });

  setSearchParams({ searchText: searchText });

  const formatCreatedAt = (createdAt: string) => {
    const now = dayjs();
    const blogDate = dayjs(createdAt);

    if (now.diff(blogDate, "day") < 1) {
      return blogDate.fromNow();
    } else {
      return blogDate.format("HH:mm - DD/MM/YYYY");
    }
  };

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
        {blogsData?.map((blog) => {
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
                  <NavLink
                    to={DASHBOARD_PATHS.FOR_AUTHOR}
                    className="hover:underline"
                  >
                    John Doe,
                  </NavLink>{" "}
                  {formatCreatedAt(blog.created_at)}
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
