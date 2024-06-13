"use client";
import { useState } from "react";
import Header from "./components/Header";
// import MovingIcons from "./components/MovingIcons"; // This component is removed for now can be used later on
// import ScrollImages from "./components/ScrollImages";
import MainComponent from './components/MainComponent';
import ProductPortfolio from './components/ProductPortfolio';
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
    const [index, setindex] = useState(0);
    const router = useRouter();
    return (
        <main className="flex flex-col min-h-screen bg-white w-screen overflow-x-hidden">
            <Header />

            <div className="min-h-screen relative isolate px-6 pt-14 lg:px-8 flex flex-col">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="flex-1 flex items-center flex-col lg:flex-row justify-center">
                    <div className="mx-auto max-w-3xl 2xl:max-w-4xl">
                        <div className="text-center">
                            <h1 className="text-4xl lg:text-7xl 2xl:text-8xl font-bold tracking-tight text-gray-900">
                                World&apos;s Fastest Pre-trained Edge AI Accelerators
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Edgeble AI Accelerator Modules enable deep learning inferences at the edge,
                                reducing latency and enhancing response times
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link href="/contact" passHref legacyBehavior>
                                    <a className="bg-black px-3.5 lg:px-4 xl:px-6 2xl:px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300 transform">
                                        Get started
                                    </a>
                                </Link>
                                <Link href="/contact" passHref legacyBehavior>
                                    <a className="text-sm font-semibold leading-6 text-gray-900">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 mt-20 md:mt-0">
                        <img src="./drone.png" className="animate-bounce-slow" />
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-purple-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
            </div>
            <div className="overflow-y-auto"><MainComponent /></div>
            
            <div className="overflow-y-auto"><ProductPortfolio /></div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="h-full md:h-screen w-screen">
                <div className="p-8 md:p-12 lg:p-16 2xl:p-48 w-full relative isolate">
                    <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 lg:mb-12 xl:mb-16 2xl:mb-16 text-center">
                        Ecosystem
                    </p>
                    <div className="flex justify-center">
                        <img src="./1.png" className="w-full object-cover rounded-lg" />
                    </div>
                    <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl text-center px-4">
			OpenAIA, Edgeble AI&apos;s advanced AI Accelerator Platform, seamlessly empowers Edge AI-enabled devices to develop, train, deploy, and update AI models, integrating secure and scalable model management with DevOps methodologies to drive transformative innovation.
                    </p>
                    <div className="rotate-90 absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="h-full md:h-screen w-screen">
                <div className="p-8 md:p-12 lg:p-16 2xl:p-48 w-full relative isolate">
                    <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 lg:mb-12 xl:mb-16 2xl:mb-16 text-center">
                        What&apos;s New
                    </p>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="z-0 bg-white flex flex-col shadow-lg md:shadow-md hover:shadow-lg cursor-pointer">
                            <img src="./blog1.webp" className="w-full object-contain" />
                            <p className="md:text-lg p-4 md:p-6">Talk: AI Vision By Interfacing CSI2 Sensors On Rockchip NPU In Linux</p>
                        </div>

                        <div className="z-0 bg-white flex flex-col shadow-lg md:shadow-md hover:shadow-lg cursor-pointer">
                            <img src="./blog2.webp" className="w-full object-contain" />
                            <p className="md:text-lg p-4 md:p-6">Talk: AI Vision By Interfacing CSI2 Sensors On Rockchip NPU In Linux</p>
                        </div>

                        <div className="z-0 bg-white flex flex-col shadow-lg md:shadow-md hover:shadow-lg cursor-pointer">
                            <img src="./blog3.webp" className="w-full object-contain" />
                            <p className="md:text-lg p-4 md:p-6">Talk: AI Vision By Interfacing CSI2 Sensors On Rockchip NPU In Linux</p>
                        </div>
                    </div>
                    <div
                        className="rotate-30 absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-purple-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-[30vh] md:h-[50vh] bg-gradient-to-l from-black to-blue-900 w-screen flex flex-col md:flex-row items-center justify-around md:justify-between p-4 md:p-12 lg:p-16"
            >
                <p className="text-white text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl md:w-1/2 font-semibold tracking-wide leading-normal text-center md:text-left">
                    Are You Ready To Embrace The Future of Edge-AI
                </p>
                <button className="px-6 2xl:px-10 py-2 2xl:py-3 md:text-lg xl:text-xl 2xl:text-2xl bg-white transition duration-300 transform hover:scale-110 font-semibold">
                    Enquire Now
                </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-[30vh] md:h-[50vh] w-screen flex flex-col items-center p-4 md:p-12 lg:p-16 relative isolate"
            >
                <p className="bg-clip-text bg-gradient-to-l from-pink-500 to-blue-900 text-transparent text-9xl font-semibold tracking-wide leading-normal text-center md:text-left">
                    {`</>`}
                </p>
		<p className="font-mono tracking-widest text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl">Developer&apos;s Community</p>
                <span className="font-mono tracking-widest text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl flex items-center">Coming Soon...</span>
                <div
                        className="rotate-60 absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-purple-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
            </motion.div>
            <div className="flex flex-col h-full w-full z-0 bg-white">
                <div className="flex flex-wrap gap-8 p-8 md:p-12 lg:p-16">
                    <div className="flex-1 flex flex-col gap-2 min-w-48">
                        <p className="text-xl 2xl:text-3xl font-semibold mb-2">edgeble</p>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">
                            Are You Ready To Embrace The Future of Edge-AI
                        </a>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg mt-2">
                            Terms & Conditions
                        </a>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">Privacy Policy</a>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 min-w-48">
                        <p className="text-xl 2xl:text-3xl font-semibold mb-2">Products</p>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">AI Accelerators</a>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">Machine Vision</a>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">OpenAI</a>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">Technology</a>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 min-w-48">
                        <p className="text-xl 2xl:text-3xl font-semibold mb-2">Company</p>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">About Us</a>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">Solutions</a>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">Platform</a>
                        <a className="text-grey-700 hover:text-blue-900 hover:underline cursor-pointer text-sm 2xl:text-lg">Blogs</a>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 min-w-48">
                        <p className="text-xl 2xl:text-3xl font-semibold mb-2">Contact</p>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 flex-shrink-0">
                                <path
                                    fillRule="evenodd"
                                    d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="text-grey-700 text-sm 2xl:text-lg">
                                T-Hub, Raidurgam Panmaktha, Hyderabad Knowledge City, Hyderabad, Telangana 500081, India.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 flex-shrink-0">
                                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                            </svg>

                            <p className="text-grey-700 text-sm 2xl:text-lg">info@edgeble.ai</p>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 flex-shrink-0">
                                <path
                                    fillRule="evenodd"
                                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <p className="text-grey-700 text-sm 2xl:text-lg">+91-91000-90959</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-72">
                        <p className="text-xl 2xl:text-3xl font-semibold mb-4">Stay Updated</p>
                        <div className="flex w-full flex-col gap-4">
                            <input
                                className="px-2 py-1 border border-2 border-black focus:border-blue-900 outline-none w-full"
                                placeholder="Enter Name"
                            ></input>
                            <input
                                className="px-2 py-1 border border-2 border-black focus:border-blue-900 outline-none w-full"
                                placeholder="Enter email address"
                            ></input>
                            <button className="py-2 bg-blue-900 text-white px-4">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-600 my-10 mx-8 md:mx-12 lg:mx-16"></div>
                <div className="w-full flex justify-center items-center gap-4 px-8 md:px-12 lg:px-16 mb-10">
                    <a className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.181,11h-1.729 C16.376,11,16,11.568,16,12.718V14h3.154l-0.428,3H16v7.95C15.671,24.982,15.338,25,15,25c-0.685,0-1.354-0.07-2-0.201V17h-3v-3h3 v-1.611C13,9.339,14.486,8,17.021,8c1.214,0,1.856,0.09,2.16,0.131V11z"></path>
                        </svg>
                    </a>
                    <a className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                            <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                        </svg>
                    </a>
                    <a className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                        </svg>
                    </a>
                    <a className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                    </a>
                    <a className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                    </a>
                    <a className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                            <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                        </svg>
                    </a>
                </div>
                <div className="h-12 w-full flex justify-center items-center">
                    <p className="text-[12px] lg:text-sm 2xl:text-md 3xl:text-lg">© 2024 Edgeble AI Technologies Private Limited.</p>
                </div>
            </div>
        </main>
    );
}
