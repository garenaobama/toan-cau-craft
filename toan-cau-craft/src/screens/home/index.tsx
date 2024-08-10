import { Images } from "@/images";
import Image from "next/image";

export const Home = () => {
  return <div className="container">
    <Image src={Images.HomeBg} alt="home-background"/>
  </div>;
};
