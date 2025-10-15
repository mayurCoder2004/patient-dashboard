import React from "react";
import { FaUserPlus, FaEdit, FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-200 to-blue-300 flex flex-col justify-center items-center text-center py-32 px-4"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6 animate-fadeIn">
          Welcome to Jarurat Care
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl animate-fadeIn delay-200">
          Manage patient records effortlessly. Add, view, edit, and track patient details with ease.
        </p>
        <a
          href="/patients"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition transform hover:-translate-y-1 animate-fadeIn delay-400"
        >
          Go to Patients
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-white">
        <h3 className="text-4xl font-bold text-center text-blue-700 mb-12">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-tr from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
            <FaUserPlus className="mx-auto text-blue-600 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Add Patients</h4>
            <p className="text-gray-700">
              Easily add new patient records using our simple and intuitive form.
            </p>
          </div>
          <div className="bg-gradient-to-tr from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
            <FaEdit className="mx-auto text-green-600 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Edit Patients</h4>
            <p className="text-gray-700">
              Update patient details in real-time using a clean and responsive modal.
            </p>
          </div>
          <div className="bg-gradient-to-tr from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
            <FaSearch className="mx-auto text-yellow-600 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Search & Filter</h4>
            <p className="text-gray-700">
              Quickly find patients using the search bar and filter options.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-blue-700 mb-6">About Jarurat Care</h3>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Jarurat Care is designed to simplify patient record management for healthcare providers.
            Track, edit, and manage patient information efficiently—all in one place.
          </p>
          <p className="text-gray-600 italic">
            Our mission is to empower healthcare providers with intuitive tools for better patient care.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 py-6 text-center text-white shadow-inner">
        &copy; 2025 Jarurat Care. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
