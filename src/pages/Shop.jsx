import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";

const Shop = () => {
  const [content, setContent] = useState([]);
  const [shopList, setShopList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isObjectAdded, setIsObjectAdded] = useState([]);

  useEffect(() => {
    searchContent("tomato");
  }, []);

  useEffect(() => {
    showAdded();
    setTimeout(showAdded, 500);
  }, [shopList]);

  function showAdded() {
    document.getElementById("alert").classList.toggle("hidden");
  }

  function handleRemoveFromPanel(titre) {
    setShopList((shopList) =>
      shopList.filter((item) => item.strMeal !== titre)
    );
  }

  function searchContent(text) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + text)
      .then(function (response) {
        setContent(response.data.meals);
      });
  }

  function handleOnSearch(event) {
    let text = event.target.value;
    searchContent(text);
  }
  return (
    <div className="grid  md:grid-cols-[70%_30%]">
      <div
        id="alert"
        className="bg-green-100 hidden border border-green-400 min-w-[100vw] z-50 px-4 py-3 rounded fixed"
        role="alert"
      >
        <span className="block sm:inline">Panier modifié</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-green-800"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
      <div className="grid justify-start xl:grid-cols-2">
        <form className="col-start-1 col-end-3 w-[800px] mx-auto mt-8">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
              onChange={handleOnSearch}
            ></input>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        {content.map((object, index) => {
          return (
            <Cards
              object={object}
              index={index}
              setShopList={setShopList}
              shopList={shopList}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              handleRemoveFromPanel={handleRemoveFromPanel}
              isObjectAdded={isObjectAdded}
              setIsObjectAdded={setIsObjectAdded}
            ></Cards>
          );
        })}
      </div>

      <div className="relative bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="pointer-events-auto w-screen max-w-lg">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2
                  className="text-lg font-medium text-gray-900"
                  id="slide-over-title"
                >
                  Shopping cart
                </h2>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Close panel</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {shopList.map((object) => {
                      return (
                        <li className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={object.strMealThumb}
                              //   src={object.image}
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="h-full w-full object-cover object-center"
                            ></img>
                          </div>
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  {/* <a href="#">{object.titre}</a> */}
                                  <a href="#">{object.strMeal}</a>
                                </h3>
                                {/* <p className="ml-4">{object.prix}</p> */}
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">{object.strArea}</p>
                              {/* <p className="text-gray-500">{object.auteur}</p> */}
                              <div className="flex">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleRemoveFromPanel(object.strMeal)
                                  }
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                {/* <p>{totalPrice}€</p> */}
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Checkout
                </a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
