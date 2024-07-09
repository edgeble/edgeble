// app/about/page.tsx
"use client";

import React from 'react';
import Header from "../components/Header";
import TeamMember from "../components/TeamMember";
import Statistic from "../components/Statistic";

const About = () => {
    return (
        <div className="min-h-screen bg-white py-10 overflow-x-hidden">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0 z-0 transform-gpu overflow-hidden blur-3xl">
                    <div
                        className="absolute left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold text-center mb-2 mt-10">About Edgeble AI</h1>
                    <p className="text-lg text-center mb-10">Welcome to Edgeble AI</p>
                    
                    <div className="text-center mb-10">
                        <p className="text-lg">Edgeble AI is an Artificial Intelligence company with a focus on deploying Neural Acceleration principles at the Edge. Our unified architecture enables companies to develop Edge AI-enabled solutions once and deploy them everywhere.</p>
                    </div>
                    
                    <div className="flex justify-center mb-16">
                        <Statistic value={15} label="YEARS Experience" description="Industrial Embedded" />
                        <Statistic value={13} label="YEARS Contributions" description="Open Source" />
                        <Statistic value={20} label="International Conferences" description="Speak Exhibitor" />
                    </div>

                    <div className="text-center mb-10">
                        <p className="text-lg">We are a group of technology and business leaders whose products and services are already impacting many people and companies across the globe. Led by Jagan, who is passionate about incorporating open-source methods into AI technologies to move the world of technology forward.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        <TeamMember name="Jagan Teki" role="Founder" imagePath="./a1.png" />
                        <TeamMember name="Michael Nazzareno Trimarchi" role="Adviser" imagePath="./a2.png" />
                        <TeamMember name="Tom Cubie" role="Hardware" imagePath="./a3.png" />
                        <TeamMember name="Alberto Bianchi" role="Hardware" imagePath="./a4.png" />
                        <TeamMember name="Srinivas Patnaik" role="Adviser" imagePath="./a5.png" />
                    </div>

                    <div className="mb-16">
                        <div className="bg-blue-100 p-8 rounded-lg shadow-md mb-8">
                            <h2 className="text-xl font-semibold mb-4">Mission</h2>
                            <p>Our mission is to make AI Acceleration in One Platform in order to deliver high-performance and fast responsive Edge AI.</p>
                        </div>
                        <div className="bg-blue-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Vision</h2>
                            <p>Our vision is to create real-time false-free Edge Computing technologies with the help of our holistic AI Acceleration Platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
