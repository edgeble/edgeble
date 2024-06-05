"use client";
import { useState } from "react";
import Header from "./components/Header";
import MovingIcons from "./components/MovingIcons";
import ScrollImages from "./components/ScrollImages";

export default function Home() {
    const [index, setindex] = useState(0);
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Header />

            <div className="min-h-screen relative isolate px-6 pt-14 lg:px-8 flex flex-col">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="flex-1 flex items-center flex-col lg:flex-row justify-center">
                    <div className="mx-auto max-w-2xl">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding.{" "}
                                <a href="#" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your online business</h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                                occaecat fugiat aliqua.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
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
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
            </div>
            <div className="min-h-screen flex flex-col">
                <MovingIcons />
                <div className="flex-1 p-8 md:p-12 lg:p-16">
                    <p className="text-xl md:text-3xl lg:text-4xl font-bold">Product Portfolio</p>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                        <div className="flex flex-col">
                            <img src="./cardimage1.webp" className="mt-4 lg:mt-12 w-full w-full object-cover rounded-lg" />
                            <p className="text-lg md:text-xl lg:text-2xl font-semibold pt-8 pb-4">AI Accelerator</p>
                            <p>
                                Performance-driven standardized neural compute modules with built-in AI Accelerators that are ready to deploy in any
                                AIoT sectors.
                            </p>
                            <button className="rounded-full px-4 py-2 border border-blue-500 w-1/2 lg:w-1/3 mt-2 text-blue-500 hover:border-blue-700 hover:text-blue-700 cursor-pointer">
                                Read More
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <img src="./cardimage1.webp" className="mt-4 lg:mt-12 w-full w-full object-cover rounded-lg" />
                            <p className="text-lg md:text-xl lg:text-2xl font-semibold pt-8 pb-4">AI Accelerator</p>
                            <p>
                                Performance-driven standardized neural compute modules with built-in AI Accelerators that are ready to deploy in any
                                AIoT sectors.
                            </p>
                            <button className="rounded-full px-4 py-2 border border-blue-500 w-1/2 lg:w-1/3  mt-2 text-blue-500 hover:border-blue-700 hover:text-blue-700 cursor-pointer">
                                Read More
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <img src="./cardimage1.webp" className="mt-4 lg:mt-12 w-full w-full object-cover rounded-lg" />
                            <p className="text-lg md:text-xl lg:text-2xl font-semibold pt-8 pb-4">AI Accelerator</p>
                            <p>
                                Performance-driven standardized neural compute modules with built-in AI Accelerators that are ready to deploy in any
                                AIoT sectors.
                            </p>
                            <button className="rounded-full px-4 py-2 border border-blue-500 w-1/2 lg:w-1/3  mt-2 text-blue-500 hover:border-blue-700 hover:text-blue-700 cursor-pointer">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full md:h-screen flex flex-col justify-center w-screen">
                <div className="p-8 md:p-12 lg:p-16">
                    <p className="text-xl md:text-3xl lg:text-4xl font-bold">Burgeoning Edge AI</p>
                    <div className="mt-6 w-full flex justify-center gap-2 lg:gap-8">
                        <button
                            className={`rounded-2xl border border-2 text-sm lg:text-lg px-2 lg:px-4 py-1 lg:py-2 ${
                                index == 0 ? "border-blue-500 text-blue-500" : "border-gray-500 text-gray-500"
                            }`}
                            onClick={() => setindex(0)}
                        >
                            Discriminative
                        </button>
                        <button
                            className={`rounded-2xl border border-2 text-sm lg:text-lg px-2 lg:px-4 py-1 lg:py-2 ${
                                index == 1 ? "border-blue-500 text-blue-500" : "border-gray-500 text-gray-500"
                            }`}
                            onClick={() => setindex(1)}
                        >
                            Discriminative
                        </button>
                        <button
                            className={`rounded-2xl border border-2 text-sm lg:text-lg px-2 lg:px-4 py-1 lg:py-2 ${
                                index == 2 ? "border-blue-500 text-blue-500" : "border-gray-500 text-gray-500"
                            }`}
                            onClick={() => setindex(2)}
                        >
                            Discriminative
                        </button>
                    </div>
                    {index == 0 && <video src="./adas1.mp4" className="h-full mt-4 md:mt-0 px-16" autoPlay muted />}
                    {index == 1 && <video src="./adas2.mp4" className="h-full mt-4 md:mt-0 px-16" autoPlay muted />}
                    {index == 2 && <video src="./adas3.mp4" className="h-full mt-4 md:mt-0 px-16" autoPlay muted />}
                </div>
            </div>
            <div className="h-full md:h-screen flex flex-col justify-center">
                <div className="p-8 md:p-12 lg:p-16">
                <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-8">Solutions</p>
                    <ScrollImages  />
                </div>
            </div>
        </main>
    );
}
