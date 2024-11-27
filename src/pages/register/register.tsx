import { PropsWithChildren } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../supabase/auth";
import { useForm } from "react-hook-form";

const Register: React.FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: signUp,
  });

  const onSubmit = (fieldValues: any) => {
    handleRegister(fieldValues);
  };

  return (
    <div className="container lg mx-auto px-4 mt-8 mb-8 font-sans flex justify-center">
      <div className="w-[450px] h-[550px] rounded-xl border-solid border border-zinc-200 bg-card p-5 text-center bg-neutral-50">
        <h1 className="text-2xl font-bold mb-2 text-[#03050C]">
          {t("sign-up.Header")}
        </h1>
        <p className="text-sm mb-5 text-slate-700">{t("sign-up.Text")}</p>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-3 mb-5">
            <Label htmlFor="name" className="text-left text-slate-900">
              {t("sign-up.Name")}
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              {...register("name", {
                required: t("sign-up.NameRequired"),
                minLength: {
                  value: 3,
                  message: t("sign-up.MinLength"), 
                },
              })}
            />
            {errors.name?.message && (
              <span className="text-red-500">
                {typeof errors.name.message === "string"
                  ? errors.name.message
                  : t("sign-up.MinLength")}
              </span>
            )}
          </div>

       
          <div className="grid w-full items-center gap-3 mb-5">
            <Label htmlFor="email" className="text-left text-slate-900">
              {t("sign-up.Email")}
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: t("sign-up.EmailRequired"),
              })}
            />
            {errors.email?.message && (
              <span className="text-red-500">
                {typeof errors.email.message === "string"
                  ? errors.email.message
                  : t("sign-up.MinLength")}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="grid w-full items-center gap-3 mb-5">
            <Label htmlFor="password" className="text-left text-slate-900">
              {t("sign-up.Password")}
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: t("sign-up.PasswordRequired"),
              })}
            />
            {errors.password?.message && (
              <span className="text-red-500">
                {typeof errors.password.message === "string"
                  ? errors.password.message
                  : t("sign-up.MinLength")}
              </span>
            )}
          </div>

          <div className="grid w-full items-center gap-3 mb-5">
            <Label htmlFor="confirm" className="text-left text-slate-900">
              {t("sign-up.Confirm")}
            </Label>
            <Input
              type="password"
              id="confirm"
              placeholder="Confirm password"
              {...register("confirm", {
                required: t("sign-up.PasswordRequired"),
              })}
            />
            {errors.confirm?.message && (
              <span className="text-red-500">
                {typeof errors.confirm.message === "string"
                  ? errors.confirm.message
                  : t("sign-up.MinLength")}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <Button
            className="bg-blue-500 hover:bg-blue-400 text-base font-sans w-full mb-5"
            type="submit"
          >
            {t("sign-up.Sign-Up")}
          </Button>
        </form>

        {/* Sign In Link */}
        <p className="text-sm text-slate-900">
          {t("sign-up.HaveAccount")}{" "}
          <NavLink to="/sign-in" className="text-blue-500 hover:underline">
            {t("sign-up.Sign-In")}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
