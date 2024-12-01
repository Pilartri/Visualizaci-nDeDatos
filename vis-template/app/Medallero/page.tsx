"use client";

import Image from "next/image";
import Header from "@/app/medallero/Header";
import AthleteCard from "@/app/medallero/AthleteCard";
import StickyImage from './Sticky';  
import { AthleteProps } from "@/app/medallero/athlete";

const athletes: AthleteProps[] = [
  {
    name: "Simone Biles",
    sport: "Gimnasia Artística",
    imageCount:"/eeuu.png",
    imageTop: "/medalla-40.png",
    medals: [1, 1, 2],
    imagePrl: "/gim.png",
    description: "Biles regresó de su pausa y dominó los Juegos Olímpicos, reafirmando su lugar como una de las mejores gimnastas de todos los tiempos. Ganó oro en la competencia general individual, viga de equilibrio y equipo, además de una plata en suelo. Su retorno después de haber tomado tiempo para priorizar su salud mental es ampliamente celebrado",
    imageSrc: "/simone.png",
  },

  {
    name: "Clarisse Agbegnenou",
    sport: "Judo",
    imageTop: "/clarissemedalla.png",
    imageCount:"/francia.png",
    imagePrl: "/jud.png",
    medals: [1, 1, 2],
    description: "Clarisse Agbegnenou se consolidó como una de las mejores judocas de la historia al ganar dos medallas de oro, una en judo individual y otra en el evento por equipos. Con cinco títulos mundiales en su haber, Agbegnenou es conocida por su tenacidad y su papel como defensora de la igualdad de género en el deporte",
    imageSrc: "/clarisse.png",
  },
  

  {
    name: "Emma McKeon",
    sport: "Natación",
    imageTop: "/emmamedalla.png",
    imageCount:"/australia.png",
    imagePrl: "/natacion.png",
    medals: [1, 1, 2],
    description: "McKeon mantuvo su increíble racha en París, consiguiendo medallas tanto en eventos individuales como en relevos. Se destacó especialmente en los 100 metros libres y en el relevo 4x100. Fue ganadora de siete medallas en los Juegos Olímpicos de Tokio 2020, la mayor cantidad de una nadadora en unos mismos Juegos Olímpicos y la mayor cantidad de medallas en cualquier deporte para una mujer en unos mismos Juegos Olímpicos. McKeon se fue de Japón como la atleta olímpica más condecorada en los Juegos Olímpicos de 2020.​",
    imageSrc: "/mckeon.png",
  },
  
  {
    name: "An San",
    sport: "Tiro al blanco",
    imageTop: "/ansanmedalla.png",
    imageCount:"/corea.png",
    imagePrl: "/arco.png",
    medals: [1, 1, 2],
    description: "An San continuó su dominio en tiro con arco, destacándose tanto en las competiciones individuales como en las de equipo, reafirmando su estatus como una de las mejores en su disciplina​",
    imageSrc: "/san.png",
  },

  {
    name: "Katie Ledecky",
    sport: "Natación",
    imageTop: "/medallas-44.png",
    imageCount:"/eeuu.png",
    imagePrl: "/natacion.png",
    medals: [1, 1, 2],
    description: "Ledecky continuó su reinado en las largas distancias, ganando oro en los 800 y 1500 metros libres. También consiguió dos platas en relevos, consolidándose como una de las nadadoras más laureadas en la historia olímpica.Ledecky, que sólo tiene 27 años, no ha bajado el ritmo. En junio de este año hizo historia al convertirse en la primera mujer en ganar cuatro títulos en unas mismas pruebas olímpicas de natación en Estados Unidos.​",
    imageSrc: "/ledecky.png",
  },
  
];

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      
      <section>
        <Image
          src="/medalleros.png" 
          alt="Olympic Women Participation"
          width={1600}
          height={400}
          layout="responsive" 
          quality={100} 
          className="z-10 mt-24"
        />
      </section>
   
      <h1 className="font-black text-5xl text-purple-800 text-center mt-16">
        TOP MUJERES
      </h1>
      <h4 className="text-center mb-4">
        destacadas en los Juegos Olímpicos 2024
      </h4>
      <h4 className="text-center text-sm font-bold mb-2">
        medallas
      </h4>
      <Image 
        src="/medallasinicio-43.png" 
        alt="Olympic Women Participation"
        width={200}
        height={200}
        className="z-10 ml-[620px]"
      />
      <StickyImage src="/abajo.png" alt="flecha_abajo"/>
      
      <section className="mt-8 p-4">
        {athletes.map((athlete, index) => (
          <AthleteCard key={index} {...athlete} />
        ))}
      </section>
      
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} Participación Olímpica. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}