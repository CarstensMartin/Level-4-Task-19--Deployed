import React from 'react'

// Display products
function Products(props){
  // Import the properties of the products
    const products = props.products
  
    //Render the products
    return(
    <div className="allProductDisplay">
      {products.map((products) => (
        <div id = {products.id} key ={products.id}  className="productDisplay">
          <img src = {products.photo} alt = "Product" className ="productPhoto"/>
        <h4>{products.item}</h4>
        <p>R{products.price}.00</p>   
      </div>
      ))}
    </div>
    );
  }

export default Products