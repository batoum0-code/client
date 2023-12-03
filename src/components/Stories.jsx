import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
import { truncate } from "lodash";
import {FcLike} from 'react-icons/fc'
import img1 from '../assets/gallery/1.webp'
import img2 from '../assets/redStory.jpg'
const Stories = () => {
    const splideOptions = {
        perPage: 3,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };


      const news = [
        {
          title:'samir',
          img:img1,
          time:'2:30',
          text:'Ajoutez une touche de sophistication à votre style estival avec notre superbe mocassin bleu. Confortable et élégant, il vous fera remarquer à coup sûr. Ne passez pas à côté ! 💪💙',
        },
        {
          title:'samir',
          img:img2,
          time:'2:30',
          text:'Soyez remarquables cet été avec notre mocassin rouge pour femmes ! 💃 Ajoutez une touche audacieuse et élégante à vos tenues estivales avec notre magnifique mocassin rouge. Confortable et chic, il est parfait pour toutes les occasions. Ne passez pas inaperçue ! ',
        },
        {
          title:'samir',
          img:img1,
          time:'2:30',
          text:'Donnez une allure moderne à votre style en optant pour nos mocassins exclusifs, confectionnés avec soin par nos artisans.',
        }
      ]


  return (
    <>
      <section  className="  rounded-lg p-4 nike-container mb-11 bg-bSlight">
        <Title title='Stories' />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 w-[300px] sm:w-auto h-auto rounded-lg shadow bg-black text-bSlight shadow-slate-200 ring-1 ">
                  <div className="flex items-center justify-center">
                    <img
                      src={val.img}
                      alt={`img/story/${i}`}
                      className="w-auto h-auto object-cover shadow-md  rounded-tl-lg rounded-tr-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                      <span className="text-xs font-bold">{<FcLike/>}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style w-4 h-4 text-bSlight" />
                      <span className="text-xs font-bold">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">CHERTI</span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                    <p className="text-sm text-justify lg:text-xs">{truncate(val.text, {length: 175})}</p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a href={val.url} target="_blank" role={"button"} className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme">
                      DECOUVRIR PLUS
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </>
  );
};

export default Stories;
