import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";
// // setup vars
// const books = [
//   {
//     img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
//     title: "I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },

//   {
//     img: "https://play-lh.googleusercontent.com/_tslXR7zUXgzpiZI9t70ywHqWAxwMi8LLSfx8Ab4Mq4NUTHMjFNxVMwTM1G0Q-XNU80",
//     title: "Siege",
//     author: "Some Dude",
//   },
// ];
// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         const { img, title, author } = book;
//         return <Book book={book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author } = props.book;
//   return (
//     <article className="book">
//       <img src={img} alt="No Pic" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

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

function BookList() {
  return (
    <section>
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article>
      <img src={img} alt="No Picture!" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
