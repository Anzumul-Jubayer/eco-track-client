import React from "react";

const Accessibility = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center">
          Accessibility
        </h2>

        
        <p className="text-green-800 mb-6 leading-relaxed text-center">
          At EcoTrack, we are committed to making our platform accessible to everyone, 
          ensuring that all users can navigate, interact, and benefit from our content 
          regardless of abilities.
        </p>

        
        <ul className="list-disc list-inside space-y-3 text-green-800">
          <li>Use of semantic HTML elements for meaningful content structure.</li>
          <li>Alt attributes for all images and media content.</li>
          <li>Keyboard navigable UI for all interactive elements.</li>
          <li>Proper color contrast between text and background for readability.</li>
          <li>Focus states visible on links, buttons, and form inputs.</li>
          <li>ARIA attributes used where appropriate for assistive technologies.</li>
        </ul>

        
        <p className="mt-6 text-green-700 font-semibold text-center">
          We continuously strive to improve accessibility and welcome feedback!
        </p>
      </div>
    </section>
  );
};

export default Accessibility;
