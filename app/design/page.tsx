'use client'

import React, { useState, useEffect } from 'react';

const Design: React.FC = () => {
  const iframes = [
    {
      title: 'iDEFi.AI',
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAwTQfzR6M5LHnOrA5P3YgH%2F1x2y3z4a5b6c7d8e%3Fpage-id%3D0%253A1%26node-id%3D1-33%26viewport%3D360%252C497%252C0.16%26t%3DRYrB83EfJt98HjjB-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A50%26show-proto-sidebar%3D1',
    },
    {
      title: 'GYM2GYM',
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fonx3osgyKw2joWx7mPFsNd%2FGym2Gym-Clickable-Prototype%3Fpage-id%3D0%253A1%26node-id%3D4-4%26viewport%3D91%252C374%252C0.02%26t%3DwPF5uUHcRzFf6qK7-1%26scaling%3Dscale-down%26starting-point-node-id%3D4%253A4',
    },
    {
      title: 'LIFEDEFIED',
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCGlxMBp5quHJLLw5aVIZNA%2FLifeDeFied---Mobile-Mockups%3Fpage-id%3D0%253A1%26node-id%3D3-22%26viewport%3D261%252C352%252C0.02%26t%3DVt9hhHYt1K2IjdwB-1%26scaling%3Dscale-down%26starting-point-node-id%3D3%253A22%26show-proto-sidebar%3D1',
    },
    {
      title: 'SAN DIEGO - FAMILY CARE',
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk43e66JsIwbLjFXRfJcTcv%2FNonprofit-Mockups%3Fpage-id%3D0%253A1%26node-id%3D1-28%26viewport%3D58%252C396%252C0.04%26t%3DPCvfqP4OqB1d5f39-1%26scaling%3Dcontain%26starting-point-node-id%3D1%253A28',
    },
  ];

  const [iframesLoaded, setIframesLoaded] = useState(false);

  useEffect(() => {
    // Function to check if all iframes have loaded
    const checkIframesLoaded = () => {
      const iframes = Array.from(document.querySelectorAll('iframe'));
      const allLoaded = iframes.every(iframe => iframe.contentWindow?.document.readyState === 'complete');
      if (allLoaded) {
        setIframesLoaded(true);
      }
    };

    // Add event listeners for iframe load events
    const iframes = Array.from(document.querySelectorAll('iframe'));
    iframes.forEach(iframe => {
      iframe.addEventListener('load', checkIframesLoaded);
    });

    // Remove event listeners when component unmounts
    return () => {
      iframes.forEach(iframe => {
        iframe.removeEventListener('load', checkIframesLoaded);
      });
    };
  }, []);

  return (
    <div className="container items-center text-center mx-auto p-4">
      <h1 className="text-2xl font-semibold tracking-tighter mb-4">Design Concepts</h1>
      <p className="mb-4">
        Explore Figma prototypes showcasing various design concepts and user experiences.
      </p>
      {iframes.map((iframe, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-medium tracking-tight mb-2">{iframe.title}</h2>
          {iframesLoaded ? (
            // Render iframe when all iframes have loaded
            <iframe
              src={iframe.src}
              title={iframe.title}
              width="100%"
              height="600"
              style={{ border: 'none' }}
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          ) : (
            // Render loading indicator while iframes are loading
            <p>Loading...</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Design;
