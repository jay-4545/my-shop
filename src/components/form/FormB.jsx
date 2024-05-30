import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

function FormB() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        placeholder="Enter your name"
        {...register("name", {
          required: {
            value: true,
            message: "Enter your name",
          },
          minLength: {
            value: 4,
            message: "minimum 4 character",
          },
        })}
      />
      {errors.name && <p className="text-red-700">{errors.name.message}</p>}
      <TextInput
        type="email"
        placeholder="example45@gmail.com"
        {...register("email", {
          required: {
            value: true,
            message: "Enter your email",
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "please enter a valid email",
          },
        })}
      />
      {errors.email && <p className="text-red-700">{errors.email.message}</p>}
      <TextInput
        type="password"
        placeholder="password"
        {...register("password")}
      />
      <TextInput
        type="password"
        placeholder="confirmPassword"
        {...register("confirmPassword", {
          validate: (value) => {
            const password = getValues("password");
            if (value === password) {
              return true;
            }
            return "password did't match";
          },
        })}
      />
      {errors.confirmPassword && (
        <p className="text-red-700">{errors.confirmPassword.message}</p>
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default FormB;
