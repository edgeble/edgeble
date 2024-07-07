// app/contact/page.tsx
"use client";

import React from 'react';
import Header from "../components/Header";

const ProductPage = () => {
    return (
        
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col items-center py-10 px-4 md:px-8 lg:px-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8 pt-16">AI Accelerator Module</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <img src="./ai.png" alt="NCM6A" className="w-full mb-4"/>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Edge AI Compute Module 6A (EAI-CM6A)</h2>
                        <p className="text-gray-600 mb-4">
                            Ultra vision Neurally fast 6TOPS Neural Compute Accelerator for Consumer grade AI applications.
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Speed: 6TOPS</li>
                            <li>Consumer grade: 0°C to +80°C</li>
                            <li>Vision: 8K Code, 16 Cameras</li>
                            <li>Network: Wifi6/BT</li>
                            <li>Software: OpenAIA v1.0</li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <img src="./ai.png" alt="NCM6B" className="w-full mb-4"/>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Edge AI Compute Module 6B (EAI-CM6B)</h2>
                        <p className="text-gray-600 mb-4">
                            Ultra vision Neurally fast 6TOPS Neural Compute Accelerator for Industrial grade AI applications.
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Speed: 6TOPS</li>
                            <li>Industrial grade: -40°C to +85°C</li>
                            <li>Vision: 8K Code, 16 Cameras</li>
                            <li>Network: Wifi6/BT</li>
                            <li>Software: OpenAIA v1.0</li>
                        </ul>
                        
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <img src="./ai.png" alt="NCM6C" className="w-full mb-4"/>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Edge AI Compute Module 6C (EAI-CM6C)</h2>
                        <p className="text-gray-600 mb-4">
                            Ultra vision Neurally fast 6TOPS Neural Compute Accelerator for Automotive grade AI applications.
                        </p>
                        <ul className="list-disc list-inside mb-4">
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
