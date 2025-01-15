import React from "react";
import githubIcon from '../../assets/aboutus/Github.png'; // Add your GitHub icon
import telegramIcon from '../../assets/aboutus/Telegram.png'; // Add your Telegram icon
import Raksa from '../../assets/aboutus/Raksa.png'; // Add Raksa's image
import Santra from '../../assets/aboutus/Santra.png';

const teamMembers = [
  {
    name: "Nhe Sokraksa",
    description:
      "Hello! I'm Raksa. I'm a third-year student at the Royal University of Phnom Penh, majoring in Information Technology Engineering. I work as a UX/UI and Frontend Developer.",
    github: "https://github.com/Sokraksa01",
    telegram: "https://t.me/nhesokraksa",
    image: Raksa,
  },
  {
    name: "SannTra",
    description:
      "Hello! I'm Raksa. I'm a third-year student at the Royal University of Phnom Penh, majoring in Information Technology Engineering. I work as a UX/UI and Frontend Developer.",
    github: "https://github.com/sann-flwr",
    telegram: "https://t.me/san2shine",
    image: Santra,
  },
];

const TeamMemberCard = ({ member }) => (
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mx-4">
    {/* Member Image */}
    <div className="w-32 h-32 flex-shrink-0 mb-4">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover rounded-full shadow-md"
      />
    </div>
    {/* Member Details */}
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
      <p className="text-sm text-gray-700 mb-4">
        {member.description}
      </p>
      <div className="flex justify-center space-x-4">
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </a>
        )}
        {member.telegram && (
          <a href={member.telegram} target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="bg-amber-50 py-10 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-red-800 mb-8">
        Team Member
      </h1>
      <div className="flex justify-center max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;