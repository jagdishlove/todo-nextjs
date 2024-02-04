import { PrismaClient } from "@prisma/client";
import AddTodo from "@/components/shared/AddTodo";

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
  const getDatas = await getData();
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center p-4">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <AddTodo />
      <div>
        {getDatas.map((data, index) => {
          return <h1 key={index}>{data.title}</h1>;
        })}
      </div>
    </div>
  );
};

export default Home;
