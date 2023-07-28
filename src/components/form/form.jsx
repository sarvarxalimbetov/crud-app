import React from "react";
import "./form.css";

export default function Form({ setData, defaultValue, setInput, id }) {
  const [value, setValue] = React.useState(
    defaultValue
      ? defaultValue
      : {
          user_name: "",
          user_age: "",
        }
  );

  const submit = (e) => {
    e.preventDefault();

    if (!id) {
      setData((p) => [...p, { ...value, id: Date.now() }]);
      setValue({
        user_name: "",
        user_age: "",
      });

      return;
    }

    setData((p) => p.map((el) => (el.id === id ? { ...value, id } : el)));
    setInput(false);
  };

  const onChange = (e) => {
    e.preventDefault();

    setValue((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {id ? "" : <h1 className="title">Students List</h1>}
      <form className="form" onSubmit={submit} style={{ marginBottom: "10px" }}>
        <input
          onChange={onChange}
          value={value.user_name}
          className="form_input form_username"
          type="text"
          placeholder="Enter your name"
          name="user_name"
          required
        />
        <input
          onChange={onChange}
          value={value.user_age}
          className="form_input form_userage"
          type="number"
          placeholder="Enter your age"
          name="user_age"
          required
        />

        <button className="form_btn" type="submit">
          {id ? "Edit" : "Submit"}
        </button>
      </form>
    </>
  );
}
