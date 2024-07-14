import React, { useState } from 'react';

const SubscribeSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Subscription successful.');
    } else {
      setMessage(`Subscription failed: ${data.message}`);
    }

    // Clear the input fields
    setName('');
    setEmail('');
  };

  return (
    <div className="flex flex-col gap-2 w-72">
      <p className="md:text-xl 3xl:text-2xl 4xl:text-4xl font-semibold mb-4">Stay Updated</p>
      <a className="text-grey-700 cursor-pointer text-sm md:text-md 3xl:text-lg 4xl:text-2xl">Sign up to our newsletter to stay up to date</a>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <input
          className="px-2 py-2 border border-2 border-black focus:border-blue-900 outline-none w-full"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="px-2 py-2 border border-2 border-black focus:border-blue-900 outline-none w-full"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="py-3 bg-blue-900 text-white px-4">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubscribeSection;
