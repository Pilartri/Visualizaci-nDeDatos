"use client";

import React from "react";
import Header from "./Header";
import Image from "next/image";
import { motion } from "framer-motion";

type AthleteProps = {
  name: string;
  sport: string;
  country: string;
  imagePrl: string;
  medals: number[];
  description: string;
  imageSrc: string;
  imageTop: string;
};

const athletes: AthleteProps[] = [
  {
    name: "Simone Biles",
    sport: "Gimnasia Artística",
    imageTop: "/medalla-40.png",
    country: "Estados Unidos",
    medals: [1, 1, 2],
    imagePrl: "/gim.png",
    description: "Biles regresó de su pausa y dominó los Juegos Olímpicos, reafirmando su lugar como una de las mejores gimnastas de todos los tiempos. Ganó oro en la competencia general individual, viga de equilibrio y equipo, además de una plata en suelo. Su retorno después de haber tomado tiempo para priorizar su salud mental es ampliamente celebrado",
    imageSrc: "/simone.png",
  },

  {
    name: "Clarisse Agbegnenou",
    sport: "Judo",
    imageTop: "/clarissemedalla.png",
    country: "Francia",
    imagePrl: "/jud.png",
    medals: [1, 1, 2],
    description: "Clarisse Agbegnenou se consolidó como una de las mejores judocas de la historia al ganar dos medallas de oro, una en judo individual y otra en el evento por equipos. Con cinco títulos mundiales en su haber, Agbegnenou es conocida por su tenacidad y su papel como defensora de la igualdad de género en el deporte",
    imageSrc: "/clarisse.png",
  },
  

  {
    name: "Emma McKeon",
    sport: "Natación",
    imageTop: "/emmamedalla.png",
    country: "Australia",
    imagePrl: "/natacion.png",
    medals: [1, 1, 2],
    description: "McKeon mantuvo su increíble racha en París, consiguiendo medallas tanto en eventos individuales como en relevos. Se destacó especialmente en los 100 metros libres y en el relevo 4x100. Fue ganadora de siete medallas en los Juegos Olímpicos de Tokio 2020, la mayor cantidad de una nadadora en unos mismos Juegos Olímpicos y la mayor cantidad de medallas en cualquier deporte para una mujer en unos mismos Juegos Olímpicos. McKeon se fue de Japón como la atleta olímpica más condecorada en los Juegos Olímpicos de 2020.​",
    imageSrc: "/mckeon.png",
  },
  
  {
    name: "An San",
    sport: "Tiro al blanco",
    imageTop: "/ansanmedalla.png",
    country: "Corea del Sur",
    imagePrl: "/arco.png",
    medals: [1, 1, 2],
    description: "An San continuó su dominio en tiro con arco, destacándose tanto en las competiciones individuales como en las de equipo, reafirmando su estatus como una de las mejores en su disciplina​",
    imageSrc: "/san.png",
  },

  {
    name: "Katie Ledecky",
    sport: "Natación",
    imageTop: "/medallas-44.png",
    country: "Estados Unidos",
    imagePrl: "/natacion.png",
    medals: [1, 1, 2],
    description: "Ledecky continuó su reinado en las largas distancias, ganando oro en los 800 y 1500 metros libres. También consiguió dos platas en relevos, consolidándose como una de las nadadoras más laureadas en la historia olímpica.Ledecky, que sólo tiene 27 años, no ha bajado el ritmo. En junio de este año hizo historia al convertirse en la primera mujer en ganar cuatro títulos en unas mismas pruebas olímpicas de natación en Estados Unidos.​",
    imageSrc: "/ledecky.png",
  },
  
];

export const TopWomen: React.FC = () => (
  <div className="bg-white">
       {/* Header Fijo */}
       
      {/* Hero Section */}
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
   
    <h1 className="font-black text-5xl text-purple-800 text-center mt-16"> TOP MUJERES </h1>
    <h4 className="text-center mb-4"> destacadas en los Juegos Olímpicos 2024</h4>
    <h4 className="text-center text-sm font-bold mb-2"> medallas </h4>
    <Image 
          src="/medallasinicio-43.png" 
          alt="Olympic Women Participation"
          width={200}
          height={200}
          className="z-10 ml-[620px]"
        />
    <section className="mt-8 p-4">
      {athletes.map((athlete, index) => (
      <motion.div
      key={index}
      className="athlete-section my-12 text-center"
      initial={{ opacity: 0, y: 50 }}  // Empieza oculto y desplazado hacia abajo
      whileInView={{ opacity: 1, y: 0 }}  // Aparece cuando está en vista
      exit={{ opacity: 0, y: -50 }}  // Desaparece al desplazarse fuera de la vista
      transition={{ duration: 1.2, ease: "easeOut" }}  // Transición suave
      viewport={{ once: false, margin: "-100px" }}  // Repite la animación
    >
          <Image src={athlete.imageSrc} alt={athlete.name} width={250} height={200} className="rounded-lg mx-auto" />
          <h2 className="text-4xl font-bold mt-4">{athlete.name}</h2>
          <p className="text-xl font-semibold mb-4">{athlete.sport} </p>
         < Image src={athlete.imageTop} alt={athlete.name} width={200} height={200} className="rounded-lg mx-auto" />
          <p className="underline mt-4 text-lg;">{athlete.country}</p>
          <div className="flex justify-left mt-2 space-x-2">
          </div>
          < Image src={athlete.imagePrl} alt={athlete.name} width={100} height={200} className="rounded-lg mx-auto" />
          <p className="mt-4 max-w-lg mx-auto mb-24">{athlete.description}</p>
        </motion.div>
      ))}
    </section>
    <footer className="py-8 bg-gray-100">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} Participación Olímpica. Todos los derechos reservados.
        </div>
      </footer>
  </div>
);
export default TopWomen;