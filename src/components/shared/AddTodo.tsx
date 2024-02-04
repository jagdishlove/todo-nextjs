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
    <div className="flex m-auto justify-center gap-5 item-center my-10   ">
      <Input
        onChange={(e: any) => setInputData(e.target.value)}
        className="w-6/12 bg-white text-black "
        placeholder="Add your daily todo"
      />
      <Button onClick={() => create(inputData)}>Add</Button>
    </div>
  );
};

export default AddTodo;
