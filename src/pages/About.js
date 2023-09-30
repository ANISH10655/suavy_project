import React from "react";

import stairs from "../assets/stairs.png";
import dst from "../assets/dst.webp";
import tides from "../assets/tides.webp";
import f1 from "../assets/alakshendra.webp";
import linkedin from "../assets/twitter.png";

import abhit from "../assets/abheet.webp";

import t1 from "../assets/prince.webp";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import t5 from "../assets/t5.jpg";
import t6 from "../assets/t6.jpg";
import t7 from "../assets/t7.jpg";
import t8 from "../assets/t8.jpg";
import Last from "../components/Last";
import t9 from "../assets/t9.jpg";

const About = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-[700px] gap-14">
        <div className="text-center mt-[9%] flex flex-col gap-2">
          <h1 className="text-3xl font-serif text-black whitespace-pre animate__animated wow animate__backInDown">
            HOW WE STARTED ?
          </h1>
          <div className=" w-[10%] h-2 bg-yellow-400   mx-auto animate__animated wow animate__bounceInRight "></div>
        </div>
        <div className="flex justify-between">
          <div className="w-[49%] ml-[7%]   flex flex-col bg-yellow-200 p-4 animate__animated wow animate__slideInLeft">
            <p className="text-xl font-serif">
              We start at the very beginning - a bunch of innovators working to
              bring their dreams and ambitions to reap. At the heart of our
              heart lies the basic ambition - to make the world a better,
              cleaner and smarter place in the most efficient way possible.
              Envision a true futuristic world, bringing the most advancements
              in technology and science, and at the same time making clean and
              green energy available at our fingertips. We believe that to
              master the world a civilization needs to master the harnessing of
              its energy, and we plan on working hard to make it available.
            </p>
            <br></br>

            <p className="text-xl font-serif">
              Since out incorporation in 2021, we've been working on our very
              first innovations and establishing a launchpad. The major and
              dream projects that encompass our true goals are lined up right at
              the corner. Connect if you wish to work with us, or promote our
              ideas, or share our dream! Cheers!
            </p>
          </div>

          <div className=" mr-14 -mt-14 ">
            <img
              className="animate__animated wow animate__slideInRight"
              src={stairs}
              alt="stairs"
            ></img>
          </div>
        </div>
      </div>

      <div className="w-full h-[350px]  -z-10 ">
        <div className="text-center mt-[3%] flex flex-col gap-2">
          <h1 className="text-3xl font-serif text-black animate__animated wow animate__slideInDown">
            OUR INCUBATORS
          </h1>
          <div className=" w-[10%] h-2 bg-yellow-400   mx-auto  "></div>
        </div>

        <div className="flex  justify-evenly gap-10">
          <div className="mt-[2%] ml-4 animate__animated wow animate__slideInLeft">
            <img className="h-[150px]" src={tides}></img>
          </div>

          <div className="ml-[4%] animate__animated wow animate__slideInUp">
            <img className="h-[200px]" src={dst}></img>
          </div>

          <div className="mr-[5%]  h-[full] w-[25%] mt-3 bg-yellow-200 border border-gray-500 text-black text-xl font-serif animate__animated wow animate__slideInRight">
            <p className="mt-2 p-3">
              We owe our incubation to TIDES Business Incubator, IIT Roorkee and
              funded by Department of Science and Technology (DST) under the
              programme of NIDHI PRAYAS.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full w-full">
        <div className="text-center  flex flex-col gap-2">
          <h1 className="text-3xl font-serif text-black animate__animated wow">
            MEET THE FOUNDERS
          </h1>
          <div className=" w-[10%] h-2 bg-yellow-400   mx-auto  "></div>
        </div>

        <div className="flex w-full h-[500px] justify-evenly">
          <div className="flex flex-col  h-[75%] w-[25%] mt-9 border-2 animate__animated wow animate__slideInLeft">
            <div className="relative w-full h-[22%]  bg-sky-800">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={f1}
                alt="founder image"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Alakshendra Singh</p>
              <p className="text-black font-serif">
                Head of Electronic & Networking Research
              </p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/alakshendra-singh/"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col  h-[75%] w-[25%] mt-9 border-2 animate__animated wow animate__slideInRight">
            <div className="relative w-full h-[22%]  bg-sky-800">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={abhit}
                alt="founder 2"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Abheet Pandey</p>
              <p className="text-black font-serif">
                Head of Software & Business Relations
              </p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abheet-pandey-446510210/"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full ">
        <div className="text-center  flex flex-col gap-2">
          <h1 className="text-3xl font-serif text-black animate__animated wow">
            TEAM
          </h1>
          <div className=" w-[10%] h-2 bg-yellow-400   mx-auto  "></div>
        </div>

        <div className="flex w-full h-[800px] flex-wrap gap-4 justify-evenly">
          <div className="flex flex-col  h-[50%] w-[25%] mt-9 border-2 animate__animated wow animate__slideInLeft">
            <div className="relative w-full h-[22%]   bg-green-900">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={t1}
                alt="t1"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Prince Kumar Singh</p>
              <p className="text-black font-serif">Lead Software Developer</p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/prince-kumar-singh-592021193/"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col  h-[50%] w-[25%] mt-9 border-2 animate__animated wow animate__slideInDown">
            <div className="relative w-full h-[22%]   bg-green-900">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={t2}
                alt="t2"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Aniket Sourav</p>
              <p className="text-black font-serif">Director Sauvy Tech</p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aniket-sourav-b9625722a"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col  h-[50%] w-[25%] mt-9 border-2 animate__animated wow animate__slideInRight">
            <div className="relative w-full h-[22%]   bg-green-900">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={t4}
                alt="t4"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Aryan Sinha</p>
              <p className="text-black font-serif">Software Developer</p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aryan-sinha-104483222/"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col  h-[50%] w-[25%] mt-9 border-2 animate__animated wow">
            <div className="relative w-full h-[22%]   bg-green-900">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={t5}
                alt="t5"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Rishav Sarkar</p>
              <p className="text-black font-serif">Software Developer</p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/rishav-sarkar-97174325b/"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col  h-[50%] w-[25%] mt-9 border-2 animate__animated wow">
            <div className="relative w-full h-[22%]   bg-green-900">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={t9}
                alt="t3"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Shivam Kumar</p>
              <p className="text-black font-serif">Electronics Core Lead</p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/shivam-kumar-2a06a6209"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col  h-[50%] w-[25%] mt-9 border-2 animate__animated wow">
            <div className="relative w-full h-[22%]   bg-green-900">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={t3}
                alt="t3"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Pratik Ghosh</p>
              <p className="text-black font-serif">Electronics Core Lead</p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/pratik-ghosh-b02840284"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col  h-[50%] w-[25%] mt-9 border-2 animate__animated wow">
            <div className="relative w-full h-[22%]   bg-green-900">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={t6}
                alt="t6"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Tanmay Raj</p>
              <p className="text-black font-serif">Electronics Core Lead</p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/tanmay-raj-54562a223"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col  h-[50%] w-[25%] mt-9 border-2 animate__animated wow animate__slideInLeft">
            <div className="relative w-full h-[22%]   bg-green-900">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={t8}
                alt="t8"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Shruti Shikha</p>
              <p className="text-black font-serif">
                Operations and Marketing Analyst
              </p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/shruti-shikha-3b955b249"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>

          <div className="flex flex-col  h-[50%] w-[25%] mt-9 border-2 animate__animated wow animate__slideInRight">
            <div className="relative w-full h-[22%]  bg-green-900">
              <img
                className="absolute h-36 w-36 rounded-full ml-28 mt-3"
                src={t7}
                alt="t7"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30%] gap-3">
              <p className="text-black text-3xl">Kumar Saurav</p>
              <p className="text-black font-serif">
                Operations and Marketing Analyst
              </p>
            </div>
            <div className="ml-[38%] mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sauravsrivastava-"
              >
                <img className="w-[20%]" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[39%]">
        <Last></Last>
      </div>
    </div>
  );
};

export default About;
