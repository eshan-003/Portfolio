import React from "react";
import MoviesApp from "../assets/portfolio/moviesApp.png";
import ChatApp from "../assets/portfolio/Talk-A-Tive.png";
import Dappazon from "../assets/portfolio/dappazon.png";
import Music from "../assets/portfolio/music-nft.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ChatApp,
      title:"Talk-A-Tive",
      code:"https://github.com/eshan-003/Talk-A-Tive",
      demo:"https://www.youtube.com/watch?v=i9QBxSHA-c8",
    },{
      id: 2,
      src: Music,
      title:"Music-NFT player",
      code:"https://github.com/eshan-003/music-nft",
      demo:"https://www.youtube.com/watch?v=YjPDEykv-G0",
    },{
      id: 3,
      src: Dappazon,
      title:"Dappazon",
      code:"https://github.com/eshan-003/dappazon",
      demo:"https://www.youtube.com/watch?v=CnSl7sBCj_E",
    },
    {
      id: 4,
      src: MoviesApp,
      title:"Entertainment Hub",
      code:"https://github.com/eshan-003/moviesApp",
      demo:"https://www.youtube.com/watch?v=qyRmCabo7Uw",
    },
    
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
   
        <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,code,demo,title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <div className="text-gray-200 text-center py-2 text-lg font-bold ">
              {title}
            </div>
              <img
                src={src}
                alt=""
                className="object-cover h-40 w-[100%] rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target="_blank" href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target="_blank" href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
