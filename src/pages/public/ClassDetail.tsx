import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ClockIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

// This would be fetched from an API in a real application
const classData = {
  cardio1: {
    id: 'cardio1',
    name: 'Cardio Blast',
    category: 'cardio',
    difficulty: 'intermediate',
    duration: 45,
    capacity: 20,
    instructor: {
      id: 2,
      name: 'Anna Smith',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4.8,
    },
    schedule: [
      { day: 'Monday', time: '8:00 AM' },
      { day: 'Wednesday', time: '8:00 AM' },
      { day: 'Friday', time: '8:00 AM' },
    ],
    description:
      'Cardio Blast là một lớp học nhịp độ cao kết hợp các bài tập cardio mạnh mẽ để đốt cháy calo và cải thiện sức khỏe tim mạch. Lớp học này phù hợp cho người có thể lực trung bình muốn nâng cao độ bền sức bền.',
    benefits: [
      'Đốt cháy nhiều calo',
      'Cải thiện sức khỏe tim mạch',
      'Tăng cường sức bền',
      'Giảm căng thẳng',
      'Cải thiện tâm trạng',
    ],
    requirements: ['Giày thể thao', 'Nước uống', 'Khăn mặt'],
    image:
      'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    reviews: 128,
    relatedClasses: ['hiit1', 'cardio2', 'strength1'],
  },
  yoga1: {
    id: 'yoga1',
    name: 'Morning Yoga Flow',
    category: 'yoga',
    difficulty: 'beginner',
    duration: 60,
    capacity: 15,
    instructor: {
      id: 2,
      name: 'Lisa Chen',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      rating: 4.9,
    },
    schedule: [
      { day: 'Tuesday', time: '7:00 AM' },
      { day: 'Thursday', time: '7:00 AM' },
      { day: 'Saturday', time: '9:00 AM' },
    ],
    description:
      'Morning Yoga Flow là lớp học nhẹ nhàng giúp khởi động ngày mới với các động tác yoga kết hợp với kỹ thuật thở. Phù hợp cho mọi cấp độ, đặc biệt là người mới bắt đầu muốn tăng cường sự linh hoạt và thư giãn.',
    benefits: [
      'Tăng cường sự linh hoạt',
      'Cải thiện tư thế',
      'Giảm căng thẳng',
      'Tăng cường sức mạnh',
      'Cải thiện sự tập trung',
    ],
    requirements: ['Thảm yoga', 'Nước uống', 'Trang phục thoải mái'],
    image:
      'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    reviews: 95,
    relatedClasses: ['pilates1', 'yoga2', 'strength2'],
  },
  hiit1: {
    id: 'hiit1',
    name: 'HIIT Challenge',
    category: 'hiit',
    difficulty: 'advanced',
    duration: 30,
    capacity: 12,
    instructor: {
      id: 3,
      name: 'Michael Chen',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4.7,
    },
    schedule: [
      { day: 'Monday', time: '6:00 PM' },
      { day: 'Wednesday', time: '6:00 PM' },
      { day: 'Friday', time: '6:00 PM' },
    ],
    description:
      'HIIT Challenge là một buổi tập cường độ cao với các đợt bùng nổ hoạt động cường độ cao xen kẽ với thời gian nghỉ ngơi ngắn. Khóa học này dành cho người có kinh nghiệm tập luyện muốn đạt được kết quả tối đa trong thời gian ngắn.',
    benefits: [
      'Đốt cháy calo tối đa',
      'Tăng tốc độ trao đổi chất',
      'Cải thiện sức mạnh và sức bền',
      'Tiếp tục đốt cháy calo sau khi tập',
      'Không cần thiết bị phức tạp',
    ],
    requirements: ['Giày thể thao', 'Nước uống', 'Khăn mặt', 'Khả năng vận động tốt'],
    image:
      'https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviews: 87,
    relatedClasses: ['cardio1', 'strength1', 'hiit2'],
  },
};

const ClassDetail = () => {
  const { classId } = useParams<{ classId: string }>();
  const [classInfo, setClassInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    // Simulate API call with setTimeout
    setLoading(true);
    setTimeout(() => {
      if (classId && classData[classId as keyof typeof classData]) {
        setClassInfo(classData[classId as keyof typeof classData]);
      }
      setLoading(false);
    }, 500);
  }, [classId]);

  const handleBooking = () => {
    // In a real app, this would send a request to the server
    setBookingSuccess(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setBookingSuccess(false);
    }, 3000);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse flex flex-col">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded w-full mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
        </div>
      </div>
    );
  }

  if (!classInfo) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Không tìm thấy lớp học</h1>
          <p className="text-lg text-gray-600 mb-8">
            Lớp học bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
          <Link to="/classes" className="btn btn-primary">
            Quay lại danh sách lớp học
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb and back link */}
        <div className="mb-6">
          <Link to="/classes" className="flex items-center text-primary hover:text-primary/80">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            <span>Quay lại danh sách lớp học</span>
          </Link>
        </div>

        {/* Hero section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-10">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={classInfo.image}
                alt={classInfo.name}
                className="h-full w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-2">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mr-2 ${
                    classInfo.category === 'cardio'
                      ? 'bg-red-100 text-red-800'
                      : classInfo.category === 'yoga'
                        ? 'bg-blue-100 text-blue-800'
                        : classInfo.category === 'hiit'
                          ? 'bg-orange-100 text-orange-800'
                          : classInfo.category === 'strength'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {classInfo.category.charAt(0).toUpperCase() + classInfo.category.slice(1)}
                </span>
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    classInfo.difficulty === 'beginner'
                      ? 'bg-green-100 text-green-800'
                      : classInfo.difficulty === 'intermediate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                  }`}
                >
                  {classInfo.difficulty === 'beginner'
                    ? 'Người mới'
                    : classInfo.difficulty === 'intermediate'
                      ? 'Trung cấp'
                      : 'Nâng cao'}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-3">{classInfo.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(classInfo.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {classInfo.rating} ({classInfo.reviews} đánh giá)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{classInfo.duration} phút</span>
                </div>
                <div className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Tối đa {classInfo.capacity} người</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{classInfo.schedule.length} buổi/tuần</span>
                </div>
                <div className="flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>
                    {classInfo.difficulty === 'beginner'
                      ? 'Dễ'
                      : classInfo.difficulty === 'intermediate'
                        ? 'Trung bình'
                        : 'Khó'}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Giáo viên</h3>
                <Link to={`/trainers/${classInfo.instructor.id}`} className="flex items-center">
                  <img
                    src={classInfo.instructor.image}
                    alt={classInfo.instructor.name}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{classInfo.instructor.name}</p>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1">
                          {classInfo.instructor.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Chọn thời gian</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {classInfo.schedule.map((time: any, index: number) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-md border ${
                        selectedTime === `${time.day}-${time.time}`
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedTime(`${time.day}-${time.time}`)}
                    >
                      <div className="font-medium">{time.day}</div>
                      <div className="text-sm">{time.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                className={`w-full btn ${selectedTime ? 'btn-primary' : 'btn-outline opacity-50 cursor-not-allowed'}`}
                disabled={!selectedTime}
                onClick={handleBooking}
              >
                Đặt lịch ngay
              </button>

              {bookingSuccess && (
                <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                  <strong className="font-bold">Thành công! </strong>
                  <span className="block sm:inline">Bạn đã đặt lịch thành công.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description and details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Mô tả lớp học</h2>
              <p className="text-gray-700 mb-6">{classInfo.description}</p>

              <h3 className="text-lg font-semibold mb-3">Lợi ích</h3>
              <ul className="space-y-2 mb-6">
                {classInfo.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-3">Yêu cầu</h3>
              <div className="flex flex-wrap gap-2">
                {classInfo.requirements.map((req: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews would go here - would be implemented with backend */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Đánh giá từ học viên</h2>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  Xem tất cả
                </button>
              </div>

              {/* Sample reviews */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/12.jpg"
                      alt="User"
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">Mai Phương</p>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">2 tuần trước</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Lớp học rất năng động và hiệu quả. Giáo viên rất nhiệt tình và luôn hỗ trợ khi
                    tôi gặp khó khăn với một số động tác. Tôi đã đạt được mục tiêu cải thiện sức bền
                    của mình sau 1 tháng tham gia.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User"
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">Minh Tuấn</p>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">1 tháng trước</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Tôi rất thích buổi học này. Cường độ vừa phải và phù hợp với người mới như tôi.
                    Tuy nhiên, đôi khi lớp hơi đông nên khó để giáo viên có thể hỗ trợ tất cả mọi
                    người.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="User"
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">Thu Hà</p>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">2 tháng trước</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Một trong những lớp học tốt nhất mà tôi từng tham gia! Giáo viên rất chuyên
                    nghiệp và nhiệt tình. Các bài tập được thiết kế rất khoa học và hiệu quả. Tôi đã
                    giới thiệu cho nhiều bạn bè của mình.
                  </p>
                </div>
              </div>

              {/* Add review form would go here */}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-20">
              <h2 className="text-xl font-bold mb-6">Lịch học trong tuần</h2>
              <div className="space-y-4">
                {classInfo.schedule.map((time: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">{time.day}</p>
                      <p className="text-sm text-gray-500">{time.time}</p>
                    </div>
                    <button
                      className={`px-3 py-1 rounded text-sm ${
                        selectedTime === `${time.day}-${time.time}`
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedTime(`${time.day}-${time.time}`)}
                    >
                      {selectedTime === `${time.day}-${time.time}` ? 'Đã chọn' : 'Chọn'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-3">Các lớp học liên quan</h3>
                <div className="space-y-3">
                  {classInfo.relatedClasses.map((relClass: string, index: number) => {
                    const relatedClass = classData[relClass as keyof typeof classData];
                    if (!relatedClass) return null;
                    return (
                      <Link
                        key={index}
                        to={`/classes/${relClass}`}
                        className="flex items-center p-2 hover:bg-gray-50 rounded-lg"
                      >
                        <img
                          src={relatedClass.image}
                          alt={relatedClass.name}
                          className="h-12 w-12 object-cover rounded mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{relatedClass.name}</p>
                          <p className="text-xs text-gray-500">{relatedClass.duration} phút</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
