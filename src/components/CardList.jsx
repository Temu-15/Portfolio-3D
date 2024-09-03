import { motion } from "framer-motion";
import Card from "./Card/Card";

const CardList = () => {
  const cardData = [
    {
      title: "Landscape With Boats",
      author: "Izaak van Oosten",
      imgSrc:
        "https://3.bp.blogspot.com/-zQ3ggObYPTE/WKgvinPtTuI/AAAAAAABous/-tbobfCQgK4fnB_FQAdCJoN6DlGhdryaACLcB/s1600/Oosten-Izaak-van-Landscape-with-Boats-1650s-oil-on-copper-Prado.jpg",
    },
    {
      title: "Mona Lisa",
      author: "Leonardo da Vinci",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/540px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    },
    {
      title: "Salvador Dali",
      author: "The Persistence of Memory",
      imgSrc:
        "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg",
    },
  ].map((cardObj, index) => {
    return (
      <Card
        key={`card-${index}`}
        title={cardObj.title}
        author={cardObj.author}
        imgSrc={cardObj.imgSrc}
      />
    );
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      // className="flex flex-wrap content-start"
    >
      {cardData}
    </motion.main>
  );
};

export default CardList;
