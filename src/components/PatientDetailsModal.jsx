import { useState, useEffect } from "react";

export default function PatientDetailsModal({ patient, onClose, updatePatient }) {
  const [name, setName] = useState(patient.name);
  const [age, setAge] = useState(patient.age);
  const [contact, setContact] = useState(patient.contact);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // trigger animation when modal mounts
  }, []);

  const handleSave = () => {
    updatePatient({ ...patient, name, age: parseInt(age), contact });
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 200); // wait for animation to finish
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity ${
        show ? "opacity-100" : "opacity-0"
      } bg-black bg-opacity-50`}
    >
      <div
        className={`bg-white p-6 rounded-2xl shadow-2xl w-96 max-w-full transform transition-transform duration-200 ${
          show ? "scale-100" : "scale-90"
        }`}
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Edit Patient
        </h2>

        <div className="flex flex-col space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            placeholder="Name"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            placeholder="Age"
          />
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            placeholder="Contact"
          />
        </div>

        <div className="flex justify-between mt-6 gap-2">
          <button
            onClick={handleSave}
            className="flex-1 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold px-4 py-3 rounded-lg shadow-lg transition-all"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="flex-1 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold px-4 py-3 rounded-lg shadow-lg transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
