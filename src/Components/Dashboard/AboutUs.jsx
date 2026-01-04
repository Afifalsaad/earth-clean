import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-secondary px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-semibold mb-6">About Our Project</h1>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our Community Cleaning Project is a volunteer-driven initiative
            focused on creating cleaner, healthier, and more sustainable
            neighborhoods. We believe that a clean environment is essential for
            public health, community pride, and overall quality of life.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            This project brings together local residents, students, and
            environmental enthusiasts to participate in regular cleaning
            activities such as street cleaning, waste collection, recycling
            awareness, and public space restoration. Through these activities,
            we aim to reduce pollution, prevent environmental degradation, and
            promote responsible waste management practices.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Beyond cleaning, we also focus on education and awareness. We work
            with community members to encourage habits such as proper waste
            disposal, reducing plastic use, and supporting recycling efforts.
            Our goal is not only to clean today, but to inspire long-term
            behavioral change that leads to a cleaner and greener future.
          </p>
        </div>
      </div>
      );
    </div>
  );
};

export default AboutUs;
