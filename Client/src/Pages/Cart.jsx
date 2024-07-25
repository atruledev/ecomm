import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../Store";
import { createAction } from "@reduxjs/toolkit";

function Cart() {
  let { quantity } = useSelector((state) => state.cart);
  const [value, setvalue] = useState(quantity);
  const dispatch = useDispatch();
  let { items } = useSelector((state) => state.cart);
  console.log(items);
  useDispatch(counterAction.quantity(value));


  const handleremove = (id) => {
    dispatch(counterAction.removeproduct(id));
  };
  const handleQuantityIncrement = (id) => {
    dispatch(counterAction.addproduct(id));
  };
  const handleQuantityDecrement = (id) => {
    dispatch(counterAction.removeQuantity(id));
  };

  return (
    <>
      <section class="bg-white py-8 antialiased  md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 class="text-xl font-semibold text-black  sm:text-2xl">
            Shopping Cart
          </h2>

          <div class="mt-6 sm:mt-8 md:gap-6  lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full  lg:max-w-2xl xl:max-w-4xl">
              <div className="flex flex-col">
                {items &&
                  items.map((e) => (
                    <div class="space-y-6" key={e.id}>
                      <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
                        <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <a href="#" class="shrink-0 md:order-1">
                            <img
                              class="h-20 w-20 dark:hidden"
                              src={e.productImages}
                              alt="imac image"
                            />
                            <img
                              class="hidden h-20 w-20 dark:block"
                              src={e.productImages}
                              alt="imac image"
                            />
                          </a>

                          <div class="flex items-center justify-between md:order-3 md:justify-end">
                            <div class="flex items-center">
                              Quantity:
                              <div className="flex flex-col justify-around mx-5">
                                <form class="max-w-xs mx-auto  flex flex-row ">
                                  <label
                                    for="quantity-input"
                                    class="block mb-2 text-sm font-medium text-black"
                                  ></label>
                                  <div class="relative flex items-center max-w-[8rem] ">
                                    <button
                                      onClick={() =>
                                        handleQuantityDecrement(e.id)
                                      }
                                      type="button"
                                      id="decrement-button"
                                      data-input-counter-decrement="quantity-input"
                                      class=" bg-black  border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                    >
                                      <svg
                                        class="w-3 h-3 text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 2"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M1 1h16"
                                        />
                                      </svg>
                                    </button>
                                    <input
                                      type="text"
                                      id="quantity-input"
                                      data-input-counter
                                      aria-describedby="helper-text-explanation"
                                      class="bg-black border-x-0  h-11 text-center text-white text-sm  block w-full py-2.5 "
                                      value={e.quantity}
                                      required
                                    />
                                    <button
                                      onClick={() => handleQuantityIncrement(e)}
                                      type="button"
                                      id="increment-button"
                                      data-input-counter-increment="quantity-input"
                                      class=" bg-black border 0 rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none"
                                    >
                                      <svg
                                        class="w-3 h-3 text-white dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M9 1v16M1 9h16"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div class="text-end md:order-4 md:w-32">
                              <p class="text-base font-bold  text-black">
                                Rs.{e.productPrice}
                              </p>
                            </div>
                          </div>

                          <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a
                              href="#"
                              class="text-base font-medium text-black  "
                            >
                              {e.productTitle}
                            </a>

                            <div class="flex items-center gap-4">
                              <button
                                type="button"
                                class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                              >
                                <svg
                                  class="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                  />
                                </svg>
                                Add to Favorites
                              </button>

                              <button
                                onClick={() => handleremove(e.id)}
                                type="button"
                                class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                <svg
                                  class="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p class="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Total Price
                      </dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white"></dd>
                    </dl>
                  </div>

                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt class="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd class="text-base font-bold text-gray-900 dark:text-white">
                      $8,191.00
                    </dd>
                  </dl>
                </div>

                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Checkout
                </a>

                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form class="space-y-4">
                  <div>
                    <label
                      for="voucher"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
