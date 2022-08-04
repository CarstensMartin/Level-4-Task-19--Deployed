import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Products for sale
const products = [
  {item:'Two Piece Suit – Black', price: 12900, photo:require('./images/suit.jpg' ), id:1},
  {item:'Tan Florsheim Premium Shoes', price: 3290, photo:require('./images/shoes.jpg' ), id:2},
  {item:'Designer Shirt – Translucent Floral', price: 4290, photo:require('./images/shirt.jpg' ), id:3}
];

// Properties of the user
const user = {
  name: 'John',
  surname: 'Silver',
  date_of_birth : '1989/05/16', 
  address: '18 main road, Umhlanga, Durban', 
  country: 'South Africa', 
  email: 'johniesilver@123mail.com', 
  telephone: '0116253322', 
  company: 'Happy Company',
  profileImg: require( './images/photo.jpg'),
  shopping_cart: ['Hair dryer', 'Sunglasses', 'Fishing rod', 'Tent']
};

// Render the page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App products={products} user={user}/>

  </React.StrictMode>
);

reportWebVitals();
