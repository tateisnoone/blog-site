import { FormEvent, PropsWithChildren, useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../supabase/auth";

const SignIn: React.FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });
  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isEmail = !!loginPayload.email;
    const isPassword = !!loginPayload.password;
    if (isEmail && isPassword) {
      handleLogin(loginPayload);
    }
    console.log(loginPayload);
  };
  return (
    <div className="container lg mx-auto px-4  mt-8 mb-8 font-sans flex justify-center">
      <div className="w-[450px] h-96 rounded-xl border-solid border border-zinc-200 bg-card p-5 text-center bg-neutral-50">
        <h1 className="text-2xl  text-slate-900 font-bold mb-2">
          {t("sign-in.Header")}
        </h1>
        <p className="text-sm mb-5 text-slate-700">{t("sign-in.Text")}</p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid w-full  items-center gap-3 mb-5">
            <Label htmlFor="email" className="text-left text-slate-900">
              {t("sign-in.Email")}
            </Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              value={loginPayload.email}
              onChange={(e) => {
                setLoginPayload({
                  email: e.target.value,
                  password: loginPayload.password,
                });
              }}
            />
          </div>
          <div className="grid w-full items-center gap-3 mb-5">
            <Label htmlFor="password" className="text-left text-slate-900">
              {t("sign-in.Password")}
            </Label>
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="password"
              value={loginPayload.password}
              onChange={(e) => {
                setLoginPayload({
                  email: loginPayload.email,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <Button
            className="bg-blue-500 hover:bg-blue-400 text-base font-sans w-full mb-5"
            type="submit"
          >
            {t("sign-in.Log-In")}
          </Button>
        </form>
        <div className="flex justify-between text-sm">
          <NavLink to="/" className="text-blue-500 hover:underline ">
            {t("sign-in.Forgot")}
          </NavLink>
          <p className="text-slate-900">
            {t("sign-in.HaveAccount")}
            <NavLink to="/sign-up" className="text-blue-500 hover:underline ">
              {t("sign-in.Sign-Up")}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
