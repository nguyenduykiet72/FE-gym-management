import { useState } from "react";
import { Link } from "react-router-dom";
import { ClockIcon, UserGroupIcon, CalendarIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const classCategories = [
  { id: "all", name: "Tất cả" },
  { id: "cardio", name: "Cardio" },
  { id: "strength", name: "Sức mạnh" },
  { id: "yoga", name: "Yoga" },
  { id: "hiit", name: "HIIT" },
  { id: "dance", name: "Dance" },
  { id: "pilates", name: "Pilates" },
];

const classDifficulties = [
  { id: "all", name: "Tất cả" },
  { id: "beginner", name: "Người mới" },
  { id: "intermediate", name: "Trung cấp" },
  { id: "advanced", name: "Nâng cao" },
];

const classTimeframes = [
  { id: "all", name: "Tất cả" },
  { id: "morning", name: "Buổi sáng" },
  { id: "afternoon", name: "Buổi chiều" },
  { id: "evening", name: "Buổi tối" },
];

const classesData = [
  {
    id: 1,
    title: "Yoga for Beginners",
    category: "yoga",
    difficulty: "beginner",
    timeframe: "morning",
    time: "7:00 AM - 8:00 AM",
    days: "Thứ 2, Thứ 4, Thứ 6",
    trainer: "Anna Smith",
    image:
    "/trainer01.avif",
    description:
      "Khóa học dành cho người mới bắt đầu tập yoga. Tập trung vào các tư thế cơ bản, kỹ thuật thở và thư giãn.",
    maxParticipants: 15,
  },
  {
    id: 2,
    title: "HIIT Extreme",
    category: "hiit",
    difficulty: "advanced",
    timeframe: "evening",
    time: "6:30 PM - 7:30 PM",
    days: "Thứ 2, Thứ 3, Thứ 5",
    trainer: "Michael Chen",
    image:
    "/trainer02.avif",
    description: "Bài tập cường độ cao giúp đốt cháy mỡ nhanh chóng. Bao gồm các bài tập đẩy, kéo, nhảy và chạy.",
    maxParticipants: 12,
  },
  {
    id: 3,
    title: "Pilates Core",
    category: "pilates",
    difficulty: "intermediate",
    timeframe: "afternoon",
    time: "1:00 PM - 2:00 PM",
    days: "Thứ 2, Thứ 4, Thứ 6",
    trainer: "Lisa Rodriguez",
    image:
    "/trainer03.avif",
    description: "Tập trung vào phát triển cơ bụng, lưng và đai hông. Giúp cải thiện tư thế và giảm đau lưng.",
    maxParticipants: 15,
  },
  {
    id: 4,
    title: "Cardio Dance",
    category: "dance",
    difficulty: "beginner",
    timeframe: "evening",
    time: "5:30 PM - 6:30 PM",
    days: "Thứ 3, Thứ 5, Thứ 7",
    trainer: "David Wilson",
    image:
    "/trainer04.avif",
    description: "Kết hợp nhảy và vận động toàn thân. Vui nhộn, năng động và hiệu quả để đốt cháy calo.",
    maxParticipants: 20,
  },
  {
    id: 5,
    title: "Strength & Conditioning",
    category: "strength",
    difficulty: "intermediate",
    timeframe: "morning",
    time: "8:30 AM - 9:30 AM",
    days: "Thứ 2, Thứ 4, Thứ 6",
    trainer: "Tom Johnson",
    image:
    "/trainer02.avif",
    description: "Phát triển sức mạnh và độ bền với các bài tập kháng lực. Sử dụng tạ, máy tập và trọng lượng cơ thể.",
    maxParticipants: 15,
  },
  {
    id: 6,
    title: "Cardio Kickboxing",
    category: "cardio",
    difficulty: "intermediate",
    timeframe: "evening",
    time: "7:00 PM - 8:00 PM",
    days: "Thứ 2, Thứ 4, Thứ 6",
    trainer: "Sarah Martinez",
    image:
    "/trainer03.avif",
    description: "Kết hợp kỹ thuật võ thuật với cardio. Giúp rèn luyện sức mạnh, tốc độ và phản xạ.",
    maxParticipants: 18,
  },
  {
    id: 7,
    title: "Advanced Yoga Flow",
    category: "yoga",
    difficulty: "advanced",
    timeframe: "morning",
    time: "6:00 AM - 7:00 AM",
    days: "Thứ 2, Thứ 4, Thứ 6",
    trainer: "Anna Smith",
    image:
    "/trainer01.avif",
    description: "Dành cho người có kinh nghiệm tập yoga. Tập trung vào các tư thế phức tạp và kỹ thuật thở nâng cao.",
    maxParticipants: 12,
  },
  {
    id: 8,
    title: "Circuit Training",
    category: "strength",
    difficulty: "advanced",
    timeframe: "afternoon",
    time: "3:30 PM - 4:30 PM",
    days: "Thứ 2, Thứ 4, Thứ 6",
    trainer: "Tom Johnson",
    image:
    "/trainer04.avif",
    description: "Tập luyện theo vòng với nhiều trạm khác nhau. Kết hợp cardio và sức mạnh để đốt cháy mỡ hiệu quả.",
    maxParticipants: 15,
  },
];

const Classes = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredClasses = classesData.filter((cls) => {
    return (
      (selectedCategory === "all" || cls.category === selectedCategory) &&
      (selectedDifficulty === "all" || cls.difficulty === selectedDifficulty) &&
      (selectedTimeframe === "all" || cls.timeframe === selectedTimeframe)
    );
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-dark to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Các lớp tập luyện</h1>
            <p className="mt-6 text-xl text-gray-300">
              Khám phá đa dạng các lớp tập luyện do đội ngũ huấn luyện viên chuyên nghiệp của chúng tôi giảng dạy
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">{filteredClasses.length} lớp học</h2>

            <button className="md:hidden flex items-center text-gray-700 hover:text-primary" onClick={toggleFilters}>
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-1" />
              Bộ lọc
            </button>

            <div className="hidden md:flex space-x-4">
              {/* Category Filter */}
              <div>
                <select
                  className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {classCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <select
                  className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {classDifficulties.map((difficulty) => (
                    <option key={difficulty.id} value={difficulty.id}>
                      {difficulty.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeframe Filter */}
              <div>
                <select
                  className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                >
                  {classTimeframes.map((timeframe) => (
                    <option key={timeframe.id} value={timeframe.id}>
                      {timeframe.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 gap-4 md:hidden">
              {/* Category Filter */}
              <div>
                <label htmlFor="mobile-category" className="block text-sm font-medium text-gray-700">
                  Thể loại
                </label>
                <select
                  id="mobile-category"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {classCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label htmlFor="mobile-difficulty" className="block text-sm font-medium text-gray-700">
                  Cấp độ
                </label>
                <select
                  id="mobile-difficulty"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {classDifficulties.map((difficulty) => (
                    <option key={difficulty.id} value={difficulty.id}>
                      {difficulty.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeframe Filter */}
              <div>
                <label htmlFor="mobile-timeframe" className="block text-sm font-medium text-gray-700">
                  Thời gian
                </label>
                <select
                  id="mobile-timeframe"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                >
                  {classTimeframes.map((timeframe) => (
                    <option key={timeframe.id} value={timeframe.id}>
                      {timeframe.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Classes List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls) => (
              <div key={cls.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={cls.image} alt={cls.title} className="w-full h-56 object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{cls.title}</h3>
                  <p className="mt-2 text-gray-600">{cls.description}</p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <UserGroupIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <span>Huấn luyện viên: {cls.trainer}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <span>{cls.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <span>{cls.days}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${
                          cls.difficulty === "beginner"
                            ? "bg-green-100 text-green-800"
                            : cls.difficulty === "intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {cls.difficulty === "beginner"
                          ? "Người mới"
                          : cls.difficulty === "intermediate"
                          ? "Trung cấp"
                          : "Nâng cao"}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {classCategories.find((c) => c.id === cls.category)?.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{cls.maxParticipants} chỗ</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Sẵn sàng tham gia lớp học?</h2>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Đăng ký thành viên ngay hôm nay để tham gia các lớp học chất lượng cùng huấn luyện viên chuyên nghiệp.
          </p>
          <div className="mt-8">
            <Link
              to="/login"
              className="btn bg-white text-primary hover:bg-white/90 inline-flex items-center justify-center"
            >
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
