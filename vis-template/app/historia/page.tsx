import React from 'react';
import dynamic from 'next/dynamic';
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

