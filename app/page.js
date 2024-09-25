import Image from "next/image";
import baklavaImage from "./assets/images/image-baklava-desktop.jpg";
import Desserts from "./components/Desserts";
import Cart from "./components/Cart";

export default function Home() {
  return (
    <div className="flex items-start gap-8 py-20 px-28 bg-background">
      {/* DESSERTS */}
      <Desserts />

      {/* CART */}
      <Cart></Cart>
    </div>
  );
}
