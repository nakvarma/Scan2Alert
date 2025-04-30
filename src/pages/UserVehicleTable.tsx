import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";
import { Trash, ChevronDown, ChevronUp } from "lucide-react";

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
      const response = await axios.get(`http://localhost:3000/registrations/${userId}`);
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

  const handleDelete = async (userId: string | undefined, _id: any) => {
    if (!userId) return;
    const confirmed = window.confirm("Are you sure you want to delete this vehicle?");
    if (!confirmed) return;
    try {
      await axios.delete(`http://localhost:3000/registrations/${userId}/vehicles/${_id}`);
      await fetchUserDetails();
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
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
  if (loading) {
    return <p className="text-center mt-10 font-serif">Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-center mb-8 text-black font-serif">Car Vehicle Details</h1>

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
            <h2 className="text-2xl font-semibold text-center text-black font-serif uppercase">
              {userDetails.name}
            </h2>
            <p className="text-center text-lg mt-2">{userDetails.phone}</p>

            <h3 className="mt-6 text-xl font-semibold font-serif">Vehicles</h3>
            {filterVehicles().map((vehicle: any, index: number) => (
              <div key={index} className="mt-6 border-b-2 pb-4 shadow-lg rounded-md bg-white p-4">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleVehicleDetails(index)}>
                  <h4 className="text-lg font-medium text-black">{vehicle.number}</h4>
                  <span className="relative group">
                    {selectedVehicle === index ? (
                      <ChevronUp size={20} className="text-gray-600 transition-transform duration-300" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-600 transition-transform duration-300" />
                    )}
                    <span className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 bg-white px-2 py-1 rounded shadow-lg text-black text-xs whitespace-nowrap">
                      {selectedVehicle === index ? "Hide Details" : "Show Details"}
                    </span>
                  </span>
                </div>

                {selectedVehicle === index && (
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="pr-2 font-serif">Status:</strong>
                        <span
                          className={`font-serif px-2 py-1 rounded-md inline-block ${vehicle.status === "registered"
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
                        onClick={() => handleDelete(userId, vehicle._id)}
                      >
                        <Trash size={18} />
                      </button>
                    </div>

                    <p className="font-serif">
                      <strong className="pr-2">Location:</strong>
                      {vehicle.location}
                    </p>

                    {vehicle.complaints?.length > 0 ? (
                      <div className="mt-4">
                        <h4 className="font-semibold font-serif">Complaints:</h4>
                        {vehicle.complaints.map((complaint: any, complaintIndex: number) => (
                          <div key={complaintIndex} className="mt-2 hover:scale-105 transition-transform duration-200">
                            <div
                              className="cursor-pointer p-3 rounded-lg shadow-md hover:bg-gray-100"
                              onClick={() => toggleComplaintDetails(complaintIndex)}
                            >
                              <p className="font-serif"><strong>Complaint:</strong> {complaint.complaint}</p>
                              <p><strong className="font-serif">By:</strong> {complaint.complainedBy}</p>
                              <p><strong className="font-serif">Location:</strong> {complaint.location}</p>
                              <p><strong className="font-serif">Date:</strong> {new Date(complaint.at).toLocaleString()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 font-serif">No complaints for this vehicle.</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default UserVehicleDetails;
