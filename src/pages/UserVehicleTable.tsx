import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Trash, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { showConfirmToast } from "../utils/showConfirmToast";

const UserVehicleDetails = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userDetails, setUserDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const [selectedComplaint, setSelectedComplaint] = useState<number | null>(null);
  const [searchVehicleNumber, setSearchVehicleNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  useEffect(() => {
    filterVehicles();
  }, [searchVehicleNumber, startDate, endDate, userDetails]);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/registrations/${userId}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleVehicleDetails = (index: number) => {
    setSelectedVehicle(selectedVehicle === index ? null : index);
  };

  const toggleComplaintDetails = (complaintIndex: number) => {
    setSelectedComplaint(selectedComplaint === complaintIndex ? null : complaintIndex);
  };

  // const handleDelete = async (userId: string | undefined, _id: any) => {
  //   if (!userId) return;
  //   showConfirmToast(
  //     "Are you sure you want to delete this vehicle?",
  //     async () => {
  //       try {
  //         console.log(userId, _id);
  //         await axios.delete(`http://localhost:5000/registrations/${userId}/vehicles/${_id}`);
  //         await fetchUserDetails();
  //       } catch (error) {
  //         console.error("Error deleting vehicle:", error);
  //       }
  //     }
  //   );
  // };
const handleDelete = async (
  userId: string | undefined,
  vehicleId: string,
  vehicleNumber: string
) => {
  if (!userId) return;

  showConfirmToast(
    `Are you sure you want to delete vehicle ${vehicleNumber}?`,
    async () => {
      try {
        console.log(userId, vehicleId);
        await axios.delete(`http://localhost:5000/registrations/${userId}/vehicles/${vehicleId}`);
        await fetchUserDetails();
      } catch (error) {
        console.error("Error deleting vehicle:", error);
      }
    }
  );
};

  const filterVehicles = () => {
    if (!userDetails || !userDetails.vehicles) return [];

    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(new Date(endDate).getTime() + 24 * 60 * 60 * 1000) : null;

    return userDetails.vehicles.filter((vehicle: any) => {
      const matchesVehicleNumber = vehicle.number.toLowerCase().includes(searchVehicleNumber.toLowerCase());

      const latestComplaintDate = vehicle.complaints?.length
        ? new Date(vehicle.complaints[vehicle.complaints.length - 1].at)
        : null;

      const isWithinDateRange =
        (!start || (latestComplaintDate && latestComplaintDate >= start)) &&
        (!end || (latestComplaintDate && latestComplaintDate < end));

      return matchesVehicleNumber && isWithinDateRange;
    });
  };
    console.log("Filtered Vehicles:", filterVehicles());

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen flex-col space-y-4">
        <svg
          className="animate-spin h-8 w-8 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        <p className="text-center font-serif text-lg text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <div className="shrink-0">
        <Navbar />
      </div>

      {/* Content Area */}
      <div className="flex-1 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-black">Car Vehicle Details</h1>

          <div className="mb-6 flex flex-wrap gap-4 justify-center items-center">
            <input
              type="text"
              className="p-3 w-full max-w-xs rounded-md border border-gray-300 bg-white text-sm"
              placeholder="Search by Vehicle Number..."
              value={searchVehicleNumber}
              onChange={(e) => setSearchVehicleNumber(e.target.value)}
            />
            <input
              type="date"
              className="p-3 w-full max-w-xs rounded-md border border-gray-300 bg-white text-sm"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className="p-3 w-full max-w-xs rounded-md border border-gray-300 bg-white text-sm"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
            />
          </div>

          {userDetails && (
            <>
              <h2 className="text-2xl font-semibold text-center text-black uppercase">
                {userDetails.name}
              </h2>
              <p className="text-center text-lg mt-2">{userDetails.phone}</p>

              <h3 className="mt-6 text-xl font-semibold">Vehicles</h3>
              
              {filterVehicles().map((vehicle: any, index: number) => (
                <div key={index} className="mt-6 border-b-2 pb-4 shadow-lg rounded-md bg-white p-4">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleVehicleDetails(index)}
                  >
                    <h4 className="text-lg font-medium text-black">{vehicle.number}</h4>
                    {selectedVehicle === index ? (
                      <ChevronUp size={20} className="text-gray-600" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-600" />
                    )}
                  </div>

                  {selectedVehicle === index && (
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <strong>Status:</strong>{" "}
                          <span
                            className={`px-2 py-1 rounded-md inline-block ${vehicle.status === "registered"
                              ? "bg-green-200 text-green-800"
                              : vehicle.status === "complained"
                                ? "bg-red-200 text-red-800"
                                : "bg-gray-200 text-gray-800"
                              }`}
                          >
                            {vehicle.status}
                          </span>
                        </div>
                        <button
                          className="text-red-600 hover:text-red-800"
                          // onClick={() => handleDelete(userId, vehicle._id)}
                            onClick={() => handleDelete(userId, vehicle._id, vehicle.number)}
                        >
                          <Trash size={18} />
                        </button>
                      </div>

                      <p>
                        <strong>Location:</strong> {vehicle.location}
                      </p>
                      {vehicle.dispatchAddress && (
  <p>
    <strong>DispatchAddress:</strong> {vehicle.dispatchAddress}
  </p>
)}

                              <p><strong>Date:</strong> {new Date(vehicle.at).toLocaleString()}</p>

                      {vehicle.complaints?.length > 0 ? (
                        <div className="mt-4">
                          <h4 className="font-semibold">Complaints:</h4>
                          {vehicle.complaints.map((complaint: any, complaintIndex: number) => (
                            <motion.div
                              key={complaintIndex}
                              className="mt-2 px-4 py-2 rounded-md bg-[#E0F2FB] hover:bg-[#B3E0FF] transition cursor-pointer"
                              whileHover={{ scale: 1.0125 }}
                              whileTap={{ scale: 0.99 }}
                              transition={{ duration: 0.14, ease: 'easeOut' }}
                            >
                              <p className="font-semibold text-[#0084C2]"><strong>Complaint:</strong> {complaint.complaint}</p>
                              <p><strong>By:</strong> {complaint.complainedBy}</p>
                              <p><strong>Location:</strong> {complaint.location}</p>
    {complaint.reply && (complaint.reply.message || complaint.reply.custom) && (
  <p>
    <strong>Reply:</strong> {complaint.reply.message || complaint.reply.custom}
  </p>
)}


                              <p><strong>Date:</strong> {new Date(complaint.at).toLocaleString()}</p>

                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">No complaints for this vehicle.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Footer at Bottom */}
      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default UserVehicleDetails;
