"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AthleteProps } from "./athlete";

export default function AthleteCard({ 
  name, 
  sport, 
  imageCount,  
  imagePrl, 
  description, 
  imageSrc, 
  imageTop 
}: AthleteProps) {
  return (
    <motion.div
      className="athlete-section my-12 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, margin: "-100px" }}
    >
      
      <Image 
        src={imageSrc} 
        alt={name} 
        width={250} 
        height={200} 
        className="rounded-lg mx-auto" 
      />
      <h2 className="text-4xl font-bold mt-4">{name}</h2>
      <p className="text-xl font-semibold">{sport}</p>
      <Image 
        src={imageCount} 
        alt={name} 
        width={50} 
        height={200} 
        className="rounded-lg mx-auto mb-2" 
      />
      <Image 
        src={imageTop} 
        alt={name} 
        width={200} 
        height={200} 
        className="rounded-lg mx-auto" 
      />
      <Image 
        src={imagePrl} 
        alt={name} 
        width={100} 
        height={200} 
        className="rounded-lg mx-auto mt-2" 
      />
      <p className="mt-4 max-w-lg mx-auto mb-24">{description}</p>
    </motion.div>
  );
}