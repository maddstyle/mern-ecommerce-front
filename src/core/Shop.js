import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import {getCategories} from './apiCore';
import Checkbox from "./Checkbox"

const Shop = () => {
  const [catergories, setCategories] =useState([])
  const [error, setError] =useState(false)

  const init = () => {
    getCategories().then(data => {
      if (data.errror) {
        setError(data.error)
      } else {
        setCategories(data)
      }
    });
  };

useEffect(() => {
  init()
  
}, [])

  return (
    <Layout
      title="Shop"
      description="Search watches"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">
        <h5>Filter by category</h5>
          <ul>
          <Checkbox categories={catergories} />
          </ul>
        </div>
        <div className="col-8">right sidebar</div>
      </div>
    </Layout>
  );
};

export default Shop;
