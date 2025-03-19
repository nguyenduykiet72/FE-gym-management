import {
  UserGroupIcon,
  UsersIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Mock data
  const stats = [
    {
      name: "Total Members",
      stat: "245",
      icon: UserGroupIcon,
      change: "12%",
      changeType: "increase",
    },
    {
      name: "Active Memberships",
      stat: "189",
      icon: UsersIcon,
      change: "8%",
      changeType: "increase",
    },
    {
      name: "Sessions Booked",
      stat: "48",
      icon: CalendarIcon,
      change: "5%",
      changeType: "decrease",
    },
    {
      name: "Revenue This Month",
      stat: "$5,240",
      icon: CurrencyDollarIcon,
      change: "10%",
      changeType: "increase",
    },
  ];

  const membershipData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Members",
        data: [12, 19, 15, 22, 30, 25],
        backgroundColor: "rgba(14, 165, 233, 0.7)",
        borderColor: "rgba(14, 165, 233, 1)",
        borderWidth: 1,
      },
    ],
  };

  const attendanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Attendance",
        data: [48, 55, 60, 52, 65, 72, 45],
        fill: false,
        borderColor: "rgba(99, 102, 241, 1)",
        tension: 0.1,
        pointBackgroundColor: "rgba(99, 102, 241, 1)",
      },
    ],
  };

  const packageDistributionData = {
    labels: ["Monthly", "Quarterly", "Annual", "Pay-as-you-go"],
    datasets: [
      {
        label: "Package Distribution",
        data: [45, 30, 15, 10],
        backgroundColor: [
          "rgba(14, 165, 233, 0.7)",
          "rgba(99, 102, 241, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(251, 146, 60, 0.7)",
        ],
        borderColor: [
          "rgba(14, 165, 233, 1)",
          "rgba(99, 102, 241, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(251, 146, 60, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{item.stat}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <div className="font-medium text-primary flex items-center">
                    {item.changeType === "increase" ? (
                      <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={item.changeType === "increase" ? "text-green-600" : "text-red-600"}>
                      {item.change} {item.changeType === "increase" ? "increase" : "decrease"}
                    </span>
                    <span className="text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">New Memberships</h2>
            <div className="h-64">
              <Bar data={membershipData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Weekly Attendance</h2>
            <div className="h-64">
              <Line data={attendanceData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow lg:col-span-1">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Package Distribution</h2>
            <div className="h-64 flex items-center justify-center">
              <Doughnut data={packageDistributionData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h2>
            <div className="flow-root">
              <ul className="-mb-8">
                {[
                  { user: "John Smith", action: "checked in", time: "5 minutes ago" },
                  { user: "Sarah Johnson", action: "booked a session with Tom (Trainer)", time: "30 minutes ago" },
                  { user: "Mike Williams", action: "renewed Monthly Package", time: "2 hours ago" },
                  { user: "Emma Davis", action: "registered as a new member", time: "5 hours ago" },
                ].map((activity, activityIdx) => (
                  <li key={activityIdx}>
                    <div className="relative pb-8">
                      {activityIdx !== 3 ? (
                        <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex items-start space-x-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center ring-8 ring-white">
                            {activity.user.charAt(0)}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <span className="font-medium text-gray-900">{activity.user}</span>{" "}
                              <span className="text-gray-600">{activity.action}</span>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
