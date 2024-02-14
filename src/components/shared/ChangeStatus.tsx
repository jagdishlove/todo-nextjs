import { MdOutlineDoneOutline } from "react-icons/md";
import { Button } from "../ui/button";

const ChangeStatus = ({ data }: any) => {
  return (
    <form>
      <div className=" hover:bg-gray-400 rounded-md cursor-pointer">
        <Button className="bg-white">
          <MdOutlineDoneOutline color="green" />
        </Button>
      </div>
    </form>
  );
};

export default ChangeStatus;
