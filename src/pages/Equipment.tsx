import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

// Mock data for equipment
const initialEquipment = [
  {
    id: 1,
    name: "Treadmill",
    model: "T-2000",
    location: "Cardio Area",
    status: "Available",
    lastMaintenance: "06/15/2023",
    nextMaintenance: "09/15/2023",
  },
  {
    id: 2,
    name: "Leg Press",
    model: "LP-500",
    location: "Weight Area",
    status: "Available",
    lastMaintenance: "05/20/2023",
    nextMaintenance: "08/20/2023",
  },
  {
    id: 3,
    name: "Bench Press",
    model: "BP-300",
    location: "Weight Area",
    status: "Available",
    lastMaintenance: "07/05/2023",
    nextMaintenance: "10/05/2023",
  },
  {
    id: 4,
    name: "Elliptical",
    model: "E-1500",
    location: "Cardio Area",
    status: "Maintenance",
    lastMaintenance: "07/10/2023",
    nextMaintenance: "07/15/2023",
  },
  {
    id: 5,
    name: "Smith Machine",
    model: "SM-700",
    location: "Weight Area",
    status: "Out of Order",
    lastMaintenance: "04/25/2023",
    nextMaintenance: "07/25/2023",
  },
  {
    id: 6,
    name: "Cable Machine",
    model: "CM-800",
    location: "Weight Area",
    status: "Available",
    lastMaintenance: "06/30/2023",
    nextMaintenance: "09/30/2023",
  },
  {
    id: 7,
    name: "Rowing Machine",
    model: "RM-400",
    location: "Cardio Area",
    status: "Available",
    lastMaintenance: "05/15/2023",
    nextMaintenance: "08/15/2023",
  },
  {
    id: 8,
    name: "Stationary Bike",
    model: "SB-200",
    location: "Cardio Area",
    status: "Maintenance",
    lastMaintenance: "07/08/2023",
    nextMaintenance: "07/12/2023",
  },
];

const Equipment = () => {
  const [equipment, setEquipment] = useState(initialEquipment);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Filter equipment based on search and status filter
  const filteredEquipment = equipment.filter(
    (item) =>
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterStatus === "All" || item.status === filterStatus)
  );

  // Count equipment by status
  const statusCounts = {
    Available: equipment.filter((item) => item.status === "Available").length,
    Maintenance: equipment.filter((item) => item.status === "Maintenance").length,
    "Out of Order": equipment.filter((item) => item.status === "Out of Order").length,
  };

  // Update equipment status
  const updateStatus = (id: number, newStatus: string) => {
    setEquipment(equipment.map((item) => (item.id === id ? { ...item, status: newStatus } : item)));
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Equipment Management</h1>

        {/* Status Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Available Equipment</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{statusCounts.Available}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Under Maintenance</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{statusCounts.Maintenance}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Out of Order</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{statusCounts["Out of Order"]}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-grow max-w-md mb-4 sm:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <select className="input" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="All">All Status</option>
              <option value="Available">Available</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Out of Order">Out of Order</option>
            </select>
            <button className="btn btn-primary">Add Equipment</button>
          </div>
        </div>

        {/* Equipment Table */}
        <div className="mt-6 overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name / Model
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Maintenance
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEquipment.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.model}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.status === "Available"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Maintenance"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <p>Last: {item.lastMaintenance}</p>
                    <p>Next: {item.nextMaintenance}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-3 justify-end">
                      <select
                        className="block w-32 py-1 px-2 border border-gray-300 bg-white rounded-md text-sm focus:outline-none focus:ring-primary focus:border-primary"
                        value={item.status}
                        onChange={(e) => updateStatus(item.id, e.target.value)}
                      >
                        <option value="Available">Available</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Out of Order">Out of Order</option>
                      </select>
                      <button className="text-primary hover:text-primary/80">Details</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Maintenance Schedule */}
        <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Maintenance</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Equipment scheduled for maintenance in the next 30 days
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <ul className="divide-y divide-gray-200">
              {equipment
                .filter((item) => {
                  const nextDate = new Date(item.nextMaintenance);
                  const today = new Date();
                  const thirtyDaysFromNow = new Date();
                  thirtyDaysFromNow.setDate(today.getDate() + 30);
                  return nextDate >= today && nextDate <= thirtyDaysFromNow;
                })
                .sort((a, b) => new Date(a.nextMaintenance).getTime() - new Date(b.nextMaintenance).getTime())
                .map((item) => (
                  <li key={item.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <WrenchScrewdriverIcon className="h-6 w-6 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.name} ({item.model})
                        </p>
                        <p className="text-sm text-gray-500">Scheduled on {item.nextMaintenance}</p>
                      </div>
                    </div>
                    <button className="btn btn-outline text-xs px-3 py-1">Schedule</button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
