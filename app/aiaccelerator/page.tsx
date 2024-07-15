// app/contact/page.tsx
"use client";

import React from 'react';
import Header from "../components/Header";

const ProductPage = () => {
    return (
        
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col items-center py-6 md:py-10 lg:py-14 2xl:py-20 3xl:py-28 px-8 md:px-18 lg:px-28 2xl:px-38 3xl:px-48">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8 pt-16">AI Accelerator Module</h1>
                <div className="space-x-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <img src="./ai.png" alt="NCM6A" className="w-full mb-4"/>
                        <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold mb-2">Edge AI Compute Module 6A (EAI-CM6A)</h2>
                        <p className="text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl pb-2 lg:pb-3 3xl:pb-4 4xl:pb-5 text-gray-600 mb-4">
                            Ultra vision Neurally fast 6TOPS Neural Compute Accelerator for Consumer grade AI applications.
                        </p>
                        <ul className="text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl list-disc list-inside mb-4">
                            <li>Speed: 6TOPS</li>
                            <li>Consumer grade: 0°C to +80°C</li>
                            <li>Vision: 8K Code, 16 Cameras</li>
                            <li>Network: Wifi6/BT</li>
                            <li>Software: OpenAIA v1.0</li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <img src="./ai.png" alt="NCM6B" className="w-full mb-4"/>
                        <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold mb-2">Edge AI Compute Module 6B (EAI-CM6B)</h2>
                        <p className="text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl pb-2 lg:pb-3 3xl:pb-4 4xl:pb-5 text-gray-600 mb-4">
                            Ultra vision Neurally fast 6TOPS Neural Compute Accelerator for Industrial grade AI applications.
                        </p>
                        <ul className="text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl list-disc list-inside mb-4">
                            <li>Speed: 6TOPS</li>
                            <li>Industrial grade: -40°C to +85°C</li>
                            <li>Vision: 8K Code, 16 Cameras</li>
                            <li>Network: Wifi6/BT</li>
                            <li>Software: OpenAIA v1.0</li>
                        </ul>
                        
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <img src="./ai.png" alt="NCM6C" className="w-full mb-4"/>
                        <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold mb-2">Edge AI Compute Module 6C (EAI-CM6C)</h2>
                        <p className="text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl pb-2 lg:pb-3 3xl:pb-4 4xl:pb-5text-gray-600 mb-4">
                            Ultra vision Neurally fast 6TOPS Neural Compute Accelerator for Automotive grade AI applications.
                        </p>
                        <ul className="text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl list-disc list-inside mb-4">
                            <li>Speed: 6TOPS</li>
                            <li>Industrial grade: -40°C to +85°C</li>
                            <li>Vision: 8K Code, 16 Cameras</li>
                            <li>Network: Wifi6/BT</li>
                            <li>Software: OpenAIA v1.0</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
