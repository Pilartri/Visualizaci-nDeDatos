"use client";
import React from 'react';
import Image from 'next/image';
import HorizontalTimeline from './HorizontalTimeline';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <HorizontalTimeline />
    </div>
  );
};

export default Home;

