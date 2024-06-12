// components/TeamMember.tsx
import React from 'react';

type TeamMemberProps = {
    name: string;
    role: string;
    imagePath: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imagePath }) => (
    <div className="flex flex-col items-center">
        <img src={imagePath} alt={name} className="w-32 h-32 rounded-full mb-4" />
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-gray-700">{role}</div>
    </div>
);

export default TeamMember;
