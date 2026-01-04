import React from "react";

const PrivacyPolicy = () => {
  const Section = ({ title, children }) => (
    <div className="mb-5">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
  return (
    <div>
      <div className="w-full min-h-screen bg-secondary px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

          <Section title="Information We Collect">
            We may collect basic personal information such as your name, email
            address, phone number, and location when you register as a
            volunteer, contact us, or participate in our activities.
          </Section>

          <Section title="How We Use Your Information">
            <ul className="list-disc list-inside space-y-1">
              <li>Communicate with you about events and activities</li>
              <li>Manage volunteer participation</li>
              <li>Improve our project and community outreach</li>
              <li>Respond to your questions or requests</li>
            </ul>
          </Section>

          <Section title="Information Sharing">
            We do not sell, rent, or share your personal information with third
            parties except when required by law or when necessary to operate the
            project.
          </Section>

          <Section title="Data Protection">
            We take reasonable steps to protect your personal information from
            unauthorized access, loss, or misuse.
          </Section>

          <Section title="Your Rights">
            You may request to view, update, or delete your personal information
            at any time by contacting us.
          </Section>

          <Section title="Policy Updates">
            We may update this Privacy Policy occasionally. Any changes will be
            posted on this page.
          </Section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
