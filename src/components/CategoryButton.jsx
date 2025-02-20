import { useNavigate } from "react-router";
import htmlIcon from "../images/htmlIcon.svg";
import reactIcon from "../images/reactIcon.svg";
import javascriptIcon from "../images/javascriptIcon.svg";
import sqlIcon from "../images/sqlIcon.svg";

const categoryImg = {
  html: htmlIcon,
  react: reactIcon,
  javascript: javascriptIcon,
  sql: sqlIcon,
};

const CategoryButton = ({ cat, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${cat}`); // Navigate to category page
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white-500 text-white px-4 py-2 rounded-lg hover:bg-white transition"
    >
      <img
        src={categoryImg[cat.toLowerCase()]}
        // alt={cat.toUpperCase()}
        className="w-6 h-6"
      />
    </button>
  );
};

export default CategoryButton;
