import { useState } from "react";
import PatientDetailsModal from "./PatientDetailsModal";

export default function PatientCard({ patient, deletePatient, updatePatient }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transition-transform transform hover:-translate-y-1">
      {/* Patient Info */}
      <div>
        <h3 className="font-bold text-xl text-blue-700 mb-2">{patient.name}</h3>
        <p className="text-gray-600 mb-1"><span className="font-semibold">Age:</span> {patient.age}</p>
        <p className="text-gray-600"><span className="font-semibold">Contact:</span> {patient.contact}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-between gap-2">
        <button
          onClick={() => setShowModal(true)}
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition-all"
        >
          View / Edit
        </button>
        <button
          onClick={() => deletePatient(patient.id)}
          className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:from-red-600 hover:to-red-700 transition-all"
        >
          Delete
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <PatientDetailsModal
          patient={patient}
          onClose={() => setShowModal(false)}
          updatePatient={updatePatient}
        />
      )}
    </div>
  );
}
