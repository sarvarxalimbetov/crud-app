import React from "react";
import "./App.css";
import Card from "./components/card/card";
import Form from "./components/form/form";

function App() {
  const [data, setData] = React.useState([]);

  return (
    <>
      <Form setData={setData} />

      <ul className="students_list">
        {data.map((item) => (
          <Card key={item.id} setData={setData} {...item} />
        ))}
      </ul>
    </>
  );
}

export default App;