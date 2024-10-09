import Image from 'next/image';

interface AthleteProps {
  name: string;
  country: string;
  sport: string;
  medals: {
    gold: number;
    silver: number;
    bronze: number;
  };
  description: string;
  imageUrl: string;
}

const AthleteCard: React.FC<AthleteProps> = ({ name, country, sport, medals, description, imageUrl }) => {
  return (
    <div className="p-6">
      <Image src={imageUrl} alt={name} width={300} height={300} className="ml-[160px] mt-[60px]" />
      <h2 className="text-3xl font-bold text-orange-500 mb-2 mt-[-200px] ml-[640px]">{name}</h2>
      <p className="text-gray-600 italic mb-2 ml-[640px]">{sport}</p>
      <p className="text-gray-400 mb-4 ml-[640px]">{country}</p>
      <div className="flex space-x-2 mb-4 ml-[640px]">
        <div>🥇 {medals.gold}</div>
        <div>🥈 {medals.silver}</div>
        <div>🥉 {medals.bronze}</div>
      </div>
      <p className="text-gray-700 ml-[640px] mb-12">{description}</p>
    </div>
  );
};

export default AthleteCard;