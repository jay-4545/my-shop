import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { HiTrash } from "react-icons/hi";

function FormC() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between gap-2 ">
        <TextInput className="flex-1" type="text" placeholder="name" />
        <TextInput className="flex-1" type="text" placeholder="email" />
        <Button>
          <HiTrash />
        </Button>
      </div>
      <Button>Add Guest</Button>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default FormC;
