import React, { useEffect, useState } from "react";
import { Eye, Trash } from 'lucide-react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "./NavBar";

const DashboardPage = () => {
  interface Registration {
    _id: string;
    phone: string;
    name: string;
    createdAt: string;
    vehicles: any[];
  }

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchRegistrations();
    const interval = setInterval(() => {
      fetchRegistrations();
    }, 5000);
    return () => clearInterval(interval);
  }, [startDate, endDate]);

  useEffect(() => {
    filterRegistrations();
  }, [searchQuery, startDate, endDate, registrations]);

  const fetchRegistrations = async () => {
    try {
      const params = {
        start: startDate,
        end: endDate
      };
      const response = await axios.get("https://whatsappbot-nine.vercel.app/registrations", { params });
      setRegistrations(response.data);
      setFilteredRegistrations(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setLoading(false);
    }
  };
  const filterRegistrations = () => {
    const filtered = registrations.filter(user => {
      const matchesPhone = user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesName = user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase());

      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(new Date(endDate).getTime() + 24 * 60 * 60 * 1000) : null;

      const createdAt = new Date(user.createdAt);

      const matchesDate = (
        (!start || createdAt >= start) &&
        (!end || createdAt < end)
      );

      return (matchesPhone || matchesName) && matchesDate;
    });

    setFilteredRegistrations(filtered);
  };

  const handleView = (userId: string) => {
    navigate(`/view/${userId}`);
  };

  const handleDelete = async (userId: string) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this vehicle-Owner?");
      if (!confirmed) return;
      await axios.delete(`https://whatsappbot-nine.vercel.app/registrations/${userId}`);
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

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const today = new Date().toISOString().split("T")[0];


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen flex-col space-y-4">
        <svg
          className="animate-spin h-8 w-8 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <p className="text-center font-serif text-lg text-gray-700">Loading...</p>
      </div>
    );
  }
  return (


    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 bg-gray-50 mt-10">
        <div className="mb-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            className="p-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder:text-gray-400 w-full md:max-w-xs"
            placeholder="Search by phone or name"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <input
            type="date"
            className="p-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none w-full md:max-w-xs"
            value={startDate}
            onChange={handleStartDateChange}
            max={today}
          />

          <input
            type="date"
            className="p-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none w-full md:max-w-xs"
            value={endDate}
            onChange={handleEndDateChange}
            max={today}
          />
        </div>

        <div className="space-y-4 md:hidden">
          {filteredRegistrations.map((user, userIndex) =>
            user.vehicles.map((vehicle, vehicleIndex) => (
              <div
                key={`${user._id}-${vehicleIndex}`}
                className="bg-white rounded-lg shadow p-4 text-sm"
              >
                {vehicleIndex === 0 && (
                  <>
                    <p><span className="font-semibold">No:</span> {userIndex + 1}</p>
                    <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                    <p><span className="font-semibold">Name:</span> {user.name || "-"}</p>
                    <p><span className="font-semibold">Date:</span> {new Date(user.createdAt).toLocaleString()}</p>
                    <div className="flex justify-between mt-2">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-red-600 hover:text-red-800 flex items-center"
                      >
                        <Trash size={16} className="mr-1" /> Delete
                      </button>
                      <button
                        onClick={() => handleView(user._id)}
                        className="text-indigo-600 hover:text-indigo-800 flex items-center"
                      >
                        <Eye size={16} className="mr-1" /> View
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>

        <div className="hidden  max-full md:flex justify-center">
          <div className="w-full max-w-5xl overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full">
              <thead className="bg-indigo-600 text-white text-sm">
                <tr>
                  <th className="py-3 px-4 text-left">No</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Date & Time</th>
                  <th className="py-3 px-4 text-left">Delete</th>
                  <th className="py-3 px-4 text-left">View</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {filteredRegistrations.map((user, userIndex) =>
                  user.vehicles.map((vehicle, vehicleIndex) => (
                    <tr key={`${user._id}-${vehicleIndex}`} className="border-t hover:bg-gray-100">
                      {vehicleIndex === 0 && (
                        <>
                          <td className="py-2 px-4" rowSpan={user.vehicles.length}>{userIndex + 1}</td>
                          <td className="py-2 px-4" rowSpan={user.vehicles.length}>{user.phone}</td>
                          <td className="py-2 px-4" rowSpan={user.vehicles.length}>{user.name || "-"}</td>
                          <td className="py-2 px-4 whitespace-nowrap" rowSpan={user.vehicles.length}>
                            {new Date(user.createdAt).toLocaleString()}
                          </td>
                          <td className="py-2 px-4" rowSpan={user.vehicles.length}>
                            <button
                              className="text-red-600 hover:text-red-800"
                              onClick={() => handleDelete(user._id)}
                            >
                              <Trash size={18} />
                            </button>
                          </td>
                          <td className="py-2 px-4" rowSpan={user.vehicles.length}>
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
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DashboardPage;
