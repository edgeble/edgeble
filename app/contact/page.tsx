// app/contact/page.tsx
"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Header from "../components/Header";

type FormValues = {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data);
        // Handle form submission, e.g., send data to an API
    };

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-center py-10">
                <h1 className="text-4xl font-bold mb-2 mt-10">Contact</h1>
                <p className="text-lg mb-10">GET IN TOUCH</p>

                <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div className="sm:col-span-1">
                            <h2 className="text-xl font-semibold mb-4">Edgeble AI Technologies Private Limited</h2>
                            <p>T-Hub, 7th floor, DST - CoE AI/ML(MATH), 1/C,83/1, Raidurgam Panmaktha, Hyderabad Knowledge City, Serilingamapally, Hyderabad, Telangana 500081, India</p>
                            <p className="mt-4"><strong>Phone</strong><br />+91 91000 90959</p>
                            <p className="mt-4"><strong>Email</strong><br /><a href="mailto:info@edgeble.ai" className="text-blue-600">info@edgeble.ai</a></p>
                        </div>
                        <div className="sm:col-span-1">
                            <h2 className="text-xl font-semibold mb-4">We love to hear from you</h2>
                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register('name', { required: 'Name is required' })}
                                        id="name"
                                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                        placeholder="Write your name"
                                    />
                                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        {...register('email', { 
                                            required: 'Email is required',
                                            pattern: { 
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: 'Enter a valid email address'
                                            }
                                        })}
                                        id="email"
                                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                        placeholder="name@youremail.com"
                                    />
                                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('phone')}
                                        id="phone"
                                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                        placeholder="Write Valid Number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        {...register('subject', { required: 'Subject is required' })}
                                        id="subject"
                                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                        placeholder="Write Subject"
                                    />
                                    {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        {...register('message', { required: 'Message is required' })}
                                        id="message"
                                        rows={4}
                                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                                        placeholder="Write your message"
                                    ></textarea>
                                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
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
        </div>
    );
};

export default ContactUs;
