import React, { useEffect, useState } from 'react';
import newProduct from "../../Products/newProduct.json"
import { Link } from 'react-router-dom';
import SingleProductpage from '../Pages/SingleProductpage';

function Products( ) {
    const[show, setshow] = useState(6);
    const handlemore = () => {
       setshow(show+6);
    
    }
    return (
        <>

            <div className="container mx-auto p-4 loader-container">
                {newProduct.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {newProduct.slice(0, show).map((products, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                <Link to={`/singleproduct/${products.id}`}  ><img src={products.productImages} width={200}  /> </Link>
                                <h2 className="text-xl font-semibold mb-2">{products.productTitle}</h2>
                                {products.urlToImage && (
                                    <img className="w-full h-48 object-cover mb-4" src={products.urlToImage} alt={products.title} />
                                )}
                                <p>RS.{products.productPrice}</p>
                                <button className='select-none  rounded-lg border-2 border-gray-900 tex py-2 px-2 my-2 text-black hover:text-gray-500'>Add To cart</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='flex flex-col justify-center items-center'>Searching for thr products..</p>
                )}
                {show < newProduct.length && 
                <div className='flex flex-row justify-center p-5'>
                <button  onClick={handlemore} className='  select-none  rounded-lg border-2 border-gray-900 tex py-2 px-2 my-2 text-black hover:text-gray-500'>Show More</button>
                </div>
}
            </div>


        </>
    )
}

export default Products