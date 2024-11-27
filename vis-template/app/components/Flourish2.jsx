'use client'
import { useEffect } from 'react';

const FlourishEmbed2 = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return; // Previene la ejecución en SSR

    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flourish-embed flourish-scatter" data-src="visualisation/19245290">
        <noscript><img src="https://public.flourish.studio/visualisation/19245290/thumbnail" width="100%" alt="scatter visualization" /></noscript></div>
  );
};

export default FlourishEmbed2;
