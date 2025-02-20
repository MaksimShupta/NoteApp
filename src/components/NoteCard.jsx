import htmlIcon from "../images/htmlIcon.svg";
import reactIcon from "../images/reactIcon.svg";
import javascriptIcon from "../images/javascriptIcon.svg";
import sqlIcon from "../images/sqlIcon.svg";

const NoteCard = ({
  itemKey,
  title,
  date,
  category,
  description,
  onEdit,
  onDelete,
}) => {
  const categoryImg = {
    html: htmlIcon,
    react: reactIcon,
    javascript: javascriptIcon,
    sql: sqlIcon,
  };

  const categoryImage = categoryImg[category?.toLowerCase()] || "";
  console.log("Note card:", itemKey);
  //const onDelete = () => {};
  //const onEdit = () => {};

  return (
    <div className="bg-[#282828] text-[#F5F5F5] rounded-xl p-6 border flex flex-col gap-8">
      <p className="px-4 py-2 bg-[#9E7A67] text-lg rounded-xl font-bold tracking-wider">
        {title}
      </p>
      <div className="flex items-center gap-4">
        <p className="text-sm">{date}</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={categoryImage} alt="Category" className="w-6 h-6" />
        <p className="text-sm">{category}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex gap-4 mt-2">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 w-full md:w-auto"
          onClick={() => onEdit(itemKey)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 w-full md:w-auto"
          onClick={() => {
            console.log("Deleting item with key:", itemKey);
            onDelete(itemKey);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
