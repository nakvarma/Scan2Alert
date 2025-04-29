import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";
import { Trash, ChevronDown, ChevronUp } from 'lucide-react';

const UserVehicleDetails = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userDetails, setUserDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const [selectedComplaint, setSelectedComplaint] = useState<number | null>(null);

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

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

  if (loading) {
    return <p className="text-center mt-10 font-serif">Loading...</p>;
  }
  const handleDelete = async (userId: string | undefined) => {
    if (!userId) return;

    try {
      await axios.delete(`http://localhost:3000/registrations/${userId}`);
      console.log("User deleted successfully.");
      // Optionally redirect or show a toast
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div >
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 ">

        <h1 className="text-3xl font-bold text-center mb-8 text-black font-serif" >Car Vehicle Details</h1>

        {userDetails && (
          <div>
            <h2 className="text-2xl font-semibold text-center text-black font-serif uppercase">{userDetails.name}</h2>
            <p className="text-center text-lg mt-2">{userDetails.phone}</p>

            <div>
              <h3 className="mt-4 text-xl font-semibold font-serif">Vehicles</h3>
              {userDetails.vehicles.map((vehicle: any, index: number) => (
                <div key={index} className="mt-6 border-b-2 pb-4  shadow-lg">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleVehicleDetails(index)}>
                    <h4
                      className="text-lg font-medium text-black px-4 hover:scale-105 transform transition duration-300 ">
                      {vehicle.number}</h4>

                    <span className="relative group px-4">

                      {selectedVehicle === index ? (
                        <ChevronUp size={20} className="text-gray-600 transition-transform duration-300" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-600 transition-transform duration-300" />
                      )}

                      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 bg-white px-2 py-1 rounded shadow-lg text-black text-xs whitespace-nowrap">
                        {selectedVehicle === index ? "Hide Details" : "Show Details"}
                      </span>

                    </span>
                  </div>

                  {/* {selectedVehicle === index && (
                    <div className="mt-4 p-4  rounded-lg ">
                      <strong className="pr-2 font-serif ">Status:</strong>  <p
                        className={`font-serif px-2 py-1 rounded-md inline-block
                         ${vehicle.status === 'registered' ? 'bg-green-200 text-green-800' : ''}
                          ${vehicle.status === 'complained' ? 'bg-red-200 text-red-800' : ''}
                     `}
                      >
                        {vehicle.status}
                      </p>
                      <button
                                                className="text-red-600 hover:text-red-800"
                                              >
                                                <Trash size={18} />
                                              </button>
                      <p className="font-serif"><strong className="pr-2">Location:</strong>{vehicle.location}
                      </p>

                      {vehicle.complaints && vehicle.complaints.length > 0 ? (
                        <div className="px-10 mt-4 ">
                          <h4 className="font-semibold px-2 font-serif">Complaints:</h4>
                          {vehicle.complaints.map((complaint: any, complaintIndex: number) => (
                            <div key={complaintIndex}
                              className="mt-2 hover:scale-105 transform transition duration-200">
                              <div
                                className="cursor-pointer  p-3 rounded-lg shadow-md hover:bg-gray-400"
                                onClick={() => toggleComplaintDetails(complaintIndex)}
                              >
                                <p className="font-serif"><strong>Complaint:</strong> {complaint.complaint}</p>
                                <p><strong className="font-serif">Complaint By:</strong> {complaint.complainedBy}</p>
                                <p><strong className="font-serif">Location:</strong> {complaint.location}</p>

                                <p><strong className="font-serif">Date:</strong>
                                  {new Date(complaint.at).toLocaleString('en-US', {
                                    weekday: 'short',
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit'
                                  })}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-2 text-gray-600 font-serif">No complaints for this vehicle.</p>
                      )}
                    </div>
                  )} */}
                  {selectedVehicle === index && (
                    <div className="mt-4 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <strong className="pr-2 font-serif">Status:</strong>
                          <p
                            className={`font-serif px-2 py-1 rounded-md inline-block
            ${vehicle.status === 'registered' ? 'bg-green-200 text-green-800' : ''}
            ${vehicle.status === 'complained' ? 'bg-red-200 text-red-800' : ''}
          `}
                          >
                            {vehicle.status}
                          </p>
                        </div>
                        <button className="text-red-600 hover:text-red-800"

                          onClick={() => handleDelete(userId)}
                        >
                          <Trash size={18} />
                        </button>
                      </div>

                      <p className="font-serif mt-2">
                        <strong className="pr-2">Location:</strong>
                        {vehicle.location}
                      </p>

                      {vehicle.complaints && vehicle.complaints.length > 0 ? (
                        <div className="px-10 mt-4">
                          <h4 className="font-semibold px-2 font-serif">Complaints:</h4>
                          {vehicle.complaints.map((complaint: any, complaintIndex: number) => (
                            <div key={complaintIndex} className="mt-2 hover:scale-105 transform transition duration-200">
                              <div
                                className="cursor-pointer p-3 rounded-lg shadow-md hover:bg-gray-400"
                                onClick={() => toggleComplaintDetails(complaintIndex)}
                              >
                                <p className="font-serif"><strong>Complaint:</strong> {complaint.complaint}</p>
                                <p><strong className="font-serif">Complaint By:</strong> {complaint.complainedBy}</p>
                                <p><strong className="font-serif">Location:</strong> {complaint.location}</p>
                                <p><strong className="font-serif">Date:</strong>
                                  {new Date(complaint.at).toLocaleString('en-US', {
                                    weekday: 'short',
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit'
                                  })}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-2 text-gray-600 font-serif">No complaints for this vehicle.</p>
                      )}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserVehicleDetails;
