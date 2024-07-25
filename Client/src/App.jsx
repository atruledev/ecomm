import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import newProducts from "../Products/newProduct.json";
import Wishlist from "./Pages/Wishlist";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import SingleProductpage from "./Pages/SingleProductpage";
import Cart from "./Pages/Cart";
import Login from "./Pages/Auth/Login";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./Pages/Auth/ProtectedRoutes";
import Signup from "./Pages/Auth/Signup";

function App() {
  const [value, setvalue] = useState("");
  const [showInput, setShowInput] = useState([]);

  const handlesearch = (e) => {
    e.preventDefault();

    setvalue(e.target.value);

    let productarray = newProducts;

    const searchValue = productarray.filter((products) => {
      return products.productTitle.toLowerCase().includes(value.toLowerCase());
    });

    setShowInput(searchValue);
  };
  const router = createBrowserRouter([
    <Header />,
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: (
        <>
          <Header handlesearch={handlesearch} />{" "}
          <Products showInput={showInput} />
          {}
        </>
      ),
    },
    {
      path: `/singleproduct/:id`,
      element: (
        <>
          <Header />
          <SingleProductpage />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <ProtectedRoutes>
          <Header />
          <Cart />
        </ProtectedRoutes>
      ),
    },
    {
      path: "wishlist",
      element: (
        <>
          <Header />
          <Wishlist />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Header />
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Header />
          <Signup/>
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
