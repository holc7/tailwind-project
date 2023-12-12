import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import "./App.css";
import { Button } from "flowbite-react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import sound from "./assets/icons8-sound.gif";
import { motion, AnimatePresence } from "framer-motion";

const Cards = () => {
  const [traveling, setTraveling] = useState([]);

  useEffect(() => {
    const SPACE_ID = import.meta.env.VITE_SPACE_ID;
    const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;
    const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

    const client = createClient({
      space: SPACE_ID,
      environment: ENVIRONMENT,
      accessToken: ACCESS_TOKEN,
    });
    client
      .getEntries([])
      .then((res) => {
        setTraveling(res.items);
        setTimeout(() => {}, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center mt-32 mb-32 gap-20">
        {traveling.map((travel) => (
          <Card
            className="max-w-sm shadow-2xl hover:scale-105 transition-all duration-200 border-t-indigo-100 flex flex-col"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={travel.fields.image.fields.file.url}
          >
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <h5 className="font-bold">{travel.fields.countrytitle}</h5>
                <img
                  className="w-16"
                  src={travel.fields.lottieAnimation?.fields.file.url}
                  alt=""
                />
                <img className="w-16" src={sound} alt="" />
              </div>
              <p className="">
                {documentToReactComponents(travel.fields.body)}
              </p>
            </div>
            <div className="mt-auto">
              <Button className="w-full" color="blue">
                Read more
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
