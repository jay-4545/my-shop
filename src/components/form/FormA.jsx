import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

function FormA() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        placeholder="Enter Your Name"
        {...register("name", {
          required: {
            value: true,
            message: "name kon taro bap nakhse",
          },
          minLength: {
            value: 4,
            message: "tara bap ne 4 character nakh",
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
            message: "email kon taro bap nakhse",
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "sarkho mail nakh",
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
            return "taro bap ne password sarkho nakh";
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

export default FormA;
