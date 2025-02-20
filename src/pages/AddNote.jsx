import Select from "react-select";
import { CategoryContext } from "../App";
import { useContext, useState } from "react";
import htmlIcon from "../images/htmlIcon.svg";
import reactIcon from "../images/reactIcon.svg";
import javascriptIcon from "../images/javascriptIcon.svg";
import sqlIcon from "../images/sqlIcon.svg";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const AddNote = () => {
  const { categories } = useContext(CategoryContext);
  const navigate = useNavigate();
  console.log("AddNotePage:", categories);
  //["HTML", "JavaScript", "React", "SQL"];
  const categoryImg = {
    html: htmlIcon,
    react: reactIcon,
    javascript: javascriptIcon,
    sql: sqlIcon,
  };

  const cats = [
    {
      value: categories[0],
      label: categories[0],
      icon: <img src={htmlIcon} />,
    },
    {
      value: categories[1],
      label: categories[1],
      icon: <img src={javascriptIcon} />,
    },
    {
      value: categories[2],
      label: categories[2],
      icon: <img src={reactIcon} />,
    },
    { value: categories[3], label: categories[3], icon: <img src={sqlIcon} /> },
  ];
  const [form, setForm] = useState({
    title: "",
    date: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (selectedOption) => {
    setForm({ ...form, category: selectedOption.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueKey = `note_${Date.now()}`;
    localStorage.setItem(uniqueKey, JSON.stringify(form));
    console.log("local storage content: ", localStorage);
    alert("The note was added!");
    navigate("/");
  };

  return (
    <div className="bg-gray-900 text-black min-h-screen">
      <Navbar />
      <section className="items-center flex flex-col px-4 py-10">
        <div className="border border-light textLight rounded-xl w-full max-w-lg md:max-w-xl lg:max-w-2xl p-5 bg-bgLight">
          <form
            onSubmit={handleSubmit}
            id="add-form"
            className="items-center flex flex-col px-4 pb-8 gap-5"
          >
            <label className="input-custom gap-2 w-full">
              <input
                value={form.title}
                onChange={handleChange}
                name="title"
                className="grow w-full"
                placeholder="Title"
                required
              />
            </label>
            <label className="input-custom gap-2 w-full">
              <input
                value={form.date}
                onChange={handleChange}
                type="date"
                name="date"
                className="grow w-full"
                required
              />
            </label>

            <Select
              options={cats}
              placeholder="Select category"
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={categoryImg[e.label.toLowerCase()]}
                    className="w-6 h-6"
                  />
                  &nbsp;{e.label}
                </div>
              )}
              onChange={handleCategoryChange}
              className="w-full"
            />

            <label className="textarea-custom gap-2 w-full">
              <textarea
                value={form.description}
                onChange={handleChange}
                name="description"
                className="grow w-full bg-bgInput h-full"
                placeholder="Describe what you are going to do ..."
                required
              />
            </label>

            <button
              id="submit-btn"
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition"
            >
              Add note
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default AddNote;
