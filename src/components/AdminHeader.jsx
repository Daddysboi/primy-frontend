import { FaPlus } from "react-icons/fa6";
import Button from "../components/Button";

const AdminHeader = ({ text, onClick }) => {
  return (
    <div>
      {text && <Button text={text} onClick={onClick} icon={<FaPlus />} />}
    </div>
  );
};

export default AdminHeader;
