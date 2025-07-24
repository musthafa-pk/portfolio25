"use client";

export default function SketchfabModel() {
  return (
    <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
      <iframe 
        title="3D Developer Character"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/7a61e0169e5c4dc79e64a299d23e4aed/embed?autostart=1&ui_theme=dark" 
      />
    </div>
  );
}