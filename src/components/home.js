import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import wallpaper from "../assets/images/wallpaper.png";
import download from "../assets/images/download.png";
import download2 from "../assets/images/download2.png";
import download3 from "../assets/images/download3.png";
import download4 from "../assets/images/download4.png";
import { FaInstagram, FaVoicemail, FaLinkedinIn, FaFacebook, FaDiscord, FaGithub } from 'react-icons/fa';
import Drum from "../assets/images/Drum.png";
import dog from "../assets/images/dog.png";
import Personal from "../assets/images/Personal.png";

function Home() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Fronted Developer", "Backend Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 70
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <main className=" bg-black">
            <section id="Home" className="  flex justify-around ... items-center ... text-gray-200 h-sceen">
                <div className=" text-4xl tracking-widest italic ... h-96 mt-80">
                    Hi, My name is <span className=" text-blue-700 font-semibold ...">Paresh</span>
                    <div >and I'm a passionate </div>


                    <span id="element" className=" text-blue-700" ref={el}></span>
                    <br />
                    <div className="flex justify-around mt-8 mx-10">
                        <a href="#" role="button">
                            <FaDiscord className="h-7 w-7" />
                        </a>
                        <a href="#" role="button">
                            <FaInstagram className="h-7 w-7" />
                        </a>
                        <a href="#" role="button">
                            <FaLinkedinIn className="h-7 w-7" />
                        </a>
                    </div>
                    <button href="#" className="bg-blue-700 font-semibold shadow-lg shadow-blue-500/40 hover:bg-white hover:text-blue-700 border-2 border-blue-700 mt-8 mx-20 px-6 py-2 h-12 w-56 text-center text-xl rounded-lg hover:duration-700">
                        Download CV
                    </button>

                </div>



                <img
                    className="border-4 border-indigo-500/100 h-96 w-96 rounded-full ... object-cover object-center shadow-2xl shadow-blue-900"
                    src={wallpaper}
                    alt="None" />
            </section>

            <hr className="border-0 h-0.5 bg-blue-700 mt-10 mx-10" />

            {/* <-About-section-> */}
            <section id="About" className=" mt-36 mb-12 h-cover pb-48 text-center">
                <span className=" text-white text-4xl px-auto font-bold">About Me</span>

                <hr className=" mx-auto w-36 h-1  mt-4 rounded-full bg-blue-600" />

                <h1 className=" text-white text-center mt-52 text-2xl mx-10 tracking-wide ... leading-loose ">I'm a dedicated web developer with expertise in both frontend and backend technologies, specializing in React.js, Mongoose, Tailwind CSS, and Bootstrap. My passion lies in creating secure and authenticated web applications. With a strong understanding of web development principles, I thrive on solving complex problems and delivering efficient solutions.Building robust and innovative websites is not just my profession, but also my greatest joy. I am constantly exploring new frameworks, languages, and best practices to stay at the forefront of web development trends.
                </h1>
            </section>

            <hr className="border-0 h-0.5 bg-blue-700  mx-10" />



            {/* <-Skills-section-> */}
            <section id="skills" className=" bg-slate-900 h-screen pt-36 pb-52 px-20">
                <span className=" text-white text-4xl font-bold">Skills</span>

                <box className=" flex border-0 h-0.5 bg-white mt-10 ml-30 mr-20" />

                <div className="flex">
                    <img src={download} className=" w-8 h-6 relative left-36 bottom-8" />
                    <div className=" h-40 w-0.5 bg-white mx-32">
                        <div className="text-white relative top-40 w-80">
                            React Developer
                        </div>
                        <div className=" text-gray-400 relative text-center w-60 mt-40 pt-2">
                            Design and build user interfaces using the React JavaScript library, creating interactive and responsive web applications with a focus on component-based architecture and virtual DOM.
                        </div>
                    </div>
                    <img src={download2} className=" w-8 h-6 relative left-36 bottom-8" />
                    <div className=" h-40 w-0.5 bg-white mx-32">
                        <div className="text-white relative top-40 w-80">
                            Bootstrap Developer
                        </div>
                        <div className=" text-gray-400 relative text-center w-60 mt-40 pt-2">
                            Use the Bootstrap framework to rapidly create responsive and visually appealing web applications. Leverage pre-designed components and CSS styles for consistent front-end development.
                        </div>
                    </div>
                    <img src={download3} className=" w-8 h-6 relative left-36 bottom-8" />
                    <div className=" h-40 w-0.5 bg-white mx-32">
                        <div className="text-white relative top-40 w-80">
                            HTML Developer
                        </div>
                        <div className=" text-gray-400 relative text-center w-60 mt-40 pt-2">
                            Create and structure the content of web pages using Hypertext Markup Language (HTML), ensuring proper layout, compatibility for browser rendering and user experience.
                        </div>
                    </div>
                    <img src={download4} className=" w-8 h-6 relative left-36 bottom-8" />
                    <div className=" h-40 w-0.5 bg-white mx-32">
                        <div className="text-white relative top-40 w-80">
                            JS Developer
                        </div>
                        <div className=" text-gray-400 relative text-center w-60 mt-40 pt-2">
                            Writes, optimizes, and maintains code using the JavaScript programming language to create dynamic and interactive web applications, enhancing user experience.
                        </div>
                    </div>


                </div>
            </section>

            <hr className="border-0 h-0.5 bg-blue-700  mx-10" />

            {/* <-Projects-section-> */}
            <section id="Projects" className=" mt-36 mb-12 h-screen pb-48 text-center">
                <span className=" text-white text-4xl px-auto font-bold">Projects</span>
                <hr className=" mx-auto w-36 h-1  mt-4 rounded-full bg-blue-600" />

                <div className="  flex h-full mt-20 mx-4 justify-evenly">
                    <button className="border-white border-2 rounded-t-lg h-96 w-80  hover:-translate-y-1 hover:scale-110 duration-300 ... bg-slate-800 transition ease-in-out delay-150 text-white my-auto">

                        <img src={dog} className=" border-black border-2 rounded-t-lg w-80 h-64 mb-16" />

                        <h1 className=" mb-4 h-12">
                            Tin-Dog Project
                        </h1>

                    </button>
                    <a href="" className="border-white border-2 rounded-t-lg h-96 w-80 hover:-translate-y-1 hover:scale-110 duration-300 ... bg-slate-800 transition ease-in-out delay-150 text-white my-auto">
                        <img src={Drum}  className=" border-black border-2 rounded-t-lg w-80 h-64 mb-16" />
                        <h1 className=" mb-4 h-12">
                            Drum-kit Project
                        </h1>
                    </a>
                    <a href="https://elaborate-marigold-84a89b.netlify.app/" className="border-white border-2 rounded-t-lg h-96 w-80 hover:-translate-y-1 hover:scale-110 duration-300 ... bg-slate-800 transition ease-in-out delay-150 text-white my-auto">
                        <img src={Personal} className=" border-black border-2 rounded-t-lg w-80 h-64 mb-16" />
                        <h1 className=" mb-4 h-12">
                            Personal Website
                        </h1>
                    </a>
                </div>


            </section>


            {/* <-Footer-section-> */}
            <footer id="contact" class="bg-white dark:bg-gray-800 mt-96">
                <hr className="border-0 h-0.5 bg-blue-700  mx-10" />
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="#Home" class="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
                            </a>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://react.dev/" class="hover:underline">React.js</a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Me</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://github.com/Paresh8890-Jaisinghani" class="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.com/channels/@me" class="hover:underline">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#Home" class="hover:underline">Portfolio™</a>. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaFacebook className="w-4 h-4" />
                            </a>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaDiscord className="w-4 h-4" />
                            </a>

                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaGithub className="w-4 h-4" />
                            </a>

                        </div>
                    </div>
                </div>
            </footer>

        </main>


    )
}








export default Home;