// components/Statistic.tsx
import React from 'react';

type StatisticProps = {
    value: number;
    label: string;
    description: string;
};

const Statistic: React.FC<StatisticProps> = ({ value, label, description }) => (
    <div className="text-center mx-4">
        <div className="text-5xl font-bold text-indigo-600 mb-2">{value}</div>
        <div className="text-lg">{label}</div>
        <div className="text-gray-700">{description}</div>
    </div>
);

export default Statistic;
