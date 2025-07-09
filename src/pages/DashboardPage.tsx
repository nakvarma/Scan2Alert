// import React, { useEffect, useState } from "react";
// import { Eye, Trash } from 'lucide-react';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import Navbar from "./NavBar";
// import Footer from "./Footer";
// import { showConfirmToast } from "../utils/showConfirmToast";
// import { toast } from "react-toastify";

// const DashboardPage = () => {
//   interface Registration {
//     _id: string;
//     phone: string;
//     name: string;
//     createdAt: string;
//     vehicles: any[];
//   }

//   const [registrations, setRegistrations] = useState<Registration[]>([]);
//   const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [addressQuery, setAddressQuery] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchRegistrations();
//     const interval = setInterval(() => {
//       fetchRegistrations();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [startDate, endDate]);

//   useEffect(() => {
//     filterRegistrations();
//   }, [searchQuery, startDate, endDate, registrations]);

//   const fetchRegistrations = async () => {
//     try {
//       const params = {
//         start: startDate,
//         end: endDate
//       };
//       const response = await axios.get("http://localhost:5000//registrations", { params });
//       setRegistrations(response.data);
//       setFilteredRegistrations(response.data);
//     } catch (error) {
//       console.error("Error fetching registrations:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filterRegistrations = () => {
//     const filtered = registrations.filter(user => {
//       const matchesPhone = user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesName = user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase());

//       const start = startDate ? new Date(startDate) : null;
//       const end = endDate ? new Date(new Date(endDate).getTime() + 24 * 60 * 60 * 1000) : null;

//       const createdAt = new Date(user.createdAt);

//       const matchesDate = (
//         (!start || createdAt >= start) &&
//         (!end || createdAt < end)
//       );

//       return (matchesPhone || matchesName) && matchesDate;
//     });

//     setFilteredRegistrations(filtered);
//   };


//   const filterRegistrations1 = () => {
//   const filtered = registrations.filter(user => {
//     const matchesPhone = user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesName = user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase());

//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(new Date(endDate).getTime() + 24 * 60 * 60 * 1000) : null;

//     const matchesComplaintLocation = user.vehicles.some(vehicle =>
//       vehicle.complaints?.some((complaint: any) =>
//         complaint.location && complaint.location.toLowerCase().includes(addressQuery.toLowerCase())
//       )
//     );

//     const hasComplaintInDateRange = user.vehicles.some(vehicle =>
//       vehicle.complaints?.some((complaint: any) => {
//         const complaintDate = new Date(complaint.at);
//         return (!start || complaintDate >= start) && (!end || complaintDate < end);
//       })
//     );

//     return (matchesPhone || matchesName) && hasComplaintInDateRange && (!addressQuery || matchesComplaintLocation);
//   });

//   setFilteredRegistrations(filtered);
// };

// // const filterRegistrations = () => {
// //   const filtered = registrations.filter(user => {
// //     const matchesPhone = user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase());
// //     const matchesName = user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase());

// //     const start = startDate ? new Date(startDate) : null;
// //     const end = endDate ? new Date(new Date(endDate).getTime() + 24 * 60 * 60 * 1000) : null;

// //     // Check if ANY complaint in ANY vehicle falls in the date range
// //     const hasComplaintInDateRange = user.vehicles.some(vehicle =>
// //       vehicle.complaints?.some((complaint: any) => {
// //         const complaintDate = new Date(complaint.at);
// //         return (!start || complaintDate >= start) && (!end || complaintDate < end);
// //       })
// //     );

// //     return (matchesPhone || matchesName) && hasComplaintInDateRange;
// //   });

// //   setFilteredRegistrations(filtered);
// // };

//   const handleView = (userId: string) => {
//     navigate(`/view/${userId}`);
//   };

//   // const handleDelete = (userId: string) => {
//   //   showConfirmToast(
//   //     "Are you sure you want to delete this vehicle-Owner?",
//   //     async () => {
//   //       try {
//   //         await axios.delete(`http://localhost:5000//registrations/${userId}`);
//   //         setRegistrations(registrations.filter((user) => user._id !== userId));
//   //         setFilteredRegistrations(filteredRegistrations.filter((user) => user._id !== userId));
//   //       } catch (error) {
//   //         console.error("Error deleting user:", error);
//   //       }
//   //     }
//   //   );
//   // };
// const handleDelete = (userId: string, userName: string) => {
//   showConfirmToast(
//     `Are you sure you want to delete ${userName}?`,
//     async () => {
//       try {
//         await axios.delete(`http://localhost:5000//registrations/${userId}`);
//         setRegistrations(registrations.filter((user) => user._id !== userId));
//         setFilteredRegistrations(filteredRegistrations.filter((user) => user._id !== userId));
//         toast.success(`${userName} deleted successfully`);
//       } catch (error) {
//         console.error("Error deleting user:", error);
//         toast.error(`Failed to delete ${userName}`);
//       }
//     }
//   );
// };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setStartDate(e.target.value);
//   };

//   const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEndDate(e.target.value);
//   };

//   const today = new Date().toISOString().split("T")[0];

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen flex-col space-y-4">
//         <svg
//           className="animate-spin h-8 w-8"
//           style={{ color: '#0084C2' }}
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//         >
//           <circle
//             className="opacity-25"
//             cx="12"
//             cy="12"
//             r="10"
//             stroke="currentColor"
//             strokeWidth="4"
//           ></circle>
//           <path
//             className="opacity-75"
//             fill="currentColor"
//             d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//           ></path>
//         </svg>
//         <p className="text-center font-serif text-lg" style={{ color: '#0084C2' }}>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col  bg-gray-100 overflow-x-hidden" style={{ backgroundColor: '#fffffff', }} >
//       <Navbar />

//       <div className="flex-1">
//         <div className="max-w-5xl mx-auto p-6" style={{ backgroundColor: '#FFFFFFF', marginTop: '2.5rem' }}>
//           <div className="mb-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//             <input
//               type="text"
//               className="p-3 rounded-md border bg-white text-sm shadow-sm focus:outline-none placeholder:text-gray-400 w-full md:max-w-xs"
//               style={{ borderColor: '#99B9E6', outlineColor: '#005A9C' }}
//               placeholder="Search by phone or name"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />

//             <input
//               type="date"
//               className="p-3 rounded-md border bg-white text-sm shadow-sm focus:outline-none w-full md:max-w-xs"
//               style={{ borderColor: '#99B9E6', outlineColor: '#005A9C' }}
//               value={startDate}
//               onChange={handleStartDateChange}
//               max={today}
//             />

//             <input
//               type="date"
//               className="p-3 rounded-md border bg-white text-sm shadow-sm focus:outline-none w-full md:max-w-xs"
//               style={{ borderColor: '#99B9E6', outlineColor: '#005A9C' }}
//               value={endDate}
//               onChange={handleEndDateChange}
//               max={today}
//             />
   

//           </div>
// {/* <div className="mb-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//         <input
//   type="text"
//   className="p-3 rounded-md border bg-white text-sm shadow-sm focus:outline-none placeholder:text-gray-400 w-full md:max-w-xs"
//   style={{ borderColor: '#99B9E6', outlineColor: '#005A9C' }}
//   placeholder="Search by complaint address"
//   value={addressQuery}
//   onChange={(e) => setAddressQuery(e.target.value)}
// />

//             <input
//               type="date"
//               className="p-3 rounded-md border bg-white text-sm shadow-sm focus:outline-none w-full md:max-w-xs"
//               style={{ borderColor: '#99B9E6', outlineColor: '#005A9C' }}
//               value={startDate}
//               onChange={handleStartDateChange}
//               max={today}
//             />

//             <input
//               type="date"
//               className="p-3 rounded-md border bg-white text-sm shadow-sm focus:outline-none w-full md:max-w-xs"
//               style={{ borderColor: '#99B9E6', outlineColor: '#005A9C' }}
//               value={endDate}
//               onChange={handleEndDateChange}
//               max={today}
//             />
      

//           </div> */}
//           <div className="space-y-4 md:hidden">
//             {filteredRegistrations.map((user, userIndex) =>
//               user.vehicles.map((vehicle, vehicleIndex) => (
//                 <div
//                   key={`${user._id}-${vehicleIndex}`}
//                   className="bg-white rounded-lg shadow p-4 text-sm"
//                 >
//                   {vehicleIndex === 0 && (
//                     <>
//                       <p><span className="font-semibold">No:</span> {userIndex + 1}</p>
//                       <p><span className="font-semibold">Phone:</span> {user.phone}</p>
//                       <p><span className="font-semibold">Name:</span> {user.name || "-"}</p>
//                       <p><span className="font-semibold">Date:</span> {new Date(user.createdAt).toLocaleString()}</p>
//                       <div className="flex justify-between mt-2">
//                         <button
//                           // onClick={() => handleDelete(user._id)}
//                         onClick={() => handleDelete(user._id, user.name || 'this user')}      
//                       className="text-red-600 hover:text-red-800 flex items-center"
//                         >
//                           <Trash size={16} className="mr-1" /> Delete
//                         </button>
//                         <button
//                           onClick={() => handleView(user._id)}
//                           className="flex items-center"
//                           style={{ color: '#0084C2' }}
//                         >
//                           <Eye size={16} className="mr-1" /> View
//                         </button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>

//           <div className="hidden max-full md:flex justify-center">
//             <div className="w-full max-w-5xl overflow-x-auto bg-white rounded-lg shadow-md">
//               <table className="min-w-full">
//                 <thead style={{ backgroundColor: '#0084C2', color: 'white', fontSize: '0.875rem' }}>
//                   <tr>
//                     <th className="py-3 px-4 text-left">No</th>
//                     <th className="py-3 px-4 text-left">Phone</th>
//                     <th className="py-3 px-4 text-left">Name</th>
//                     <th className="py-3 px-4 text-left">Date & Time</th>
//                     <th className="py-3 px-4 text-left">Delete</th>
//                     <th className="py-3 px-4 text-left">View</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-700 text-sm">
//                   {filteredRegistrations.map((user, userIndex) =>
//                     user.vehicles.map((vehicle, vehicleIndex) => (
//                       <tr key={`${user._id}-${vehicleIndex}`} className="border-t hover:bg-gray-100">
//                         {vehicleIndex === 0 && (
//                           <>
//                             <td className="py-2 px-4" rowSpan={user.vehicles.length}>{userIndex + 1}</td>
//                             <td className="py-2 px-4" rowSpan={user.vehicles.length}>{user.phone}</td>
//                             <td className="py-2 px-4" rowSpan={user.vehicles.length}>{user.name || "-"}</td>
//                             <td className="py-2 px-4 whitespace-nowrap" rowSpan={user.vehicles.length}>
//                               {new Date(user.createdAt).toLocaleString()}
//                             </td>
//                             <td className="py-2 px-4" rowSpan={user.vehicles.length}>
//                               <button
//                                 style={{ color: '#D14343' }}
//                                 // onClick={() => handleDelete(user._id)}
//                                  onClick={() => handleDelete(user._id, user.name || 'this user')}
//                                 onMouseOver={e => (e.currentTarget.style.color = '#7B1E1E')}
//                                 onMouseOut={e => (e.currentTarget.style.color = '#D14343')}
//                               >
//                                 <Trash size={18} />
//                               </button>
//                             </td>
//                             <td className="py-2 px-4" rowSpan={user.vehicles.length}>
//                               <button
//                                 style={{ color: '#0084C2' }}
//                                 onClick={() => handleView(user._id)}
//                                 onMouseOver={e => (e.currentTarget.style.color = '#005A9C')}
//                                 onMouseOut={e => (e.currentTarget.style.color = '#0084C2')}
//                               >
//                                 <Eye size={18} />
//                               </button>
//                             </td>
//                           </>
//                         )}
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default DashboardPage;


import React, { useEffect, useState } from "react";
import { Eye, Trash } from 'lucide-react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "./NavBar";
import Footer from "./Footer";
import { showConfirmToast } from "../utils/showConfirmToast";
import { toast } from "react-toastify";

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
  const [addressQuery, setAddressQuery] = useState('');
  const navigate = useNavigate();

 useEffect(() => {
  // Initial fetch
  fetchRegistrations();

  // Repeat fetch every 5 seconds
  const interval = setInterval(() => {
    fetchRegistrations();
  }, 5000);
  // Clean up interval on component unmount
  return () => clearInterval(interval);
}, []);

  

  useEffect(() => {
    filterRegistrations();
    
  }, [searchQuery, startDate, endDate, addressQuery, registrations]);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/registrations");
      setRegistrations(response.data);
      setFilteredRegistrations(response.data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setLoading(false);
    }
  };

 
// const filterRegistrations = () => {
//   const filtered = registrations
//     .map(user => {
//       const matchesPhone = user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesName = user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase());

//       const start = startDate ? new Date(startDate + 'T00:00:00') : null;
//       const end = endDate ? new Date(endDate + 'T23:59:59') : null;

//       const matchesComplaintLocation = user.vehicles.some(vehicle =>
//         vehicle.complaints?.some((complaint: any) =>
//           complaint.location && complaint.location.toLowerCase().includes(addressQuery.toLowerCase())
//         )
//       );

//       const hasComplaintInDateRange = user.vehicles.some(vehicle =>
//         vehicle.complaints?.some((complaint: any) => {
//           const complaintDate = new Date(complaint.at);
//           return (!start || complaintDate >= start) && (!end || complaintDate <= end);
//         })
//       );

//       const createdAt = new Date(user.createdAt);
//       const isCreatedInDateRange = (!start || createdAt >= start) && (!end || createdAt <= end);

//       const matchesDate =
//         (startDate || endDate)
//           ? (isCreatedInDateRange || hasComplaintInDateRange)
//           : true;

//       // 🔍 Determine match type
//       let matchType = '';

//       // 🆕 Only new registration (no complaints)
//       if (isCreatedInDateRange && !hasComplaintInDateRange) {
//         matchType = '🆕 New Registration';

//         // 📦 If any vehicle has dispatchAddress in new registration
//         const hasDispatch = user.vehicles.some(v => v.dispatchAddress?.trim() !== '');
//         if (hasDispatch) {
//           matchType += ' 📦 Dispatch Required';
//         }
//       }

//       // 📣 Only complaints in date range (not new registration)
//       else if (!isCreatedInDateRange && hasComplaintInDateRange) {
//         matchType = '📣 Complaint';
//       }

//       // 🆕📣 Both
//       else if (isCreatedInDateRange && hasComplaintInDateRange) {
//         matchType = '🆕 New Registration 📣 Complaint';
//       }

//       return (matchesPhone || matchesName) &&
//         (!addressQuery || matchesComplaintLocation) &&
//         matchesDate
//         ? { ...user, matchType: matchType.trim() }
//         : null;
//     })
//     .filter(Boolean);

//   setFilteredRegistrations(filtered);
// };

const filterRegistrations = () => {
  const filtered = registrations
    .map(user => {
      const matchesPhone = user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesName = user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase());

      const start = startDate ? new Date(startDate + 'T00:00:00') : null;
      const end = endDate ? new Date(endDate + 'T23:59:59') : null;

      const matchesComplaintLocation = user.vehicles.some(vehicle =>
        vehicle.complaints?.some((complaint: any) =>
          complaint.location && complaint.location.toLowerCase().includes(addressQuery.toLowerCase())
        )
      );

      const hasComplaintInDateRange = user.vehicles.some(vehicle =>
        vehicle.complaints?.some((complaint: any) => {
          const complaintDate = new Date(complaint.at);
          return (!start || complaintDate >= start) && (!end || complaintDate <= end);
        })
      );

      const createdAt = new Date(user.createdAt);
      const isCreatedInDateRange = (!start || createdAt >= start) && (!end || createdAt <= end);

      const matchesDate =
        (startDate || endDate)
          ? (isCreatedInDateRange || hasComplaintInDateRange)
          : true;

      const hasDispatch = user.vehicles.some(v => v.dispatchAddress?.trim() !== '');

      // 🔍 Determine match type
      let matchType = '';

      // 🆕 Only new registration (no complaints)
      if (isCreatedInDateRange && !hasComplaintInDateRange) {
        matchType = '🆕 New Registration';
        if (hasDispatch) {
          matchType += ' 📦 Dispatch Required';
        }
      }

      // 📣 Only complaints in date range (not new registration)
      else if (!isCreatedInDateRange && hasComplaintInDateRange) {
        matchType = '📣 Complaint';
      }

      // 🆕📣 Both new registration & complaint
      else if (isCreatedInDateRange && hasComplaintInDateRange) {
        matchType = '🆕 New Registration 📣 Complaint';
        if (hasDispatch) {
          matchType += ' 📦 Dispatch Required';
        }
      }

      return (matchesPhone || matchesName) &&
        (!addressQuery || matchesComplaintLocation) &&
        matchesDate
        ? { ...user, matchType: matchType.trim() }
        : null;
    })
    .filter(Boolean);

  setFilteredRegistrations(filtered);
};

  const handleDelete = (userId: string, userName: string) => {
    showConfirmToast(
      `Are you sure you want to delete ${userName}?`,
      async () => {
        try {
          await axios.delete(`http://localhost:5000/registrations/${userId}`);
          setRegistrations(registrations.filter((user) => user._id !== userId));
          setFilteredRegistrations(filteredRegistrations.filter((user) => user._id !== userId));
          toast.success(`${userName} deleted successfully`);
        } catch (error) {
          console.error("Error deleting user:", error);
          toast.error(`Failed to delete ${userName}`);
        }
      }
    );
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
 <div className="min-h-screen flex flex-col bg-gray-100">
  <Navbar />

  {/* Main content */}
  <div className="flex-1 max-w-6xl mx-auto py-8 px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by phone or name"
        className="p-2 border rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Complaint address"
        
        className="p-2 border rounded"
        value={addressQuery}
        onChange={(e) => setAddressQuery(e.target.value)}
      />
      <input
        type="date"
        className="p-2 border rounded"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        className="p-2 border rounded"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>

    <div className="overflow-x-auto bg-white shadow-md rounded">
      <table className="min-w-full text-sm">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left">No</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Created At</th>
            <th className="px-4 py-2 text-left">Delete</th>
            <th className="px-4 py-2 text-left">View</th>
            {(startDate || endDate || addressQuery || searchQuery) && (
              <th className="py-3 px-4 text-left">Status</th>
            )}
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
                <button
                  onClick={() => handleDelete(user._id, user.name || 'this user')}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash size={18} />
                </button>
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleView(user._id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Eye size={18} />
                </button>
              </td>
              {(startDate || endDate || addressQuery || searchQuery) && (
                <td className="py-2 px-4">{user.matchType || '—'}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Footer always at bottom */}
  <Footer />
</div>

  );
};

export default DashboardPage;
