"use-client";
import { removeTodo } from "@/app/actions/todoActions";
import {
  MdOutlineDoneOutline,
  MdOutlineModeEdit,
  MdDeleteForever,
} from "react-icons/md";
import ChangeStatus from "./ChangeStatus";
import EditTodo from "./EditTodo";
import RemoveTodo from "./RemoveTodo";

function Todo({ todoData }: any) {
  return (
    <div className="flex flex-col justify-center items-start w-3/6 m-auto pt-10 gap-4 ">
      {todoData.length > 0 ? (
        todoData?.map((data: any, index: any) => {
          return (
            <>
              <input value={data.id} type="hidden" name="inputId" />
              <h1
                className="flex justify-between items-center text-pretty bg-white w-full text-black text-l p-3 rounded-xl"
                key={index}
              >
                {data.title}
                <div className="flex gap-2">
                  <ChangeStatus data={data} />
                  <EditTodo data={data} />
                  <RemoveTodo data={data} />
                </div>
              </h1>
            </>
          );
        })
      ) : (
        <div className="w-full text-center">
          <h1 className="text-white">Nothing added..</h1>
        </div>
      )}
    </div>
  );
}

export default Todo;
