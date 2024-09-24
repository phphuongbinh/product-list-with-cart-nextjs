import Image from "next/image";
import baklavaImage from "./assets/images/image-baklava-desktop.jpg";

export default function Home() {
  return (
    <div className="flex gap-8 py-20 px-28 bg-background">
      {/* DESSERTS */}
      <div className="w-2/3 desserts ">
        <h2 className="mb-8 text-4xl font-semibold text-textColor">Desserts</h2>
        <div className="relative grid grid-cols-3 gap-6 dessert-list">
          <div className="dessert-item">
            <Image
              className="w-full rounded-lg"
              src={baklavaImage}
              alt=""
            ></Image>
            <button className="relative flex items-center justify-center h-10 gap-1 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-full - left-1/2 w-36 border-textLighter hover:border-redColor ">
              <span className="flex items-center text-2xl text-redColor">
                <ion-icon name="cart-outline"></ion-icon>
              </span>
              <span className="text-sm font-semibold">Add to Cart</span>
            </button>
            <div className="info">
              <span className="text-sm text-textLighter">Baklava</span>
              <h4 className="font-semibold text-textColor ">
                Pistachio Baklava
              </h4>
              <span className="font-semibold text-redColor ">$4.00</span>
            </div>
          </div>
          <div className="dessert-item">
            <Image
              className="w-full rounded-lg"
              src={baklavaImage}
              alt=""
            ></Image>
            <button className="relative flex items-center justify-center h-10 gap-1 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-full - left-1/2 w-36 border-textLighter hover:border-redColor ">
              <span className="flex items-center text-2xl text-redColor">
                <ion-icon name="cart-outline"></ion-icon>
              </span>
              <span className="text-sm font-semibold">Add to Cart</span>
            </button>
            <div className="info">
              <span className="text-sm text-textLighter">Baklava</span>
              <h4 className="font-semibold text-textColor ">
                Pistachio Baklava
              </h4>
              <span className="font-semibold text-redColor ">$4.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* CART */}
      <div className="w-1/3 cart ">2</div>
    </div>
  );
}
