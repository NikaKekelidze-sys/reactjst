import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";
// setup vars
const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img =
  "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={img} alt="No Pic" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
