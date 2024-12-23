import { supabase } from "..";

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signInWithPassword({ email, password }).then((res) => {
    if (
      res?.error &&
      res?.error?.status &&
      (res?.error?.status < 200 || res?.error?.status >= 300)
    ) {
      throw new Error("Wrong Credentials");
    }
    return res;
  });
};

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

export const getBlogsBySearch = async (
  watchedSearchText: string
): Promise<blogValueTypes[]> => {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .ilike("title", `${watchedSearchText}%`);

  if (error) {
    throw new Error(error.message);
  }
  return data as blogValueTypes[];
};

export const getBlogs = async (): Promise<blogValueTypes[]> => {
  const { data, error } = await supabase.from("blog").select("*");

  if (error) {
    throw new Error(error.message);
  }
  return data as blogValueTypes[];
};
