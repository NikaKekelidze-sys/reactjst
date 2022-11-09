import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";
// Vars
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
    title: "It Starts with Us: A Novel (It Ends with Us)",
    author: "Colleen Hoover",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81blnopcUiL._AC_UL600_SR600,400_.jpg",
    title: "Go-To Dinners: A Barefoot Contessa Cookbook",
    author: "Ina Garten",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/711cvCcahjL._AC_UL600_SR600,400_.jpg",
    title: "It Ends with Us: A Novel (1)",
    author: "Colleen Hoover",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/712vvcgyqBL._AC_UL600_SR600,400_.jpg",
    title: "Justice Corrupted: How the Left Weaponized Our Legal System",
    author: "Ted Cruz",
  },
];

function BookRenderer() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

function Book(probs) {
  const { img, title, author } = probs.book;
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

ReactDom.render(<BookRenderer />, document.getElementById("root"));
