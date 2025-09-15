import React, { useEffect, useState } from "react";
import { Eye, Trash } from 'lucide-react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "./NavBar";
import Footer from "./Footer";
import { showConfirmToast } from "../utils/showConfirmToast";
import { toast } from "react-toastify";
import { CalendarDays } from 'lucide-react';

const DashboardPage = () => {
  interface Registration {
    _id: string;
    phone: string;
    name: string;
    createdAt: string;
    vehicles: any[];
    matchType?: string;
  }

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [addressQuery, setAddressQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchRegistrations();
    const interval = setInterval(() => {
      fetchRegistrations();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    filterRegistrations();
  }, [searchQuery, startDate, endDate, addressQuery, registrations]);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get("https://scan2alert.in/api/registrations");
      setRegistrations(response.data);
      setFilteredRegistrations(response.data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterRegistrations = () => {
    const filtered = registrations
      .map(user => {
        const matchesPhone = user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesName = user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase());

        const start = startDate ? new Date(startDate + 'T00:00:00') : null;
        const end = endDate ? new Date(endDate + 'T23:59:59') : null;

        const hasComplaintInDateRange = user.vehicles.some(vehicle =>
          vehicle.complaints?.some((complaint: any) => {
            const complaintDate = new Date(complaint.at);
            return (!start || complaintDate >= start) && (!end || complaintDate <= end);
          })
        );

        const hasVehicleInDateRange = user.vehicles.some(vehicle => {
          const vehicleDate = new Date(vehicle.at);
          return (!start || vehicleDate >= start) && (!end || vehicleDate <= end);
        });

        const matchesComplaintLocation = user.vehicles.some(vehicle =>
          vehicle.complaints?.some((complaint: any) =>
            complaint.location && complaint.location.toLowerCase().includes(addressQuery.toLowerCase())
          )
        );

        const hasDispatch = user.vehicles.some(vehicle => vehicle.dispatchAddress?.trim() !== '');

        const matchesDate = (startDate || endDate) ? (hasVehicleInDateRange || hasComplaintInDateRange) : true;

        let matchType = '';

        if (hasVehicleInDateRange && !hasComplaintInDateRange) {
          matchType = '🆕 New Registration';
          if (hasDispatch) matchType += ' 📦 Dispatch Required';
        } else if (!hasVehicleInDateRange && hasComplaintInDateRange) {
          matchType = '📣 Complaint';
        } else if (hasVehicleInDateRange && hasComplaintInDateRange) {
          matchType = '🆕 New Registration 📣 Complaint';
          if (hasDispatch) matchType += ' 📦 Dispatch Required';
        }

        return (matchesPhone || matchesName) && (!addressQuery || matchesComplaintLocation) && matchesDate
          ? { ...user, matchType: matchType.trim() }
          : null;
      })
      .filter(Boolean) as Registration[];

    setFilteredRegistrations(filtered);
  };

  const handleDelete = (userId: string, userName: string) => {
    showConfirmToast(`Are you sure you want to delete ${userName}?`, async () => {
      try {
        await axios.delete(`https://scan2alert.in/api/registrations/${userId}`);
        setRegistrations(registrations.filter((user) => user._id !== userId));
        setFilteredRegistrations(filteredRegistrations.filter((user) => user._id !== userId));
        toast.success(`${userName} deleted successfully`);
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error(`Failed to delete ${userName}`);
      }
    });
  };

  const handleView = (userId: string) => {
    navigate(`/view/${userId}`);
  };

  const today = new Date().toISOString().split("T")[0];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-blue-600 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 max-w-6xl mx-auto py-8 px-4">

        <div className="flex-1 max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search by phone or name"
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-sm"

              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input
              type="text"
              placeholder="Complaint address"
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-sm"

              value={addressQuery}
              onChange={(e) => setAddressQuery(e.target.value)}
            />


            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              <input
                type="date"
                onFocus={(e) => e.target.type = "date"}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                max={today}
                className="w-full pl-10 pr-4 py-3  rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"

              />
            </div>

            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              <input
                type="date"
                onFocus={(e) => e.target.type = "date"}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                max={today}
                className="w-full pl-10 pr-4 py-3  rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

          </div>
        </div>

        <div className="hidden md:block overflow-x-auto bg-white shadow-md rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">No</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Created At</th>
                <th className="px-4 py-2 text-left">Delete</th>
                <th className="px-4 py-2 text-left">View</th>
                {(startDate || endDate || addressQuery || searchQuery) && <th className="px-4 py-2 text-left">Status</th>}
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.map((user, index) => (
                <tr key={user._id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">{user.name || '-'}</td>
                  <td className="px-4 py-2">{new Date(user.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleDelete(user._id, user.name || 'this user')} className="text-red-600 hover:text-red-800">
                      <Trash size={18} />
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleView(user._id)} className="text-blue-600 hover:text-blue-800">
                      <Eye size={18} />
                    </button>
                  </td>
                  {(startDate || endDate || addressQuery || searchQuery) && <td className="px-4 py-2">{user.matchType || '—'}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <div className="md:hidden space-y-4 mt-6 px-3">
          {filteredRegistrations.map((user, index) => (
            <div
              key={user._id}
              className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-gray-100 px-4 py-4 flex justify-between items-start transition hover:shadow-md"
            >
              <div className="flex flex-col space-y-1">
                <p className="text-[15px] font-semibold text-gray-900">
                  <span className="text-blue-500 mr-2">{index + 1}.</span> {user.name || "—"}
                </p>


                <p className="text-sm text-gray-500">{user.phone}</p>

                {(startDate || endDate || addressQuery || searchQuery) && (
                  <span className="text-[11px] mt-1 inline-block px-2 py-[2px] rounded-full bg-green-50 text-green-600 font-medium shadow-sm">
                    {user.matchType || "Matched"}
                  </span>
                )}
              </div>

              <div className="flex flex-col items-end justify-between h-full">
                <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-[2px] rounded-full mb-2">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleView(user._id)}
                    className="text-blue-600 hover:text-blue-800"
                    title="View"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id, user.name || "this user")}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;