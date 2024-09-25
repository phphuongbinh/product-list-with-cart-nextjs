"use client";
import React, { useState } from "react";
import Image from "next/image";
import carbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg";
import emptyCart from "../assets/images/illustration-empty-cart.svg";

const Cart = () => {
  const [isAnyCart, setIsAnyCart] = useState(false);
  return (
    <div className="w-1/3 px-6 py-4 bg-white rounded-lg cart">
      <h3 className="mb-4 text-2xl font-bold text-redColor">
        Your Cart {"(7)"}
      </h3>

      {!isAnyCart ? (
        <>
          <div className="cart-list">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 cart-item">
              <div className="text-sm">
                <h5 className="font-semibold text-textColor ">
                  Classic Tiramisu{" "}
                </h5>
                <span className="font-semibold text-redColor">1x</span>
                <span className="ml-3 text-stone-400">
                  <span className="align-[-1px]">@</span> $5.50
                </span>
                <span className="ml-2 font-semibold text-stone-600">$5.50</span>
              </div>
              <button className="text-2xl text-textLighter hover:text-textColor">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 cart-item">
              <div className="text-sm">
                <h5 className="font-semibold text-textColor ">
                  Classic Tiramisu{" "}
                </h5>
                <span className="font-semibold text-redColor">1x</span>
                <span className="ml-3 text-stone-400">
                  <span className="align-[-1px]">@</span> $5.50
                </span>
                <span className="ml-2 font-semibold text-stone-600">$5.50</span>
              </div>
              <button className="text-2xl text-textLighter hover:text-textColor">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 cart-item">
              <div className="text-sm">
                <h5 className="font-semibold text-textColor ">
                  Classic Tiramisu{" "}
                </h5>
                <span className="font-semibold text-redColor">1x</span>
                <span className="ml-3 text-stone-400">
                  <span className="align-[-1px]">@</span> $5.50
                </span>
                <span className="ml-2 font-semibold text-stone-600">$5.50</span>
              </div>
              <button className="text-2xl text-textLighter hover:text-textColor">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 cart-item">
              <div className="text-sm">
                <h5 className="font-semibold text-textColor ">
                  Classic Tiramisu{" "}
                </h5>
                <span className="font-semibold text-redColor">1x</span>
                <span className="ml-3 text-stone-400">
                  <span className="align-[-1px]">@</span> $5.50
                </span>
                <span className="ml-2 font-semibold text-stone-600">$5.50</span>
              </div>
              <button className="text-2xl text-textLighter hover:text-textColor">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 cart-item">
              <div className="text-sm">
                <h5 className="font-semibold text-textColor ">
                  Classic Tiramisu{" "}
                </h5>
                <span className="font-semibold text-redColor">1x</span>
                <span className="ml-3 text-stone-400">
                  <span className="align-[-1px]">@</span> $5.50
                </span>
                <span className="ml-2 font-semibold text-stone-600">$5.50</span>
              </div>
              <button className="text-2xl text-textLighter hover:text-textColor">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 cart-item">
              <div className="text-sm">
                <h5 className="font-semibold text-textColor ">
                  Classic Tiramisu{" "}
                </h5>
                <span className="font-semibold text-redColor">1x</span>
                <span className="ml-3 text-stone-400">
                  <span className="align-[-1px]">@</span> $5.50
                </span>
                <span className="ml-2 font-semibold text-stone-600">$5.50</span>
              </div>
              <button className="text-2xl text-textLighter hover:text-textColor">
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2 text-textColor">
            <p className="text-sm text">Order Total</p>
            <p className="text-2xl font-semibold ">$46.50</p>
          </div>
          <div className="flex justify-center py-2 mb-6 text-sm rounded-lg bg-background">
            <span className="mr-2 text-green-500">
              <Image
                src={carbonNeutralIcon}
                alt="Carbon Neutral Icon"
                width={18}
                height={18}
              />
            </span>
            <span>
              This is a <b>carbon-neutral</b> delivery
            </span>
          </div>

          <button className="flex justify-center w-full py-3 text-sm text-white rounded-full bg-crimsonColor">
            Confirm Order
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image src={emptyCart} alt="Empty Cart"></Image>
          <h5 className="text-sm font-semibold text-textColor">
            Your added items will appear here!
          </h5>
        </div>
      )}
    </div>
  );
};

export default Cart;
