import { useState, useEffect } from 'react';
import {
  UserIcon,
  PencilIcon,
  CheckIcon,
  ArrowPathIcon,
  CreditCardIcon,
  CalendarIcon,
  ClockIcon,
  ChartBarIcon,
  BookmarkIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const MemberProfile = () => {
  // Member data state
  const [memberData, setMemberData] = useState({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Fitness Street',
    city: 'Gym City',
    dateOfBirth: '1990-05-15',
    gender: 'male',
    emergencyContact: 'Jane Doe',
    emergencyPhone: '(555) 987-6543',
    membershipType: 'Quarterly',
    memberSince: '2023-01-15',
    membershipStatus: 'Active',
    expiryDate: '2023-10-15',
    remainingPT: 4,
  });

  // Health and fitness data
  const [healthData, setHealthData] = useState({
    height: 175, // cm
    weight: 70, // kg
    bmi: 22.9,
    goals: ['Weight Loss', 'Muscle Gain', 'Improve Flexibility'],
    medicalConditions: 'None',
    allergies: 'None',
    lastAssessment: '2023-05-20',
  });

  // Edit states
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingHealth, setIsEditingHealth] = useState(false);

  // Form data states
  const [formData, setFormData] = useState({ ...memberData });
  const [healthFormData, setHealthFormData] = useState({ ...healthData });

  // Activity data (would come from backend in real app)
  const recentActivity = [
    { type: 'check-in', date: '2023-06-28', time: '09:15 AM' },
    { type: 'class', name: 'HIIT Challenge', date: '2023-06-26', time: '06:00 PM' },
    { type: 'pt-session', trainer: 'Alex Johnson', date: '2023-06-24', time: '11:00 AM' },
    { type: 'check-in', date: '2023-06-23', time: '08:30 AM' },
    { type: 'class', name: 'Yoga Flow', date: '2023-06-21', time: '07:00 AM' },
  ];

  // Upcoming schedule
  const upcomingSchedule = [
    { type: 'class', name: 'Cardio Blast', date: '2023-06-30', time: '08:00 AM' },
    { type: 'pt-session', trainer: 'Alex Johnson', date: '2023-07-01', time: '10:00 AM' },
    { type: 'class', name: 'HIIT Challenge', date: '2023-07-03', time: '06:00 PM' },
  ];

  // Goal progress
  const goalProgress = [
    { name: 'Cardio Sessions', target: 12, current: 8 },
    { name: 'Weight Training', target: 16, current: 10 },
    { name: 'Weight Loss', target: 5, current: 3.2 },
  ];

  // Calculate BMI from height and weight
  useEffect(() => {
    if (healthFormData.height && healthFormData.weight) {
      const heightInMeters = healthFormData.height / 100;
      const bmi = (healthFormData.weight / (heightInMeters * heightInMeters)).toFixed(1);
      setHealthFormData((prev) => ({ ...prev, bmi: parseFloat(bmi) }));
    }
  }, [healthFormData.height, healthFormData.weight]);

  // Handle profile form input changes
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle health form input changes
  const handleHealthChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setHealthFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle goal checkbox changes
  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setHealthFormData((prev) => ({
        ...prev,
        goals: [...prev.goals, value],
      }));
    } else {
      setHealthFormData((prev) => ({
        ...prev,
        goals: prev.goals.filter((goal) => goal !== value),
      }));
    }
  };

  // Handle profile form submission
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMemberData(formData);
    setIsEditingProfile(false);
    // In a real app, this would make an API call to update the profile
  };

  // Handle health form submission
  const handleHealthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHealthData(healthFormData);
    setIsEditingHealth(false);
    // In a real app, this would make an API call to update the health data
  };

  // Cancel profile editing
  const cancelProfileEdit = () => {
    setFormData(memberData);
    setIsEditingProfile(false);
  };

  // Cancel health editing
  const cancelHealthEdit = () => {
    setHealthFormData(healthData);
    setIsEditingHealth(false);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Hồ sơ thành viên</h1>
          <div className="flex space-x-2">
            <button className="btn btn-outline flex items-center">
              <ArrowPathIcon className="h-5 w-5 mr-2" />
              Làm mới
            </button>
            <button className="btn btn-primary flex items-center">
              <BookmarkIcon className="h-5 w-5 mr-2" />
              Đặt lịch mới
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Personal information */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg mb-6">
              <div className="px-6 py-5 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Thông tin cá nhân</h2>
                  {!isEditingProfile && (
                    <button
                      onClick={() => setIsEditingProfile(true)}
                      className="text-primary hover:text-primary/80 flex items-center"
                    >
                      <PencilIcon className="h-5 w-5 mr-1" />
                      Chỉnh sửa
                    </button>
                  )}
                </div>
              </div>

              <div className="px-6 py-5">
                {isEditingProfile ? (
                  <form onSubmit={handleProfileSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Tên
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="input"
                          value={formData.firstName}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Họ
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="input"
                          value={formData.lastName}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="input"
                          value={formData.email}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="input"
                          value={formData.phone}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Địa chỉ
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          className="input"
                          value={formData.address}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Thành phố
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="input"
                          value={formData.city}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dateOfBirth"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Ngày sinh
                        </label>
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          className="input"
                          value={formData.dateOfBirth}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="gender"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Giới tính
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          className="input"
                          value={formData.gender}
                          onChange={handleProfileChange}
                        >
                          <option value="male">Nam</option>
                          <option value="female">Nữ</option>
                          <option value="other">Khác</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="emergencyContact"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Người liên hệ khẩn cấp
                        </label>
                        <input
                          type="text"
                          id="emergencyContact"
                          name="emergencyContact"
                          className="input"
                          value={formData.emergencyContact}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="emergencyPhone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          SĐT liên hệ khẩn cấp
                        </label>
                        <input
                          type="tel"
                          id="emergencyPhone"
                          name="emergencyPhone"
                          className="input"
                          value={formData.emergencyPhone}
                          onChange={handleProfileChange}
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                      <button type="button" onClick={cancelProfileEdit} className="btn btn-outline">
                        Hủy
                      </button>
                      <button type="submit" className="btn btn-primary flex items-center">
                        <CheckIcon className="h-5 w-5 mr-2" />
                        Lưu thay đổi
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Họ tên</h3>
                      <p className="mt-1 text-sm text-gray-900">
                        {memberData.firstName} {memberData.lastName}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <p className="mt-1 text-sm text-gray-900">{memberData.email}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Số điện thoại</h3>
                      <p className="mt-1 text-sm text-gray-900">{memberData.phone}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Địa chỉ</h3>
                      <p className="mt-1 text-sm text-gray-900">
                        {memberData.address}, {memberData.city}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Ngày sinh</h3>
                      <p className="mt-1 text-sm text-gray-900">{memberData.dateOfBirth}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Giới tính</h3>
                      <p className="mt-1 text-sm text-gray-900">
                        {memberData.gender === 'male'
                          ? 'Nam'
                          : memberData.gender === 'female'
                            ? 'Nữ'
                            : 'Khác'}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Người liên hệ khẩn cấp</h3>
                      <p className="mt-1 text-sm text-gray-900">{memberData.emergencyContact}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">SĐT liên hệ khẩn cấp</h3>
                      <p className="mt-1 text-sm text-gray-900">{memberData.emergencyPhone}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Health and Fitness Information */}
            <div className="bg-white shadow rounded-lg mb-6">
              <div className="px-6 py-5 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">
                    Thông tin sức khỏe và thể chất
                  </h2>
                  {!isEditingHealth && (
                    <button
                      onClick={() => setIsEditingHealth(true)}
                      className="text-primary hover:text-primary/80 flex items-center"
                    >
                      <PencilIcon className="h-5 w-5 mr-1" />
                      Chỉnh sửa
                    </button>
                  )}
                </div>
              </div>

              <div className="px-6 py-5">
                {isEditingHealth ? (
                  <form onSubmit={handleHealthSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="height"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Chiều cao (cm)
                        </label>
                        <input
                          type="number"
                          id="height"
                          name="height"
                          className="input"
                          value={healthFormData.height}
                          onChange={handleHealthChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="weight"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Cân nặng (kg)
                        </label>
                        <input
                          type="number"
                          id="weight"
                          name="weight"
                          className="input"
                          value={healthFormData.weight}
                          onChange={handleHealthChange}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <p className="block text-sm font-medium text-gray-700 mb-2">
                          Mục tiêu tập luyện
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            'Weight Loss',
                            'Muscle Gain',
                            'Improve Flexibility',
                            'Cardio Fitness',
                            'General Health',
                            'Strength Training',
                          ].map((goal) => (
                            <label key={goal} className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name="goals"
                                value={goal}
                                checked={healthFormData.goals.includes(goal)}
                                onChange={handleGoalChange}
                                className="form-checkbox h-4 w-4 text-primary"
                              />
                              <span className="ml-2 text-sm text-gray-700">{goal}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label
                          htmlFor="medicalConditions"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Tình trạng y tế
                        </label>
                        <textarea
                          id="medicalConditions"
                          name="medicalConditions"
                          rows={2}
                          className="input"
                          value={healthFormData.medicalConditions}
                          onChange={handleHealthChange}
                        ></textarea>
                      </div>

                      <div className="md:col-span-2">
                        <label
                          htmlFor="allergies"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Dị ứng
                        </label>
                        <textarea
                          id="allergies"
                          name="allergies"
                          rows={2}
                          className="input"
                          value={healthFormData.allergies}
                          onChange={handleHealthChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                      <button type="button" onClick={cancelHealthEdit} className="btn btn-outline">
                        Hủy
                      </button>
                      <button type="submit" className="btn btn-primary flex items-center">
                        <CheckIcon className="h-5 w-5 mr-2" />
                        Lưu thay đổi
                      </button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-gray-500">Chiều cao</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                          {healthData.height} cm
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-gray-500">Cân nặng</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                          {healthData.weight} kg
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-gray-500">BMI</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{healthData.bmi}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Mục tiêu tập luyện</h3>
                      <div className="flex flex-wrap gap-2">
                        {healthData.goals.map((goal) => (
                          <span
                            key={goal}
                            className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                          >
                            {goal}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Tình trạng y tế</h3>
                        <p className="mt-1 text-sm text-gray-900">{healthData.medicalConditions}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Dị ứng</h3>
                        <p className="mt-1 text-sm text-gray-900">{healthData.allergies}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-500">Đánh giá cuối cùng</h3>
                      <p className="mt-1 text-sm text-gray-900">{healthData.lastAssessment}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-white shadow rounded-lg mb-6">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Lịch sử hoạt động gần đây</h2>
              </div>

              <div className="px-6 py-5">
                <ul className="divide-y divide-gray-200">
                  {recentActivity.map((activity, index) => (
                    <li key={index} className="py-3 flex items-center">
                      <div
                        className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                          activity.type === 'check-in'
                            ? 'bg-green-100'
                            : activity.type === 'class'
                              ? 'bg-blue-100'
                              : 'bg-purple-100'
                        }`}
                      >
                        {activity.type === 'check-in' ? (
                          <CheckIcon className="h-5 w-5 text-green-600" />
                        ) : activity.type === 'class' ? (
                          <UserIcon className="h-5 w-5 text-blue-600" />
                        ) : (
                          <ClockIcon className="h-5 w-5 text-purple-600" />
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.type === 'check-in'
                            ? 'Check-in vào phòng tập'
                            : activity.type === 'class'
                              ? `Tham gia lớp "${activity.name}"`
                              : `Buổi PT với ${activity.trainer}`}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.date} lúc {activity.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column: Membership info and upcoming schedule */}
          <div className="lg:col-span-1 space-y-6">
            {/* Membership and Billing */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Thông tin thành viên</h2>
              </div>

              <div className="px-6 py-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Gói thành viên</h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-white">
                    {memberData.membershipType}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Trạng thái</p>
                    <p
                      className={`text-sm font-medium ${
                        memberData.membershipStatus === 'Active' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {memberData.membershipStatus === 'Active' ? 'Đang hoạt động' : 'Hết hạn'}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Ngày tham gia</p>
                    <p className="text-sm text-gray-900">{memberData.memberSince}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Ngày hết hạn</p>
                    <p className="text-sm text-gray-900">{memberData.expiryDate}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Buổi PT còn lại</p>
                    <p className="text-sm text-gray-900">{memberData.remainingPT}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <button className="btn btn-primary flex items-center justify-center">
                    <CreditCardIcon className="h-5 w-5 mr-2" />
                    Gia hạn thành viên
                  </button>
                  <button className="btn btn-outline flex items-center justify-center">
                    <BookmarkIcon className="h-5 w-5 mr-2" />
                    Mua thêm buổi PT
                  </button>
                </div>
              </div>
            </div>

            {/* Upcoming Schedule */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Lịch sắp tới</h2>
              </div>

              <div className="px-6 py-5">
                <ul className="divide-y divide-gray-200">
                  {upcomingSchedule.map((event, index) => (
                    <li key={index} className="py-3">
                      <div className="flex items-center">
                        <div
                          className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                            event.type === 'class' ? 'bg-blue-100' : 'bg-purple-100'
                          }`}
                        >
                          {event.type === 'class' ? (
                            <UserIcon className="h-5 w-5 text-blue-600" />
                          ) : (
                            <ClockIcon className="h-5 w-5 text-purple-600" />
                          )}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {event.type === 'class' ? event.name : `Buổi PT với ${event.trainer}`}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            <p>
                              {event.date} lúc {event.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {upcomingSchedule.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">Không có sự kiện sắp tới</p>
                )}

                <div className="mt-6">
                  <button className="w-full btn btn-outline flex items-center justify-center">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Xem lịch đầy đủ
                  </button>
                </div>
              </div>
            </div>

            {/* Goals Progress */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Tiến độ mục tiêu</h2>
              </div>

              <div className="px-6 py-5">
                <div className="space-y-4">
                  {goalProgress.map((goal, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium text-gray-700">{goal.name}</p>
                        <p className="text-sm font-medium text-gray-700">
                          {goal.current} / {goal.target}
                        </p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${(goal.current / goal.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="w-full btn btn-outline flex items-center justify-center">
                    <ChartBarIcon className="h-5 w-5 mr-2" />
                    Xem báo cáo đầy đủ
                  </button>
                </div>
              </div>
            </div>

            {/* Download Documents */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Tài liệu</h2>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Chính sách thành viên</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Hướng dẫn sử dụng thiết bị</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Lịch các lớp học</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
