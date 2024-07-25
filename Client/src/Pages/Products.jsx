import React, { useEffect, useState } from "react";
import newProduct from "../../Products/newProduct.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { counterAction } from "../Store";


function Products({ showInput }) {
  const dispatch = useDispatch();
  const [show, setshow] = useState(6);
  const [newvalue, setvalue] = useState(newProduct);

  useEffect(() => {
    setvalue(showInput.length > 0 ? showInput : newProduct);
  }, [showInput]);

  const handlemore = () => {
    setshow(show + 6);
  };

  const handleAdd = (pI) => {
   
   dispatch(counterAction.add());
   dispatch(counterAction.addproduct({
     ProductId: pI,
     Productlist: newvalue
  }))
  };

  const handlesort = (e) => {
    const selectedvalue = e.target.value;

    console.log(selectedvalue);

    let sortedproducts = [...newProduct];
    
    // filter sort 

    if (selectedvalue === "lowtohigh") {
      sortedproducts.sort((a, b) => {
        return a.productPrice - b.productPrice;
      });
    } else if (selectedvalue === "hightolow") {
      sortedproducts.sort((a, b) => {
        return b.productPrice - a.productPrice;
      });
    } else if (selectedvalue === "a-z") {
      sortedproducts.sort((a, b) => {
        return a.productTitle.localeCompare(b.productTitle);
      });
    } else if (selectedvalue === "newArrival") {
      sortedproducts = sortedproducts.filter((products) => {
        return products.discount === "";
      });
    } else if (selectedvalue === "30%") {
      sortedproducts = sortedproducts.filter((products) => {
        return products.discount === "30% off";
      });
    } else if (selectedvalue === "40%") {
      sortedproducts = sortedproducts.filter((products) => {
        return products.discount === "40% off";
      });
    } else if (selectedvalue === "50%") {
      sortedproducts = sortedproducts.filter((products) => {
        return products.discount === "50% off";
      });
    }

    setvalue(sortedproducts);
  };

  return (
    <>
      <div className="container mx-auto p-4 loader-container">
        <div className="flex flex-col ">
          <p className="p-9">
            Explore our wide range of men's formal shoes and find the perfect
            pair of formal shoes for men online at MetroShoes. We have a variety
            of styles and sizes to choose from, so you're sure to find the
            perfect shoes for you. Whether you're looking for a classic leather
            loafer or something more modern and trendy, we've got you covered.
          </p>
          <div className="flex justify-between">
            <div className="flex flex-row justify-start p-5 ">
              <select
                className="rounded-full border-2 p-2 border-black"
                onChange={handlesort}
              >
                <option value="default">default</option>
                <option value="newArrival">New Arrival</option>
                <option value="30%">30% Off Items</option>
                <option value="40%">40% Off Items</option>
                <option value="50%">50% Off Items</option>
              </select>
            </div>

            <div className="flex flex-row justify-end p-5 ">
              <select
                className="rounded-full border-2 p-2 border-black"
                onChange={handlesort}
              >
                <option value="lowtohigh">low to high</option>
                <option value="a-z">Alphabetically(A-z)</option>
                <option value="hightolow">high to Low</option>
              </select>
            </div>
          </div>
        </div>
        {newvalue.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newvalue.slice(0, show).map((products, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                {products.discount && (
                  <div className="flex justify-end ">
                    <p className="bg-black text-white p-2 border-black border-2">
                      {products.discount}
                    </p>
                  </div>
                )}
                <Link to={`/singleproduct/${products.id}`}>
                  <img src={products.productImages} width={200} />{" "}
                </Link>
                <h2 className="text-xl font-semibold mb-2">
                  {products.productTitle}
                </h2>
                {products.urlToImage && (
                  <img
                    className="w-full h-48 object-cover mb-4"
                    src={products.urlToImage}
                    alt={products.productTitle}
                  />
                )}
                {products.oldPrice > 0 ? (
                  <p>
                    <span className="line-through text-red-700">
                      Rs.{products.oldPrice}
                    </span>{" "}
                    Rs.{products.productPrice}
                  </p>
                ) : (
                  <p>RS.{products.productPrice}</p>
                )}
                
              </div>
            ))}
          </div>
        ) : (
          <p className="flex flex-col justify-center items-center">
            Searching for the products...
          </p>
        )}

        {show < newProduct.length && (
          <div className="flex flex-row justify-center p-5">
            <button
              onClick={handlemore}
              className="  select-none  rounded-lg border-2 border-gray-900 tex py-2 px-2 my-2 text-black hover:text-gray-500"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
