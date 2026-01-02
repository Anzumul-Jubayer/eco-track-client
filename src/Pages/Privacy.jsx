import React from "react";

const Privacy = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center">
          Privacy Policy
        </h2>

        
        <p className="text-green-800 mb-6 leading-relaxed">
          At EcoTrack, your privacy is very important to us. This policy explains 
          how we collect, use, and protect your personal information when you use 
          our platform.
        </p>

        
        <div className="space-y-4 text-green-800">
          <h3 className="font-semibold text-green-900">1. Information We Collect</h3>
          <p>
            We may collect your name, email, profile information, and activity on 
            the platform to provide a personalized experience and track your sustainability impact.
          </p>

          <h3 className="font-semibold text-green-900">2. How We Use Your Information</h3>
          <p>
            Your data is used to improve our services, communicate with you, and 
            ensure secure and efficient platform usage.
          </p>

          <h3 className="font-semibold text-green-900">3. Data Sharing</h3>
          <p>
            We do not sell or share your personal data with third parties without your consent. 
            Aggregated and anonymized data may be used for statistical purposes.
          </p>

          <h3 className="font-semibold text-green-900">4. Security</h3>
          <p>
            We implement industry-standard measures to protect your data from unauthorized access or disclosure.
          </p>

          <h3 className="font-semibold text-green-900">5. Your Rights</h3>
          <p>
            You can access, update, or delete your personal information by contacting us.
          </p>
        </div>

       
        <p className="mt-6 text-green-700 font-semibold text-center">
          By using EcoTrack, you agree to this Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
