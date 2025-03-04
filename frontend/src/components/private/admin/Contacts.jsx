import React, { useEffect, useState } from "react";
import axios from "axios";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  // Fetch all contacts
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-top justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-5 sm:p-10 border border-gray-200 rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contacts</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="p-3 border border-gray-300 text-center">Full Name</th>
                <th className="p-3 border border-gray-300 text-center">Email</th>
                <th className="p-3 border border-gray-300 text-center">Phone</th>
                <th className="p-3 border border-gray-300 text-center">Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contacts) => (
                  <tr key={contacts.id}>
                    <td className="p-3 border border-gray-300 text-center">{contacts.name}</td>
                    <td className="p-3 border border-gray-300 text-center">{contacts.email}</td>
                    <td className="p-3 border border-gray-300 text-center">{contacts.phone}</td>
                    <td className="p-3 border border-gray-300 text-center">{contacts.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-3 border border-gray-300 text-center text-gray-500">
                    No contacts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Contacts