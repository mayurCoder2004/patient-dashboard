import { useState } from "react";

export default function AddPatientForm({ addPatient }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !contact) return;

    const newPatient = {
      id: Date.now(),
      name,
      age: parseInt(age),
      contact
    };

    addPatient(newPatient);

    // Reset form
    setName("");
    setAge("");
    setContact("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 p-6 rounded-xl mb-6 shadow-lg max-w-md mx-auto hover:shadow-2xl transition"
    >
      <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Add New Patient
      </h3>

      <div className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold px-4 py-3 rounded-lg shadow-lg transition-all"
      >
        Add Patient
      </button>
    </form>
  );
}
