import { Link } from "react-router-dom";
import Pages from "../Pages";
import { FaHome } from "react-icons/fa";

const CaseNav = () => {
  return (
    <div className="flex justify-center bg-white w-full fixed top-0 z-10">
      <div className="flex space-x-2">
        <Link to="/" element={<Pages />}>
          <div className="">
            <button>
              <FaHome className="mt-6" />
            </button>
          </div>
        </Link>
        <Link to="/" element={<Pages />}>
          <div className="mt-5">
            <span>Back to home</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CaseNav;
