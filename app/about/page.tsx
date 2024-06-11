import React from 'react';

const About = () => {
    return (
        <div className="bg-blue-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-2">About Edgeble AI</h1>
                <p className="text-lg text-center mb-10">Welcome to Edgeble AI</p>
                
                <div className="text-center mb-10">
                    <p className="text-lg">Edgeble AI is an Artificial Intelligence company with a focus on deploying Neural Acceleration principles at the Edge. Our unified architecture enables companies to develop Edge AI-enabled solutions once and deploy them everywhere.</p>
                </div>
                
                <div className="flex justify-center mb-16">
                    <div className="text-center mx-4">
                        <div className="text-5xl font-bold text-indigo-600 mb-2">15</div>
                        <div className="text-lg">YEARS Experience</div>
                        <div className="text-gray-700">Industrial Embedded</div>
                    </div>
                    <div className="text-center mx-4">
                        <div className="text-5xl font-bold text-indigo-600 mb-2">13</div>
                        <div className="text-lg">YEARS Contributions</div>
                        <div className="text-gray-700">Open Source</div>
                    </div>
                    <div className="text-center mx-4">
                        <div className="text-5xl font-bold text-indigo-600 mb-2">20</div>
                        <div className="text-lg">International Conferences</div>
                        <div className="text-gray-700">Speak Exhibitor</div>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <p className="text-lg">We are a group of technology and business leaders whose products and services are already impacting many people and companies across the globe. Led by Jagan, who is passionate about incorporating open-source methods into AI technologies to move the world of technology forward.</p>
                </div>
                
                <div className="flex justify-center mb-16">
                    <div className="text-center mx-4">
                        <img src="/path/to/jagan-teki.jpg" alt="Jagan Teki" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <div className="text-lg font-semibold">Jagan Teki</div>
                        <div className="text-gray-700">Founder</div>
                    </div>
                    <div className="text-center mx-4">
                        <img src="/path/to/michael-trimarchi.jpg" alt="Michael Nazzareno Trimarchi" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <div className="text-lg font-semibold">Michael Nazzareno Trimarchi</div>
                        <div className="text-gray-700">Adviser</div>
                    </div>
                    <div className="text-center mx-4">
                        <img src="/path/to/tom-cubie.jpg" alt="Tom Cubie" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <div className="text-lg font-semibold">Tom Cubie</div>
                        <div className="text-gray-700">Hardware</div>
                    </div>
                    <div className="text-center mx-4">
                        <img src="/path/to/alberto-bianchi.jpg" alt="Alberto Bianchi" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <div className="text-lg font-semibold">Alberto Bianchi</div>
                        <div className="text-gray-700">Hardware</div>
                    </div>
                    <div className="text-center mx-4">
                        <img src="/path/to/srinivas-patnaik.jpg" alt="Srinivas Patnaik" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <div className="text-lg font-semibold">Srinivas Patnaik</div>
                        <div className="text-gray-700">Adviser</div>
                    </div>
                </div>

                <div className="mb-16">
                    <img src="/path/to/exhibition.jpg" alt="Exhibition" className="w-full h-auto"/>
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
    );
};

export default About;

