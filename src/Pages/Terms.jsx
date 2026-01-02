import React from "react";

const Terms = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center">
          Terms of Service
        </h2>

        
        <p className="text-green-800 mb-6 leading-relaxed">
          Welcome to EcoTrack! By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions.
        </p>

        
        <div className="space-y-4 text-green-800">
          <h3 className="font-semibold text-green-900">1. Acceptance of Terms</h3>
          <p>
            By using EcoTrack, you acknowledge that you have read, understood, and agree to these Terms of Service.
          </p>

          <h3 className="font-semibold text-green-900">2. User Accounts</h3>
          <p>
            Users must provide accurate information when registering. You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h3 className="font-semibold text-green-900">3. Use of Platform</h3>
          <p>
            You agree to use EcoTrack for lawful purposes only and not engage in any activity that could harm the platform or other users.
          </p>

          <h3 className="font-semibold text-green-900">4. Content Ownership</h3>
          <p>
            Users retain ownership of the content they submit, but EcoTrack may display, share, or use it to provide services. Do not post illegal or offensive content.
          </p>

          <h3 className="font-semibold text-green-900">5. Limitation of Liability</h3>
          <p>
            EcoTrack is not responsible for any damages or losses resulting from the use of the platform. Use the platform at your own risk.
          </p>

          <h3 className="font-semibold text-green-900">6. Modifications</h3>
          <p>
            EcoTrack reserves the right to modify these terms at any time. Users will be notified of significant changes.
          </p>
        </div>

      
        <p className="mt-6 text-green-700 font-semibold text-center">
          By continuing to use EcoTrack, you agree to these Terms of Service.
        </p>
      </div>
    </section>
  );
};

export default Terms;
