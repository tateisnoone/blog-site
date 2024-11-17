import { PropsWithChildren } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Register: React.FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  return (
    <div className="container lg mx-auto px-4  mt-8 mb-8 font-sans flex justify-center">
      <div className="w-[450px] h-[550px] rounded-xl border-solid border border-zinc-200 bg-card p-5 text-center bg-neutral-50">
        <h1 className="text-2xl font-bold mb-2">{t("sign-up.Header")}</h1>
        <p className="text-sm mb-5 text-slate-700">{t("sign-up.Text")}</p>
        <form action="submit" className="w-full">
          <div className="grid w-full  items-center gap-3 mb-5">
            <Label htmlFor="name" className="text-left">
              {t("sign-up.Name")}
            </Label>
            <Input type="text" id="Name" placeholder="Name" />
          </div>
          <div className="grid w-full  items-center gap-3 mb-5">
            <Label htmlFor="email" className="text-left">
              Email
            </Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full items-center gap-3 mb-5">
            <Label htmlFor="password" className="text-left">
              {t("sign-up.Password")}
            </Label>
            <Input type="password" id="password" placeholder="password" />
          </div>
          <div className="grid w-full items-center gap-3 mb-5">
            <Label htmlFor="password" className="text-left">
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

        <p className="text-sm">
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
