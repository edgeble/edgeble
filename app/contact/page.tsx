// app/contact/page.tsx
"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Header from "../components/Header";
import Location from '../components/Location';

type FormValues = {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        
        console.log({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_SECURE,
            user: process.env.EMAIL_USER,
            // Don't log passwords in real application environments
        });

        try {
            const response = await fetch('/contact/subscribecontact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                alert('Message sent successfully');
                reset();
            } else {
                alert(`Error sending message: ${result.error}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while sending the message. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col">
            <Header />
            <div className="w-full h-auto flex flex-col justify-center items-center py-6 md:py-10 lg:py-14 2xl:py-20 3xl:py-28 px-8 md:px-18 lg:px-28 2xl:px-38 3xl:px-[300px] 4xl:px-[700px] 5xl:px-[900px] relative isolate">
            <h1 className="text-4xl font-bold mb-2 mt-10 text-center">Contact</h1>
                <p className="text-lg mb-10">GET IN TOUCH</p>

                <div className="bg-white shadow-md rounded-lg p-8 w-full">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div className="sm:col-span-1">
                            <h2 className="text-xl font-semibold mb-4">Edgeble AI Technologies Private Limited</h2>
                            <p>T-Hub, 1/C,83/1, Raidurgam Panmaktha</p>
                            <p>Hyderabad, Telangana 500081, India</p>
                            <p className="mt-4"><strong>Phone</strong><br />+91 91000 90959</p>
                            <p className="mt-4"><strong>Email</strong><br /><a href="mailto:info@edgeble.ai" className="text-blue-900">info@edgeble.ai</a></p>
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
                                        className="w-full py-2 px-4 bg-custom-gradient text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Location/>
        </div>
    );
};

export default ContactUs;
