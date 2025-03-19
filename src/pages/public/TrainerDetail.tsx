import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ClockIcon,
  AcademicCapIcon,
  CalendarIcon,
  StarIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

// This would be fetched from an API in a real application
const trainersData = {
  1: {
    id: 1,
    name: "Alex Johnson",
    title: "Huấn luyện viên thể hình chuyên nghiệp",
    specialties: ["strength", "hiit"],
    experience: 8,
    rating: 4.9,
    reviews: 156,
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    description:
      "Alex là một huấn luyện viên với hơn 8 năm kinh nghiệm trong lĩnh vực thể hình và HIIT. Anh ấy đam mê giúp mọi người đạt được mục tiêu sức khỏe của họ và tin rằng việc tập luyện đúng cách là chìa khóa để có một cuộc sống lâu dài và khỏe mạnh.",
    certifications: [
      "Chứng nhận Huấn luyện viên Cá nhân NASM",
      "Chuyên gia Dinh dưỡng Thể thao ISSN",
      "Chứng nhận HIIT Chuyên nghiệp",
      "Chứng nhận Cấp cứu CPR/AED",
    ],
    schedule: [
      { day: "Thứ Hai", hours: "7:00 - 15:00" },
      { day: "Thứ Ba", hours: "7:00 - 15:00" },
      { day: "Thứ Tư", hours: "7:00 - 15:00" },
      { day: "Thứ Năm", hours: "7:00 - 15:00" },
      { day: "Thứ Sáu", hours: "7:00 - 15:00" },
    ],
    expertise: [
      {
        name: "Strength Training",
        level: 95,
      },
      {
        name: "HIIT",
        level: 90,
      },
      {
        name: "Nutrition",
        level: 85,
      },
      {
        name: "Bodybuilding",
        level: 92,
      },
    ],
    classes: ["strength101", "hiit1", "strength201"],
    clients: [
      {
        name: "John Smith",
        testimonial:
          "Tôi đã tăng cường sức mạnh đáng kể sau 3 tháng làm việc với Alex. Kiến thức và sự động viên của anh ấy thật tuyệt vời!",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        stars: 5,
      },
      {
        name: "Sarah Johnson",
        testimonial:
          "Alex đã giúp tôi đạt được mục tiêu giảm cân và cải thiện sức khỏe tổng thể. Các buổi tập HIIT của anh ấy đầy thử thách nhưng rất hiệu quả.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: 5,
      },
      {
        name: "Michael Chen",
        testimonial:
          "Đào tạo với Alex đã thay đổi cuộc sống của tôi. Tôi không chỉ khỏe mạnh hơn mà còn tự tin hơn. Anh ấy thực sự hiểu biết và luôn điều chỉnh các bài tập phù hợp với nhu cầu của tôi.",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        stars: 4,
      },
    ],
  },
  2: {
    id: 2,
    name: "Emily Davis",
    title: "Huấn luyện viên Yoga & Pilates",
    specialties: ["yoga", "pilates"],
    experience: 6,
    rating: 4.8,
    reviews: 124,
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    description:
      "Emily là huấn luyện viên Yoga và Pilates đã qua chứng nhận với 6 năm kinh nghiệm. Cô ấy tập trung vào việc giúp mọi người tìm thấy sự cân bằng, sức mạnh và sự linh hoạt thông qua thực hành chánh niệm. Cách tiếp cận toàn diện của cô đối với sức khỏe và thể chất đã giúp nhiều người cải thiện tư thế và giảm căng thẳng.",
    certifications: [
      "Chứng nhận Giáo viên Yoga RYT-500",
      "Chứng nhận Hướng dẫn viên Pilates Toàn diện",
      "Chuyên gia Yoga Trị liệu",
      "Chứng nhận Meditation Mindfulness",
    ],
    schedule: [
      { day: "Thứ Hai", hours: "9:00 - 17:00" },
      { day: "Thứ Ba", hours: "9:00 - 17:00" },
      { day: "Thứ Tư", hours: "9:00 - 17:00" },
      { day: "Thứ Năm", hours: "Nghỉ" },
      { day: "Thứ Sáu", hours: "9:00 - 17:00" },
      { day: "Thứ Bảy", hours: "9:00 - 12:00" },
    ],
    expertise: [
      {
        name: "Yoga",
        level: 95,
      },
      {
        name: "Pilates",
        level: 90,
      },
      {
        name: "Meditation",
        level: 85,
      },
      {
        name: "Stretching",
        level: 92,
      },
    ],
    classes: ["yoga1", "pilates1", "meditation101"],
    clients: [
      {
        name: "Jennifer Wu",
        testimonial:
          "Các lớp học Yoga của Emily đã giúp tôi tìm thấy bình yên và cải thiện sự linh hoạt. Năng lượng tích cực của cô ấy thật truyền cảm hứng!",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        stars: 5,
      },
      {
        name: "David Robinson",
        testimonial:
          "Trước đây tôi chưa bao giờ nghĩ mình là người phù hợp với Yoga, nhưng Emily đã thay đổi cách nhìn của tôi. Các hướng dẫn rõ ràng và kiên nhẫn của cô ấy đã giúp tôi tiến bộ rất nhiều.",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        stars: 4,
      },
    ],
  },
  3: {
    id: 3,
    name: "Michael Chen",
    title: "Chuyên gia HIIT & Cardio",
    specialties: ["hiit", "cardio"],
    experience: 5,
    rating: 4.7,
    reviews: 98,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Michael là một chuyên gia về HIIT và Cardio, chuyên về các bài tập cường độ cao giúp đốt cháy calo tối đa và cải thiện sức khỏe tim mạch. Với nền tảng về khoa học thể thao, anh ấy thiết kế các chương trình tập luyện dựa trên bằng chứng để mang lại kết quả tối ưu cho từng cá nhân.",
    certifications: [
      "Chứng nhận Huấn luyện viên Cá nhân ACE",
      "Chuyên gia HIIT Chứng nhận",
      "Chứng nhận Khoa học Thể thao và Dinh dưỡng",
      "Chứng nhận Cấp cứu CPR/AED",
    ],
    schedule: [
      { day: "Thứ Hai", hours: "14:00 - 22:00" },
      { day: "Thứ Ba", hours: "14:00 - 22:00" },
      { day: "Thứ Tư", hours: "Nghỉ" },
      { day: "Thứ Năm", hours: "14:00 - 22:00" },
      { day: "Thứ Sáu", hours: "14:00 - 22:00" },
      { day: "Thứ Bảy", hours: "9:00 - 15:00" },
    ],
    expertise: [
      {
        name: "HIIT",
        level: 98,
      },
      {
        name: "Cardio",
        level: 95,
      },
      {
        name: "Circuit Training",
        level: 90,
      },
      {
        name: "Sports Science",
        level: 85,
      },
    ],
    classes: ["hiit1", "cardio1", "hiitmax"],
    clients: [
      {
        name: "Emma Watson",
        testimonial:
          "Các buổi HIIT của Michael đã giúp tôi giảm 10kg trong 3 tháng. Các buổi tập đầy thử thách nhưng đáng giá!",
        image: "https://randomuser.me/api/portraits/women/66.jpg",
        stars: 5,
      },
      {
        name: "Thomas Harris",
        testimonial:
          "Tôi đã cải thiện đáng kể sức khỏe tim mạch kể từ khi tập luyện với Michael. Kiến thức chuyên môn và sự khích lệ của anh ấy đã giúp tôi vượt qua giới hạn của mình.",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        stars: 5,
      },
    ],
  },
};

const TrainerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [trainer, setTrainer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"about" | "schedule" | "classes" | "testimonials">("about");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingType, setBookingType] = useState("personal");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    // Simulate API call with setTimeout
    setLoading(true);
    setTimeout(() => {
      if (id) {
        // Chuyển đổi id từ string sang number và sử dụng nó làm key
        const numericId = parseInt(id, 10);
        if (!isNaN(numericId) && trainersData[numericId as keyof typeof trainersData]) {
          setTrainer(trainersData[numericId as keyof typeof trainersData]);
        }
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleBooking = () => {
    // In a real app, this would send a request to the server
    setBookingSuccess(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingDate("");
      setBookingTime("");
    }, 3000);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse flex flex-col">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="md:flex gap-8">
            <div className="md:w-1/3">
              <div className="h-64 bg-gray-200 rounded w-full mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!trainer) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Không tìm thấy huấn luyện viên</h1>
          <p className="text-lg text-gray-600 mb-8">Huấn luyện viên bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/trainers" className="btn btn-primary">
            Quay lại danh sách huấn luyện viên
          </Link>
        </div>
      </div>
    );
  }

  const visibleTestimonials = showAllTestimonials ? trainer.clients : trainer.clients.slice(0, 2);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb and back link */}
        <div className="mb-6">
          <Link to="/trainers" className="flex items-center text-primary hover:text-primary/80">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            <span>Quay lại danh sách huấn luyện viên</span>
          </Link>
        </div>

        {/* Trainer Profile Header */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-10">
          <div className="md:flex">
            <div className="md:w-1/3 p-6">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-72 w-72 object-cover rounded-full mx-auto shadow-lg"
              />
              <div className="mt-6 text-center">
                <div className="flex justify-center items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(trainer.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {trainer.rating} ({trainer.reviews} đánh giá)
                  </span>
                </div>
                <div className="flex justify-center flex-wrap gap-2 mt-4">
                  {trainer.specialties.map((specialty: string, index: number) => (
                    <span
                      key={index}
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full 
                        ${
                          specialty === "strength"
                            ? "bg-purple-100 text-purple-800"
                            : specialty === "cardio"
                            ? "bg-red-100 text-red-800"
                            : specialty === "yoga"
                            ? "bg-blue-100 text-blue-800"
                            : specialty === "pilates"
                            ? "bg-green-100 text-green-800"
                            : specialty === "hiit"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:border-l border-gray-100">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{trainer.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{trainer.title}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <AcademicCapIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{trainer.experience} năm kinh nghiệm</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{trainer.schedule.length} ngày/tuần</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{trainer.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {trainer.certifications.map((cert: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary flex-1">Đặt lịch huấn luyện</button>
                <button className="btn btn-outline flex-1">Liên hệ ngay</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  selectedTab === "about"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTab("about")}
              >
                Giới thiệu
              </button>
              <button
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  selectedTab === "schedule"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTab("schedule")}
              >
                Lịch làm việc
              </button>
              <button
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  selectedTab === "classes"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTab("classes")}
              >
                Lớp học
              </button>
              <button
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  selectedTab === "testimonials"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTab("testimonials")}
              >
                Đánh giá
              </button>
            </nav>
          </div>

          {/* Tab content */}
          <div className="p-6">
            {/* About */}
            {selectedTab === "about" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Chuyên môn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {trainer.expertise.map((skill: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-xl font-bold mb-4">Giáo dục & Chứng chỉ</h2>
                <ul className="space-y-3 mb-8">
                  {trainer.certifications.map((cert: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-bold mb-4">Phương pháp huấn luyện</h2>
                <p className="text-gray-700 mb-4">
                  {trainer.name} có một phương pháp toàn diện để huấn luyện, kết hợp các bài tập cường độ cao, kỹ thuật
                  đúng và hướng dẫn dinh dưỡng để đạt được kết quả tối ưu. Mỗi chương trình được cá nhân hóa để phù hợp
                  với mục tiêu, khả năng và lịch trình của từng khách hàng.
                </p>
                <p className="text-gray-700">
                  Dù bạn là người mới bắt đầu hay vận động viên có kinh nghiệm, {trainer.name} sẽ làm việc với bạn để
                  phát triển một kế hoạch giúp bạn đạt được mục tiêu của mình một cách an toàn và hiệu quả.
                </p>
              </div>
            )}

            {/* Schedule */}
            {selectedTab === "schedule" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-xl font-bold mb-4">Lịch làm việc hàng tuần</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {trainer.schedule.map((time: any, index: number) => (
                        <div key={index} className="flex p-3 border rounded-lg bg-white">
                          <div className="flex-1">
                            <p className="font-medium">{time.day}</p>
                            <p className={`text-sm ${time.hours === "Nghỉ" ? "text-red-500" : "text-gray-500"}`}>
                              {time.hours}
                            </p>
                          </div>
                          {time.hours !== "Nghỉ" && (
                            <button className="text-primary hover:text-primary/80 text-sm font-medium">Đặt lịch</button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">Chính sách đặt lịch</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Hủy lịch:</strong> Vui lòng hủy ít nhất 24 giờ trước buổi tập đã đặt lịch để tránh bị tính
                      phí.
                    </p>
                    <p>
                      <strong>Muộn giờ:</strong> Nếu bạn đến muộn, buổi tập của bạn vẫn sẽ kết thúc theo lịch trình để
                      không ảnh hưởng đến khách hàng tiếp theo.
                    </p>
                    <p>
                      <strong>Gói luyện tập:</strong> Các buổi tập phải được sử dụng trong vòng 60 ngày kể từ ngày mua.
                    </p>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <div className="bg-white border rounded-lg p-4 sticky top-20">
                    <h3 className="font-semibold text-lg mb-4">Đặt lịch huấn luyện</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Chọn ngày</label>
                        <input
                          type="date"
                          className="input"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Chọn thời gian</label>
                        <select className="input" value={bookingTime} onChange={(e) => setBookingTime(e.target.value)}>
                          <option value="">Chọn thời gian</option>
                          <option value="07:00">07:00</option>
                          <option value="08:00">08:00</option>
                          <option value="09:00">09:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Loại buổi tập</label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                              checked={bookingType === "personal"}
                              onChange={() => setBookingType("personal")}
                            />
                            <span className="ml-2 text-sm text-gray-700">Cá nhân</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                              checked={bookingType === "group"}
                              onChange={() => setBookingType("group")}
                            />
                            <span className="ml-2 text-sm text-gray-700">Nhóm</span>
                          </label>
                        </div>
                      </div>

                      <button
                        className={`w-full btn ${
                          bookingDate && bookingTime ? "btn-primary" : "btn-outline opacity-50 cursor-not-allowed"
                        }`}
                        disabled={!bookingDate || !bookingTime}
                        onClick={handleBooking}
                      >
                        Xác nhận đặt lịch
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
              </div>
            )}

            {/* Classes */}
            {selectedTab === "classes" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Lớp học cùng {trainer.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      id: "strength101",
                      name: "Strength Fundamentals",
                      image:
                        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      duration: "60 phút",
                      level: "Beginner",
                      time: "Thứ Hai, Thứ Tư, Thứ Sáu - 8:00",
                    },
                    {
                      id: "hiit1",
                      name: "HIIT Challenge",
                      image:
                        "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      duration: "30 phút",
                      level: "Advanced",
                      time: "Thứ Hai, Thứ Tư, Thứ Sáu - 17:00",
                    },
                    {
                      id: "yoga1",
                      name: "Morning Yoga Flow",
                      image:
                        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      duration: "60 phút",
                      level: "All Levels",
                      time: "Thứ Ba, Thứ Năm, Thứ Bảy - 7:00",
                    },
                  ].map((cls) => (
                    <Link
                      key={cls.id}
                      to={`/classes/${cls.id}`}
                      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
                    >
                      <img src={cls.image} alt={cls.name} className="w-full h-44 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{cls.name}</h3>
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                          <span className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {cls.duration}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              cls.level === "Beginner"
                                ? "bg-green-100 text-green-800"
                                : cls.level === "Intermediate"
                                ? "bg-yellow-100 text-yellow-800"
                                : cls.level === "Advanced"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {cls.level}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {cls.time}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {selectedTab === "testimonials" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Nhận xét từ học viên</h2>
                <div className="space-y-6">
                  {visibleTestimonials.map((client: any, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <img src={client.image} alt={client.name} className="h-12 w-12 rounded-full mr-4" />
                        <div>
                          <h3 className="font-medium text-gray-900">{client.name}</h3>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <StarIconSolid
                                key={i}
                                className={`h-4 w-4 ${i < client.stars ? "text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{client.testimonial}</p>
                    </div>
                  ))}
                </div>
                {trainer.clients.length > 2 && (
                  <div className="mt-6 text-center">
                    <button className="btn btn-outline" onClick={() => setShowAllTestimonials(!showAllTestimonials)}>
                      {showAllTestimonials ? "Hiển thị ít hơn" : `Xem thêm ${trainer.clients.length - 2} nhận xét`}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetail;
