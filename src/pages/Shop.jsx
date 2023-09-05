import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";
const array = [
  {
    titre: "Livre 1",
    auteur: "Auteur 1",
    prix: 19.99,
    image: "https://picsum.photos/id/15/600",
  },
  {
    titre: "Livre 2",
    auteur: "Auteur 2",
    prix: 24.99,
    image: "https://picsum.photos/id/199/600",
  },
  {
    titre: "Livre 3",
    auteur: "Auteur 3",
    prix: 14.99,
    image: "https://picsum.photos/id/204/600",
  },
  {
    titre: "Livre 4",
    auteur: "Auteur 4",
    prix: 50.99,
    image: "https://picsum.photos/id/228/600",
  },
];

const Shop = () => {
  const [content, setContent] = useState(array);
  const [shopList, setShopList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //   useEffect(() => {
  //     axios
  //       .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
  //       .then(function (response) {
  //         console.log(response.data.meals);
  //         setContent(response.data.meals);
  //       });
  //   }, []);

  function handleRemoveFromPanel(titre) {
    setShopList((shopList) => shopList.filter((item) => item.titre !== titre));
  }
  return (
    <div className="grid  md:grid-cols-[70%_30%]">
      <div className="grid justify-start xl:grid-cols-2">
        {content.map((object) => {
          return (
            <Cards
              object={object}
              setShopList={setShopList}
              shopList={shopList}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              handleRemoveFromPanel={handleRemoveFromPanel}
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
                              src={object.image}
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="h-full w-full object-cover object-center"
                            ></img>
                          </div>
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">{object.titre}</a>
                                </h3>
                                <p className="ml-4">{object.prix}</p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">{object.auteur}</p>

                              <div className="flex">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleRemoveFromPanel(object.titre)
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
                <p>{totalPrice}€</p>
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
