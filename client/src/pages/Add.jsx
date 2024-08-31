import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Adauga o carte noua</h1>
      <input
        type="text"
        placeholder="Titlu"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Descriere"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Pret"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Poza coperta(link)"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Adauga</button>
      {error && "Something went wrong!"}
      <Link to="/">Vezi toate cartile</Link>
    </div>
  );
};

export default Add;
