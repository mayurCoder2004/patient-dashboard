import { useState } from "react";
import PatientCard from "../components/PatientCard";
import SearchBar from "../components/SearchBar";
import AddPatientForm from "../components/AddPatientForm";
import patientsData from "../data/patients.json";

export default function Patients() {
  const [patients, setPatients] = useState(patientsData);
  const [search, setSearch] = useState("");

  // Add a new patient
  const addPatient = (newPatient) => {
    setPatients([newPatient, ...patients]);
  };

  // Delete a patient
  const deletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  // Update a patient (edit)
  const updatePatient = (updatedPatient) => {
    setPatients(
      patients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p))
    );
  };

  // Filter patients by search query
  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Patients List</h2>

      {/* Add Patient Form */}
      <AddPatientForm addPatient={addPatient} />

      {/* Search Bar */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Patient Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredPatients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            deletePatient={deletePatient}
            updatePatient={updatePatient}
          />
        ))}
      </div>
    </div>
  );
}
