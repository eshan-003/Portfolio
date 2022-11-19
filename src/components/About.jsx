import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        My name is Eshan Chakraborty and I am currently learning full-stack web development and focus on creating dynamic and beautiful web pages with a vibrant frontend and a scalable backend using MERN stack(Mongo Db, Express JS, React JS, Node JS). 
       <br/>
        Also I have been recently exploring the field of machine learning and deep learning . Building small yet useful machine learning models have been absolutely enjoyable. The ability of a computer to predict the results based on previous learnings is fascinating and am looking forward to explore more in this world of AI.
        </p>

        <br />

        <p className="text-xl">
        I am currently studying software engineering from one of the renowned universities of India Jadavpur University , and have been loving every minute of it. I am a developer, engineer and overall thinker. 

Check out some of the links below to see what I’ve been up to lately.
        </p>
      </div>
    </div>
  );
};

export default About;
