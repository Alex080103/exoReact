import { useState } from "react";

const Cards = ({
  object,
  index,
  setShopList,
  shopList,
  totalPrice,
  setTotalPrice,
  handleRemoveFromPanel,
  isObjectAdded,
  setIsObjectAdded,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  function handleOnClick() {
    if (!isAdded) {
      setShopList((shopList) => [...shopList, object]);
      setTotalPrice(totalPrice + object.prix);
      setIsAdded((isAdded) => !isAdded);
    } else {
      setIsAdded((isAdded) => !isAdded);
      setTotalPrice(totalPrice - object.prix);
      handleRemoveFromPanel(object.strMeal);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-auto mt-12 lg:mb-4">
      <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
        <div className="h-full w-full">
          <div className="relative w-full">
            <img
              // src={object.image}
              src={object.strMealThumb}
              className="mb-3 max-h-[300px] h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
              alt=""
            ></img>
            <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
              <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="mb-3 flex items-center justify-between px-1 md:items-start">
            <div className="mb-2">
              <p className="text-lg font-bold text-navy-700">
                {/* {object.titre} */}
                {object.strMeal}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                {/* {object.auteur} */}
                {object.strArea}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between md:items-center lg:justify-end ">
            {/* <div className="flex">
              <p className="!mb-0 text-sm font-bold text-brand-500">
                Prix actuel: {object.prix} <span>€</span>
              </p>
            </div> */}
            {/* BUTTON TO ADD */}
            <button
              onClick={() => handleOnClick()}
              type="button"
              className={`border ${
                isAdded == false
                  ? "border-indigo-500 bg-indigo-500"
                  : "border-red-500 bg-red-500"
              } text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline`}
            >
              {isAdded == false ? (
                <i className="fa-solid fa-plus"></i>
              ) : (
                <i className="fa-solid fa-xmark"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
