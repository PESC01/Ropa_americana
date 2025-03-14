import React from 'react';

interface GoogleMapProps {
  center: { lat: number; lng: number };
  zoom: number;
}

export function GoogleMap({ center, zoom }: GoogleMapProps) {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${center.lng-0.01}%2C${center.lat-0.01}%2C${center.lng+0.01}%2C${center.lat+0.01}&layer=mapnik&marker=${center.lat}%2C${center.lng}`;

  return (
    <iframe
      src={mapUrl}
      className="h-96 w-full rounded-lg shadow-lg border-0"
      title="Ubicación de la tienda"
      loading="lazy"
    />
  );
}