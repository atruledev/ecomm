import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../Store/index";


function Wishlist() {
    const dispatch = useDispatch();

    
  let listItem  = useSelector((state) => state.cart.wishlistValue);
  console.log("wish list item here:",listItem)


  const handleRemove = (id)=>{
    console.log(listItem);
   dispatch(counterAction.removeWishlist(id))
  }


  return (
    <div>
      { listItem.length > 0 ? (
        <div>
          {listItem.map((p, index) => {
            return(
            <section class="text-gray-600 body-font overflow-hidden">
              <div class="container px-5 py-16 mx-auto">
                <div class="-my-8  border-2 border-gray ">
                  <div class="py-8 flex flex-wrap md:flex-nowrap " key={index}>
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                     
                   <img src={p.productImages} width={150} />
                      
                    </div>
                    <div class="md:flex-grow">
                      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                        {p.productTitle}
                      </h2>
                      <p class="leading-relaxed">
                      {p.productDescription}
                      </p>
                      <button  class="text-indigo-500 inline-flex items-center mt-4" onClick={()=>handleRemove(p.id)}>
                        Remove
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                 
                </div>
              </div>
            </section>
            )
          })}
          </div>
        
        
      ) : (
        <p className="flex flex-row justify-center h-screen p-5 ">No products in wishlist</p>
      )}
    </div>
  );
}

export default Wishlist;
