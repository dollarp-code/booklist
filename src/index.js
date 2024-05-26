import React from 'react';
import ReactDOM from 'react-dom/client';

function Booklist() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81MYaU742TL._AC_UL600_SR600,400_.jpg"
    alt="The End of Everything: How Wars Descend into Annihilation"
  />
);
const Title = () => (
  <h2>The End of Everything: How Wars Descend into Annihilation</h2>
);
const Author = () => {
  return <h4>Victor Davis Hanson</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
