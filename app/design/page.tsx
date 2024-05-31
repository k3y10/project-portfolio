'use client'

// pages/design.tsx

import React, { useState, useEffect } from 'react';

const Design: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  useEffect(() => {
    console.log('Iframe loaded:', iframeLoaded);
  }, [iframeLoaded]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-semibold tracking-tighter mb-4">Design Concepts</h1>
      <p className="mb-12 text-center">
        Explore Figma prototypes showcasing various design concepts and user experiences.
      </p>
      <div className="mb-12">
        <h2 className="text-xl font-medium tracking-tight mb-2 text-center">iDEFi.AI</h2>
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAwTQfzR6M5LHnOrA5P3YgH%2F1x2y3z4a5b6c7d8e%3Fpage-id%3D0%253A1%26node-id%3D1-50%26viewport%3D641%252C439%252C0.23%26t%3DEKGuiQx6cT9JY5TG-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A50%26show-proto-sidebar%3D1"
          title="iDEFi.AI"
          width="100%"
          height="600"
          style={{ border: 'none' }}
          allowFullScreen
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-medium tracking-tight mb-2 text-center">GYM2GYM</h2>
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fonx3osgyKw2joWx7mPFsNd%2FGym2Gym-Clickable-Prototype%3Fpage-id%3D0%253A1%26node-id%3D4-4%26viewport%3D91%252C374%252C0.02%26t%3DwPF5uUHcRzFf6qK7-1%26scaling%3Dscale-down%26starting-point-node-id%3D4%253A4"
          width="100%"
          height="600"
          style={{ border: 'none' }}
          allowFullScreen
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-medium tracking-tight mb-2 text-center">LIFEDEFIED</h2>
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCGlxMBp5quHJLLw5aVIZNA%2FLifeDeFied---Mobile-Mockups%3Fpage-id%3D0%253A1%26node-id%3D3-22%26viewport%3D261%252C352%252C0.02%26t%3DVt9hhHYt1K2IjdwB-1%26scaling%3Dscale-down%26starting-point-node-id%3D3%253A22%26show-proto-sidebar%3D1"
          title="LifeDeFied"
          width="100%"
          height="600"
          style={{ border: 'none' }}
          allowFullScreen
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-medium tracking-tight mb-2 text-center">SAN DIEGO - FAMILY CARE</h2>
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk43e66JsIwbLjFXRfJcTcv%2FNonprofit-Mockups%3Fpage-id%3D0%253A1%26node-id%3D1-28%26viewport%3D58%252C396%252C0.04%26t%3DPCvfqP4OqB1d5f39-1%26scaling%3Dcontain%26starting-point-node-id%3D1%253A28"
          title="Dashboard Design Prototype"
          width="100%"
          height="600"
          style={{ border: 'none' }}
          allowFullScreen
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
      {/* Add more prototypes as needed */}
    </div>
  );
};

export default Design;
