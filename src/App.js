// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";
// import product from "./components/Product";
import AddItem from "./components/AddItem";
import addItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 84000,
      name: "IPhone 10s Max",
      quantity: 0,
    },
    {
      price: 96000,
      name: "IPhone 13s",
      quantity: 0,
    },
    {
      price: 114999,
      name: "IPhone 14 Pro Max",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  // Incrementing quantity
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  // Decrementing quantity
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }

    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  //  Reset Function
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  //  Remove Functionality
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    console.log(newProductList)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
    // Add items
  const addItem = (name, price) => {
    let newProductList = [...productList]
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList)
  };
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem = {addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
