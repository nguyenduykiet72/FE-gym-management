import { useState } from "react";
import { PencilIcon, TrashIcon, MagnifyingGlassIcon, PlusIcon, CalendarIcon } from "@heroicons/react/24/outline";

// Mock data for trainers
const initialTrainers = [
  {
    id: 1,
    name: "Tom Johnson",
    email: "tom@fithub.com",
    phone: "(555) 111-2233",
    specialization: "Weight Training",
    schedule: "Mon-Fri: 8AM-4PM",
    status: "Active",
  },
  {
    id: 2,
    name: "Anna Smith",
    email: "anna@fithub.com",
    phone: "(555) 222-3344",
    specialization: "Yoga",
    schedule: "Mon, Wed, Fri: 9AM-6PM",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael@fithub.com",
    phone: "(555) 333-4455",
    specialization: "Cardio, HIIT",
    schedule: "Tue, Thu, Sat: 7AM-3PM",
    status: "Active",
  },
  {
    id: 4,
    name: "Lisa Rodriguez",
    email: "lisa@fithub.com",
    phone: "(555) 444-5566",
    specialization: "Pilates, Stretching",
    schedule: "Mon-Thu: 10AM-7PM",
    status: "Inactive",
  },
];

const Trainers = () => {
  const [trainers, setTrainers] = useState(initialTrainers);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter trainers based on search
  const filteredTrainers = trainers.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Trainers</h1>
          <button className="btn btn-primary flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Trainer
          </button>
        </div>

        {/* Search */}
        <div className="mt-6 flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search trainers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTrainers.map((trainer) => (
            <div key={trainer.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-medium text-gray-600">
                    {trainer.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{trainer.name}</h3>
                    <p className="text-sm text-gray-500">{trainer.specialization}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-4">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900">{trainer.email}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Phone</dt>
                      <dd className="mt-1 text-sm text-gray-900">{trainer.phone}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                        Schedule
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">{trainer.schedule}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Status</dt>
                      <dd className="mt-1 text-sm">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            trainer.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {trainer.status}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                <div className="flex justify-end space-x-3">
                  <button className="text-primary hover:text-primary/80">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
