import hero_img from "../assets/hero01.jpg"

const Hero = () => {
  return (
    <div>
      <img src={hero_img} alt="hero" className="w-full h-[100vh] object-cover " />
    </div>
  )
}

export default Hero
