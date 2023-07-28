import React from "react";
import Form from "../form/form";
import trashIcon from "../../assets/icons/trash.svg";
import editIcon from "../../assets/icons/edit.svg";
import "./card.css";

export default function Card({ user_name, user_age, setData, id }) {
  const [input, setInput] = React.useState(false);

  const deleteItem = (e) => {
    setData((p) => p.filter((el) => el.id !== id));
  };

  const editData = () => {
    setInput(true);
  };

  return (
    <li className="students_item">
      {input ? (
        <Form
          setInput={setInput}
          setData={setData}
          defaultValue={{ user_name, user_age }}
          id={id}
        />
      ) : (
        <>
          <h1 className="students_name">{user_name}</h1>
          <h3 className="students_age">{user_age}</h3>
          <button className="students_trash-tbn" onClick={deleteItem}>
            <img src={trashIcon} alt="trash icon" />
          </button>
          <button className="students_edit-btn" onClick={editData}>
            <img src={editIcon} alt="edit icon" />
          </button>
        </>
      )}
    </li>
  );
}
