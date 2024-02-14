import { removeTodo } from "@/app/actions/todoActions";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "../ui/button";

const RemoveTodo = ({ data }: any) => {
  return (
    <form action={removeTodo}>
      <input value={data.id} type="hidden" name="inputId" />
      <div className=" hover:bg-gray-400 rounded-md cursor-pointer">
        <Button>
          <MdDeleteForever color="red" />
        </Button>
      </div>
    </form>
  );
};

export default RemoveTodo;
