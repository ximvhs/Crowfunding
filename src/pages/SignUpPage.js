import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Label } from "../components/label";
import Input from "../components/input/Input";
import FormGroup from "../components/common/FormGroup";
import { Button, ButtonGoogle } from "../components/button";
import CheckBox from "../components/checkbox/CheckBox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "../components/icon/IconEyeToggle";
import useToggleValue from "../hooks/useToggleValue";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character")
    .required("This field is required"),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleSignUp = (values) => {
    console.log(values);
  };

  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>
      <div className="font-normal text-center text-sx lg:text-sm text-text2 dark:text-white">
        Or sign up with email
      </div>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            type="text"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="eamil">Email *</Label>
          <Input
            control={control}
            name="eamil"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <CheckBox onClick={handleToggleTerm} check={acceptTerm}>
            <p className="flex-1 text-sm text-text2">
              I agree to the {""}
              <span className="underline text-secondary">Terms of Use</span>
              and have read anh understand the {""}
              <span className="underline text-secondary">Privacy policy.</span>
            </p>
          </CheckBox>
        </div>
        <Button className="w-full select-none" kind="primary" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
