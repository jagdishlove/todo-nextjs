import { PrismaClient } from "@prisma/client";
import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";

const prisma = new PrismaClient();

async function getData() {
  try {
    const data = await prisma.todo.findMany({
      select: {
        title: true,
        id: true,
        isCompleted: true,
      },
      orderBy: {
        createAt: "desc",
      },
    });
    return data;
  } catch (error) {
    console.error("Error creating todo item:", error);
    // Handle the error as needed, e.g., return an error response
    throw error;
  }
}

const Home = async () => {
  const getDatas: any = await getData();
  return (
    <div>
      <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl text-center p-4">
        TO DO APP
      </h2>
      <h3 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl text-center p-4">
        NEXT.JS 14 SERVER ACTIONS
      </h3>
      <AddTodo />
      <Todo todoData={getDatas} />
    </div>
  );
};

export default Home;
