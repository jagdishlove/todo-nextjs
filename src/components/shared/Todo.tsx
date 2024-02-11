function Todo({ todoData }: any) {
  return (
    <div className="flex flex-col justify-center items-start w-3/6 m-auto pt-10 gap-4 ">
      {todoData?.map((data: any, index: any) => {
        return (
          <input
            className="text-pretty capitalize bg-white w-full text-black text-xl p-3 rounded-xl"
            key={index}
            value={data.title}
          ></input>
        );
      })}
    </div>
  );
}

export default Todo;
