import { Separator } from "@radix-ui/react-separator";
import hero_img from "../assets/hero01.jpg";
import hero2_img from "../assets/hero02.jpg";
import hero3_img from "../assets/hero03.jpg";
import hero4_img from "../assets/hero04.jpg";
import hero5_img from "../assets/hero05.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const imagesList = [hero_img, hero2_img, hero3_img, hero4_img, hero5_img];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${imagesList[currentImageIndex]})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        flexDirection: "column",
      }}
    >
      <h1 className="font-bold text-6xl">Discover The Secret Ingredient</h1>
      <Separator />
      <h3 className="font-semibold text-3xl mt-3">
        To A Perfect Kitchen - Our Products
      </h3>
    </div>
  );
};

export default Hero;
