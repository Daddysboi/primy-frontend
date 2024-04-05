import { FaPlus } from "react-icons/fa6";
import Button from "./Button";

const RoleHeader = ({ text, onClick }) => {
  return (
    <div>
      {text && <Button text={text} onClick={onClick} icon={<FaPlus />} />}
    </div>
  );
};

export default RoleHeader;
