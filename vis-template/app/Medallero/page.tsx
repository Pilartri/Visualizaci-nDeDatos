import Image from "next/image";

import AthleteCard from './AthleteCard';

export default function Home() {
  const athletes = [
    {
      name: 'Simone Biles',
      country: 'Estados Unidos',
      sport: 'Gimnasia Artística',
      medals: { gold: 3, silver: 1, bronze: 0 },
      description: 'Biles regresó de su pausa y dominó los Juegos Olímpicos...',
      imageUrl: '/natacion.svg',
    },
    {
      name: 'Clarisse Agbegnenou',
      country: 'Francia',
      sport: 'Judo',
      medals: { gold: 2, silver: 0, bronze: 0 },
      description: 'Clarisse Agbegnenou se consolidó como una de las mejores judocas...',
      imageUrl: '/path-to-clarisse-image.png',
    },
    {
      name: 'Emma McKeon',
      country: 'Australia',
      sport: 'Natación',
      medals: { gold: 2, silver: 1, bronze: 1 },
      description: 'McKeon mantuvo su increíble racha en París...',
      imageUrl: '/path-to-emma-image.png',
    },
    {
      name: 'An San',
      country: 'Corea del Sur',
      sport: 'Tiro al blanco',
      medals: { gold: 2, silver: 1, bronze: 0 },
      description: 'An San continuó su dominio en tiro con arco...',
      imageUrl: '/path-to-an-san-image.png',
    },
    {
      name: 'Katie Ledecky',
      country: 'Estados Unidos',
      sport: 'Natación',
      medals: { gold: 2, silver: 2, bronze: 0 },
      description: 'Ledecky continuó su reinado en las largas distancias...',
      imageUrl: '/path-to-katie-ledecky-image.png',
    },
  ];

  return (
    <div className="bg-gray-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center p-4">
        <Image className='ml-[-50px]'
          src="/logo_par.svg" 
          alt="Olympic Women Participation"
          width={45}
          height={45}
        />
          <ul className="flex space-x-8 ml-16">
            <li>
              <a href="app/page.tsx" className="text-[#5F1BBF]">Mujeres</a>
            </li>
            <li>
              <a href="historia/page.tsx" className="text-[#5F1BBF]">Historia</a>
            </li>
            <li>
              <a href="evolución/page.tsx" className="bg-violet-100 hover:bg-violet-300 text-[#5F1BBF] rounded px-2 py-1">Medallero</a>
            </li>
          </ul>
        </div>
        <section>
        <Image
          src="/headerJJOO.png" 
          alt="Olympic Women Participation"
          width={1600}
          height={400}
          layout="responsive" 
          quality={100} 
        />
        </section>
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-[#5F1BBF]">
          Top 5 mujeres 
        </h1>
        <p className="text-lg font-regular text-center mb-16 text-gray-600"> 
          destacadas en Francia 2024
        </p>
        <div className="grid grid-cols-1 gap-6">
          {athletes.map((athlete) => (
            <AthleteCard key={athlete.name} {...athlete} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
