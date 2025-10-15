import React from "react";

const About = () => {
  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          About Jarurat Care
        </h1>
        <p className="text-gray-700 text-lg">
          Jarurat Care is a modern patient management platform designed to help healthcare providers
          efficiently track, manage, and care for patients. Our goal is to simplify the workflow 
          and make patient data accessible at your fingertips.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Manage Patients</h2>
          <p className="text-gray-600">
            Add, edit, and view patient details seamlessly in a clean, responsive dashboard.
          </p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-green-700">Search & Filter</h2>
          <p className="text-gray-600">
            Quickly find patients using search functionality to save time and improve efficiency.
          </p>
        </div>
        <div className="p-6 bg-yellow-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-yellow-700">Secure & Reliable</h2>
          <p className="text-gray-600">
            Your patient data is safe with us. We prioritize privacy and ease of access.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          At Jarurat Care, our mission is to empower healthcare providers with intuitive tools 
          to manage patient information efficiently. We believe in combining technology and care 
          to make healthcare smoother for everyone.
        </p>
      </section>
    </div>
  );
};

export default About;
