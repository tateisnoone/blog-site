import { FormEvent, PropsWithChildren, useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../supabase/auth";
const Register: React.FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
  });
  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isEmail = !!registerPayload.email;
    const isPassword = !!registerPayload.password;
    if (isEmail && isPassword) {
      handleRegister(registerPayload);
    }
  };
  return (
    <div className="container lg mx-auto px-4  mt-8 mb-8 font-sans flex justify-center">
      <div className="w-[450px] h-[550px] rounded-xl border-solid border border-zinc-200 bg-card p-5 text-center bg-neutral-50">
        <h1 className="text-2xl font-bold mb-2 text-[#03050C]">
          {t("sign-up.Header")}
        </h1>
        <p className="text-sm mb-5 text-slate-700">{t("sign-up.Text")}</p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid w-full  items-center gap-3 mb-5">
            <Label htmlFor="name" className="text-left text-slate-900">
              {t("sign-up.Name")}
            </Label>
            <Input type="text" id="Name" placeholder="Name" />
          </div>
          <div className="grid w-full  items-center gap-3 mb-5">
            <Label htmlFor="email" className="text-left text-slate-900">
              {t("sign-up.Email")}
            </Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              value={registerPayload.email}
              onChange={(e) => {
                setRegisterPayload({
                  email: e.target.value,
                  password: registerPayload.password,
                });
              }}
            />
          </div>
          <div className="grid w-full items-center gap-3 mb-5">
            <Label htmlFor="password" className="text-left text-slate-900">
              {t("sign-up.Password")}
            </Label>
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="password"
              value={registerPayload.password}
              onChange={(e) => {
                setRegisterPayload({
                  email: registerPayload.email,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div className="grid w-full items-center gap-3 mb-5">
            <Label htmlFor="password" className="text-left text-slate-900">
              {t("sign-up.Confirm")}
            </Label>
            <Input
              type="password"
              id="confirmpassword"
              placeholder="confirm password"
            />
          </div>
          <Button
            className="bg-blue-500 hover:bg-blue-400 text-base font-sans w-full mb-5"
            type="submit"
          >
            {t("sign-up.Sign-Up")}
          </Button>
        </form>

        <p className="text-sm text-slate-900">
          {t("sign-up.HaveAccount")}
          <NavLink to="/sign-in" className="text-blue-500 hover:underline">
            {t("sign-up.Sign-In")}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
