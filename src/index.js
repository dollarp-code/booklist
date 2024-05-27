import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = 'Victor Davis Hanson';
const Book = () => {
  const title = 'The End of Everything: How Wars Descend into Annihilation';
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81MYaU742TL._AC_UL600_SR600,400_.jpg"
        alt="The End of Everything: How Wars Descend into Annihilation"
      />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let p}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
