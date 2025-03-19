import { useState } from "react";
import {
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ArrowUpCircleIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";

// Mock data for members
const initialMembers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "(555) 123-4567",
    package: "Monthly",
    status: "Active",
    joinDate: "01/05/2023",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "(555) 234-5678",
    package: "Annual",
    status: "Active",
    joinDate: "15/02/2023",
  },
  {
    id: 3,
    name: "Mike Williams",
    email: "mike@example.com",
    phone: "(555) 345-6789",
    package: "Quarterly",
    status: "Active",
    joinDate: "10/08/2023",
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma@example.com",
    phone: "(555) 456-7890",
    package: "Monthly",
    status: "Inactive",
    joinDate: "22/11/2022",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@example.com",
    phone: "(555) 567-8901",
    package: "Monthly",
    status: "Active",
    joinDate: "05/03/2023",
  },
  {
    id: 6,
    name: "Linda Wilson",
    email: "linda@example.com",
    phone: "(555) 678-9012",
    package: "Annual",
    status: "Active",
    joinDate: "18/09/2022",
  },
  {
    id: 7,
    name: "Robert Taylor",
    email: "robert@example.com",
    phone: "(555) 789-0123",
    package: "Quarterly",
    status: "Inactive",
    joinDate: "30/06/2023",
  },
];

const Members = () => {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentMember, setCurrentMember] = useState<any>(null);
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    package: "Monthly",
    status: "Active",
    joinDate: new Date().toLocaleDateString("en-GB"),
  });

  // Filter members based on search
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm) ||
      member.package.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Open form to add new member
  const handleAddMember = () => {
    setCurrentMember(null);
    setFormData({
      id: 0,
      name: "",
      email: "",
      phone: "",
      package: "Monthly",
      status: "Active",
      joinDate: new Date().toLocaleDateString("en-GB"),
    });
    setShowAddForm(true);
  };

  // Open form to edit existing member
  const handleEditMember = (member: any) => {
    setCurrentMember(member);
    setFormData(member);
    setShowAddForm(true);
  };

  // Delete a member
  const handleDeleteMember = (id: number) => {
    if (confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter((member) => member.id !== id));
    }
  };

  // Save member (add or update)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMember) {
      // Update existing member
      setMembers(members.map((member) => (member.id === currentMember.id ? { ...formData } : member)));
    } else {
      // Add new member
      setMembers([...members, { ...formData, id: members.length + 1 }]);
    }
    setShowAddForm(false);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Members</h1>
          <button className="btn btn-primary flex items-center" onClick={handleAddMember}>
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Member
          </button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Add/Edit Member Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                {currentMember ? "Edit Member" : "Add New Member"}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input mt-1"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input mt-1"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="input mt-1"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700">
                      Package
                    </label>
                    <select
                      id="package"
                      name="package"
                      className="input mt-1"
                      value={formData.package}
                      onChange={handleInputChange}
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="Annual">Annual</option>
                      <option value="Pay-as-you-go">Pay-as-you-go</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="input mt-1"
                      value={formData.status}
                      onChange={handleInputChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button type="button" className="btn btn-outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {currentMember ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Members Table */}
        <div className="mt-6 overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Contact
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Package
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
                  Join Date
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{member.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.email}</div>
                    <div className="text-sm text-gray-500">{member.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.package}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        member.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-3 justify-end">
                      <button className="text-primary hover:text-primary/80" onClick={() => handleEditMember(member)}>
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteMember(member.id)}>
                        <TrashIcon className="h-5 w-5" />
                      </button>
                      <button className="text-secondary hover:text-secondary/80">
                        <QrCodeIcon className="h-5 w-5" />
                      </button>
                      <button className="text-accent hover:text-accent/80">
                        <ArrowUpCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Members;
