import { motion } from "framer-motion";
import Card from "./Card/Card";
import fashionImage from "../../public/images/temu-15.github.io_Fashion-Website_(Nest Hub Max)jl.png";
import ClouderImage from "../../public/images/temu-15.github.io_cloud-hosting-web_(Nest Hub Max) (2) 01.png";
import SpotifyImage from "../../public/images/localhost_5173_(Nest Hub Max) (2).png";
const CardList = () => {
  const cardData = [
    {
      title: "Fashion Website",
      imgSrc: fashionImage,
      link: "https://temu-15.github.io/Fashion-Website/",
    },
    {
      title: "Clouding Website",
      imgSrc: ClouderImage,
      link: "https://temu-15.github.io/cloud-hosting-web/",
    },
    {
      title: "Spotify clone",
      imgSrc: SpotifyImage,
      link: "https://github.com/Temu-15/spotify-clone-web-application",
    },
  ].map((cardObj, index) => {
    return (
      <Card
        key={`card-${index}`}
        title={cardObj.title}
        link={cardObj.link}
        imgSrc={cardObj.imgSrc}
      />
    );
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="relative block w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      // className="flex flex-wrap content-start"
    >
      {cardData}
    </motion.main>
  );
};

export default CardList;
