"use client";

import { create } from "@/app/actions/todoActions";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";

const AddTodo = () => {
  const [inputData, setInputData] = useState<any>();

  return (
    <form className="flex justify-center gap-5" action={create} method="POST">
      <Input
        onChange={(e: any) => setInputData(e.target.value)}
        className="w-6/12 bg-white text-black "
        placeholder="Add your daily todo"
        name="input"
      />
      <Button>Add</Button>
    </form>
  );
};

export default AddTodo;
