import { useState, useEffect } from "react";
import { QrCodeIcon, CheckIcon, XMarkIcon, ClockIcon } from "@heroicons/react/24/outline";

const QRCheckIn = () => {
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | "success" | "error">(null);
  const [memberInfo, setMemberInfo] = useState<null | {
    id: number;
    name: string;
    status: string;
    package: string;
    expiration: string;
  }>(null);
  const [recentCheckins, setRecentCheckins] = useState<
    Array<{
      id: number;
      name: string;
      time: string;
      direction: "in" | "out";
    }>
  >([
    { id: 1, name: "John Smith", time: "10:15 AM", direction: "in" },
    { id: 2, name: "Sarah Johnson", time: "10:05 AM", direction: "in" },
    { id: 3, name: "Mike Williams", time: "9:45 AM", direction: "out" },
    { id: 4, name: "Linda Wilson", time: "9:30 AM", direction: "in" },
  ]);

  // Simulate QR scanning
  const startScanning = () => {
    setScanning(true);
    setScanResult(null);
    setMemberInfo(null);

    // Simulate a scan after 2 seconds (in a real app, this would be using a QR scanner library)
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for demo
      setScanResult(success ? "success" : "error");

      if (success) {
        setMemberInfo({
          id: 5,
          name: "David Brown",
          status: "Active",
          package: "Monthly",
          expiration: "15/08/2023",
        });

        // Add to recent check-ins
        const direction = Math.random() > 0.5 ? "in" : "out";
        const now = new Date();
        const timeString = now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        setRecentCheckins([
          {
            id: Date.now(),
            name: "David Brown",
            time: timeString,
            direction,
          },
          ...recentCheckins.slice(0, 9), // Keep only the 10 most recent
        ]);
      }

      setScanning(false);
    }, 2000);
  };

  // Reset the scan
  const resetScan = () => {
    setScanResult(null);
    setMemberInfo(null);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">QR Check-In System</h1>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* QR Scanner */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Scan Member QR Code</h2>

              {!scanning && !scanResult && (
                <div className="p-10 border-2 border-dashed border-gray-300 rounded-lg mb-4">
                  <QrCodeIcon className="mx-auto h-24 w-24 text-gray-400" />
                  <p className="mt-4 text-sm text-gray-500">Position the QR code in front of your camera</p>
                </div>
              )}

              {scanning && (
                <div className="p-10 border-2 border-gray-300 rounded-lg mb-4 bg-gray-50 animate-pulse">
                  <div className="flex justify-center">
                    <QrCodeIcon className="h-24 w-24 text-primary" />
                  </div>
                  <p className="mt-4 text-sm text-primary">Scanning...</p>
                </div>
              )}

              {scanResult === "success" && (
                <div className="p-6 border-2 border-green-500 rounded-lg mb-4 bg-green-50">
                  <div className="flex justify-center">
                    <CheckIcon className="h-16 w-16 text-green-600" />
                  </div>
                  <p className="mt-2 text-lg font-medium text-green-800">Check-In Successful</p>
                </div>
              )}

              {scanResult === "error" && (
                <div className="p-6 border-2 border-red-500 rounded-lg mb-4 bg-red-50">
                  <div className="flex justify-center">
                    <XMarkIcon className="h-16 w-16 text-red-600" />
                  </div>
                  <p className="mt-2 text-lg font-medium text-red-800">Invalid or Expired QR Code</p>
                </div>
              )}

              {!scanning && (
                <button
                  className={`btn ${scanResult ? "btn-outline" : "btn-primary"} mt-4`}
                  onClick={scanResult ? resetScan : startScanning}
                >
                  {scanResult ? "Scan Another" : "Start Scanning"}
                </button>
              )}
            </div>

            {/* Member Info */}
            {memberInfo && (
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-900 mb-2">Member Information</h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <dt className="text-sm font-medium text-gray-500">Name:</dt>
                  <dd className="text-sm text-gray-900">{memberInfo.name}</dd>

                  <dt className="text-sm font-medium text-gray-500">Status:</dt>
                  <dd className="text-sm text-gray-900">
                    <span
                      className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                        memberInfo.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {memberInfo.status}
                    </span>
                  </dd>

                  <dt className="text-sm font-medium text-gray-500">Package:</dt>
                  <dd className="text-sm text-gray-900">{memberInfo.package}</dd>

                  <dt className="text-sm font-medium text-gray-500">Expiration:</dt>
                  <dd className="text-sm text-gray-900">{memberInfo.expiration}</dd>
                </dl>
              </div>
            )}
          </div>

          {/* Recent Check-ins */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Check-ins</h2>

            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {recentCheckins.map((checkin) => (
                  <li key={checkin.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            checkin.direction === "in" ? "bg-green-100" : "bg-blue-100"
                          }`}
                        >
                          {checkin.direction === "in" ? (
                            <CheckIcon className="h-6 w-6 text-green-600" />
                          ) : (
                            <ClockIcon className="h-6 w-6 text-blue-600" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{checkin.name}</p>
                        <p className="text-sm text-gray-500 truncate">
                          {checkin.direction === "in" ? "Checked in" : "Checked out"} at {checkin.time}
                        </p>
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

export default QRCheckIn;
