import React, { useEffect, useState } from "react";
import { Eye, Trash } from 'lucide-react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchRegistrations();

    const interval = setInterval(() => {
      fetchRegistrations();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredRegistrations(
        registrations.filter(user => user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      setFilteredRegistrations(registrations);
    }
  }, [searchQuery, registrations]);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get("http://localhost:3000/registrations");
      setRegistrations(response.data);
      setFilteredRegistrations(response.data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (userId: string) => {
    navigate(`/view/${userId}`);
  };

  const handleDelete = async (userId: string) => {
    try {
      await axios.delete(`http://localhost:3000/registrations/${userId}`);
      setRegistrations(registrations.filter((user) => user._id !== userId));
      setFilteredRegistrations(filteredRegistrations.filter((user) => user._id !== userId));
      console.log("User deleted successfully.");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="mb-6 flex justify-center items-center">
        <input
          type="text"
          className="p-3 w-full max-w-md flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm',
          'placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
          'disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full">
          <thead className="bg-indigo-600 text-white">
            <tr className="text-xs sm:text-sm">
              <th className="py-3 px-2 sm:px-6 text-left">No</th>
              <th className="py-3 px-2 sm:px-6 text-left">Phone</th>
              <th className="py-3 px-2 sm:px-6 text-left">Name</th>
              <th className="py-3 px-2 sm:px-6 text-left">Date & Time</th>
              <th className="py-3 px-2 sm:px-6 text-left">Delete</th>
              <th className="py-3 px-2 sm:px-6 text-left">View Vehicle(s)</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-xs sm:text-sm">
            {filteredRegistrations.map((user, userIndex) => (
              user.vehicles.map((vehicle, vehicleIndex) => (
                <tr key={`${user._id}-${vehicleIndex}`} className="border-t hover:bg-gray-100 transition-all">
                  {vehicleIndex === 0 && (
                    <>
                      <td className="py-3 px-2 sm:px-6" rowSpan={user.vehicles.length}>{userIndex + 1}</td>
                      <td className="py-3 px-2 sm:px-6" rowSpan={user.vehicles.length}>{user.phone}</td>
                      <td className="py-3 px-2 sm:px-6" rowSpan={user.vehicles.length}>{user.name || "-"}</td>
                      <td className="py-3 px-2 sm:px-6" rowSpan={user.vehicles.length}>
                        {new Date(user.createdAt).toLocaleString('en-US', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit'
                        })}
                      </td>

                      <td className="py-3 px-2 sm:px-6" rowSpan={user.vehicles.length}>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDelete(user._id)}
                        >
                          <Trash size={18} />
                        </button>
                      </td>

                      <td className="py-3 px-2 sm:px-6" rowSpan={user.vehicles.length}>
                        <button
                          className="text-indigo-600 hover:text-indigo-800"
                          onClick={() => handleView(user._id)}
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
