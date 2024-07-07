// location.tsx
import React from 'react';

const Location = () => {
    return (
        <div className="contact-section my-12">
            <h2 className="text-2xl font-bold text-center mb-4">How to Find Us</h2>
            <p className="text-center mb-4">Visit us at our office for a personal consultation.</p>
            <div className="map-container">
                <iframe
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5387246675623!2d78.3762381736905!3d17.43391080146618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bd18410b0f%3A0x8d7e3fea891858ce!2sT-Hub!5e0!3m2!1sen!2sin!4v1720392813693!5m2!1sen!2sin"
                    className="w-full h-96" // Adjust height as needed
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;
