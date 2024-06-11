import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-blue-50 min-h-screen flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold mb-2">Contact</h1>
            <p className="text-lg mb-10">GET IN TOUCH</p>
            
            <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
                <div className="flex justify-between mb-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Edgeble AI Technologies Private Limited</h2>
                        <p>T-Hub, 7th floor, DST - CoE AI/ML(MATH), 1/C,83/1, Raidurgam Panmaktha, Hyderabad Knowledge City, Serilingamapally, Hyderabad, Telangana 500081, India</p>
                        <p className="mt-4"><strong>Phone</strong><br />+91 91000 90959</p>
                        <p className="mt-4"><strong>Email</strong><br /><a href="mailto:info@edgeble.ai" className="text-blue-600">info@edgeble.ai</a></p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">We love to hear from you</h2>
                        <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div className="sm:col-span-1">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Write your name"
                                />
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="name@youremail.com"
                                />
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number (Optional)
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Write Valid Number"
                                />
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Write Subject"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Write your message"
                                ></textarea>
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
