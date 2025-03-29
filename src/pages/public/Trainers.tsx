import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline';

type TrainerSpecialty = 'strength' | 'cardio' | 'yoga' | 'pilates' | 'hiit' | 'dance' | 'nutrition';

interface Trainer {
  id: number;
  name: string;
  title: string;
  specialties: TrainerSpecialty[];
  experience: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  certifications: string[];
  schedule: {
    day: string;
    hours: string;
  }[];
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: 'Tom Johnson',
    title: 'Chuyên gia Strength & Conditioning',
    specialties: ['strength', 'hiit'],
    experience: 10,
    rating: 4.9,
    reviews: 124,
    image: '/trainer02.avif',
    description:
      'Tom là chuyên gia về luyện tập sức mạnh với hơn 10 năm kinh nghiệm. Anh đặc biệt giỏi trong việc thiết kế các chương trình tập luyện cá nhân hóa để đạt hiệu quả tối đa.',
    certifications: [
      'NSCA Certified Strength and Conditioning Specialist',
      'ACE Personal Trainer',
      'TRX Suspension Training Specialist',
      'Precision Nutrition Level 2',
    ],
    schedule: [
      { day: 'Thứ Hai', hours: '7:00 - 15:00' },
      { day: 'Thứ Ba', hours: '7:00 - 15:00' },
      { day: 'Thứ Tư', hours: '12:00 - 20:00' },
      { day: 'Thứ Năm', hours: '7:00 - 15:00' },
      { day: 'Thứ Sáu', hours: '12:00 - 20:00' },
    ],
  },
  {
    id: 2,
    name: 'Anna Smith',
    title: 'Giáo viên Yoga & Mindfulness',
    specialties: ['yoga', 'pilates'],
    experience: 8,
    rating: 4.8,
    reviews: 98,
    image: '/trainer01.avif',
    description:
      'Anna là giáo viên yoga có chứng chỉ quốc tế với 8 năm kinh nghiệm. Cô chuyên dạy các lớp Vinyasa, Hatha và Yin yoga, tập trung vào tư thế đúng, hơi thở và thiền.',
    certifications: [
      'Yoga Alliance RYT-500',
      'Yin Yoga Certified',
      'Meditation Teacher Training',
      'Prenatal Yoga Certified',
    ],
    schedule: [
      { day: 'Thứ Hai', hours: '8:00 - 16:00' },
      { day: 'Thứ Ba', hours: '14:00 - 20:00' },
      { day: 'Thứ Tư', hours: '8:00 - 16:00' },
      { day: 'Thứ Sáu', hours: '8:00 - 16:00' },
      { day: 'Thứ Bảy', hours: '9:00 - 12:00' },
    ],
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Huấn luyện viên HIIT & Cardio',
    specialties: ['cardio', 'hiit'],
    experience: 6,
    rating: 4.7,
    reviews: 85,
    image: '/trainer03.avif',
    description:
      'Michael là một huấn luyện viên đầy năng lượng, chuyên về các bài tập cường độ cao và cardio. Phương pháp đào tạo của anh ấy luôn mang lại kết quả nhanh chóng và bền vững.',
    certifications: [
      'ACSM Certified Personal Trainer',
      'CrossFit Level 2 Trainer',
      'Spinning Instructor',
      'TRX Training Course',
    ],
    schedule: [
      { day: 'Thứ Hai', hours: '15:00 - 21:00' },
      { day: 'Thứ Ba', hours: '15:00 - 21:00' },
      { day: 'Thứ Tư', hours: '15:00 - 21:00' },
      { day: 'Thứ Năm', hours: '15:00 - 21:00' },
      { day: 'Thứ Bảy', hours: '10:00 - 16:00' },
    ],
  },
  {
    id: 4,
    name: 'Lisa Rodriguez',
    title: 'Chuyên gia Pilates & Kéo giãn',
    specialties: ['pilates', 'yoga'],
    experience: 9,
    rating: 4.9,
    reviews: 112,
    image: '/trainer04.avif',
    description:
      'Lisa là chuyên gia Pilates với hơn 9 năm kinh nghiệm. Cô tập trung vào việc cải thiện tư thế, tăng cường sức mạnh cốt lõi và linh hoạt cho các học viên ở mọi cấp độ.',
    certifications: [
      'Comprehensive Pilates Certification',
      'Balanced Body Pilates Instructor',
      'STOTT PILATES® Certified Instructor',
      'Flexibility Specialist Certification',
    ],
    schedule: [
      { day: 'Thứ Ba', hours: '8:00 - 16:00' },
      { day: 'Thứ Tư', hours: '12:00 - 20:00' },
      { day: 'Thứ Năm', hours: '8:00 - 16:00' },
      { day: 'Thứ Sáu', hours: '12:00 - 20:00' },
      { day: 'Chủ Nhật', hours: '9:00 - 14:00' },
    ],
  },
  {
    id: 5,
    name: 'David Wilson',
    title: 'Huấn luyện viên Dance Fitness',
    specialties: ['dance', 'cardio'],
    experience: 7,
    rating: 4.8,
    reviews: 92,
    image: '/trainer02.avif',
    description:
      'David là huấn luyện viên dance fitness sôi động với 7 năm kinh nghiệm. Anh chuyên các lớp Zumba, Hip-hop và các phong cách khiêu vũ hiện đại kết hợp với tập luyện cardio.',
    certifications: [
      'Zumba® Fitness Instructor',
      'AFAA Group Fitness Instructor',
      'Les Mills BODYJAM Certified',
      'Urban Dance Certification',
    ],
    schedule: [
      { day: 'Thứ Hai', hours: '16:00 - 21:00' },
      { day: 'Thứ Ba', hours: '16:00 - 21:00' },
      { day: 'Thứ Năm', hours: '16:00 - 21:00' },
      { day: 'Thứ Sáu', hours: '16:00 - 21:00' },
      { day: 'Thứ Bảy', hours: '10:00 - 15:00' },
    ],
  },
  {
    id: 6,
    name: 'Sarah Martinez',
    title: 'Huấn luyện viên Kickboxing & MMA',
    specialties: ['hiit', 'cardio'],
    experience: 6,
    rating: 4.7,
    reviews: 78,
    image: '/trainer04.avif',
    description:
      'Sarah là huấn luyện viên chuyên về kickboxing và các môn võ tổng hợp. Cô kết hợp kỹ thuật võ thuật với bài tập cardio cường độ cao để mang lại kết quả tối ưu.',
    certifications: [
      'NASM Certified Personal Trainer',
      'Muay Thai Level 2 Certification',
      'Kickboxing Instructor',
      'MMA Conditioning Coach',
    ],
    schedule: [
      { day: 'Thứ Hai', hours: '12:00 - 20:00' },
      { day: 'Thứ Ba', hours: '12:00 - 20:00' },
      { day: 'Thứ Tư', hours: '8:00 - 16:00' },
      { day: 'Thứ Năm', hours: '12:00 - 20:00' },
      { day: 'Thứ Bảy', hours: '9:00 - 14:00' },
    ],
  },
  {
    id: 7,
    name: 'Mark Thompson',
    title: 'Chuyên gia Dinh dưỡng Thể thao',
    specialties: ['nutrition', 'strength'],
    experience: 8,
    rating: 4.9,
    reviews: 105,
    image: '/trainer01.avif',
    description:
      'Mark là chuyên gia dinh dưỡng thể thao với 8 năm kinh nghiệm. Anh giúp các học viên xây dựng kế hoạch dinh dưỡng phù hợp với mục tiêu thể hình và sức khỏe cụ thể.',
    certifications: [
      'Precision Nutrition Level 2 Certified',
      'ISSN Sports Nutrition Specialist',
      'ACE Fitness Nutrition Specialist',
      'NASM Weight Loss Specialist',
    ],
    schedule: [
      { day: 'Thứ Hai', hours: '9:00 - 17:00' },
      { day: 'Thứ Tư', hours: '9:00 - 17:00' },
      { day: 'Thứ Năm', hours: '9:00 - 17:00' },
      { day: 'Thứ Sáu', hours: '9:00 - 17:00' },
      { day: 'Chủ Nhật', hours: '9:00 - 14:00' },
    ],
  },
  {
    id: 8,
    name: 'Emily Nguyen',
    title: 'Huấn luyện viên Cá nhân & Rehabilitation',
    specialties: ['strength', 'pilates'],
    experience: 7,
    rating: 4.8,
    reviews: 89,
    image: '/trainer02.avif',
    description:
      'Emily chuyên về phục hồi chức năng và huấn luyện cá nhân. Cô có kinh nghiệm làm việc với khách hàng sau chấn thương hoặc có vấn đề về cơ xương khớp.',
    certifications: [
      'NASM Corrective Exercise Specialist',
      'ACE Certified Personal Trainer',
      'Functional Movement Screen Certified',
      'Postural Restoration Trained',
    ],
    schedule: [
      { day: 'Thứ Hai', hours: '8:00 - 16:00' },
      { day: 'Thứ Ba', hours: '8:00 - 16:00' },
      { day: 'Thứ Tư', hours: '12:00 - 20:00' },
      { day: 'Thứ Sáu', hours: '8:00 - 16:00' },
      { day: 'Thứ Bảy', hours: '9:00 - 14:00' },
    ],
  },
];

const specialtyLabels: Record<TrainerSpecialty, string> = {
  strength: 'Sức Mạnh',
  cardio: 'Cardio',
  yoga: 'Yoga',
  pilates: 'Pilates',
  hiit: 'HIIT',
  dance: 'Dance',
  nutrition: 'Dinh Dưỡng',
};

const specialtyColorClasses: Record<TrainerSpecialty, string> = {
  strength: 'bg-blue-100 text-blue-800',
  cardio: 'bg-red-100 text-red-800',
  yoga: 'bg-green-100 text-green-800',
  pilates: 'bg-purple-100 text-purple-800',
  hiit: 'bg-orange-100 text-orange-800',
  dance: 'bg-pink-100 text-pink-800',
  nutrition: 'bg-yellow-100 text-yellow-800',
};

const Trainers = () => {
  const [selectedSpecialties, setSelectedSpecialties] = useState<TrainerSpecialty[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSpecialty = (specialty: TrainerSpecialty) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter((s) => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  const clearFilters = () => {
    setSelectedSpecialties([]);
    setSearchQuery('');
  };

  const filteredTrainers = trainers.filter((trainer) => {
    // Apply specialty filter
    const passesSpecialtyFilter =
      selectedSpecialties.length === 0 ||
      trainer.specialties.some((specialty) => selectedSpecialties.includes(specialty));

    // Apply search filter (case insensitive)
    const passesSearchFilter =
      !searchQuery ||
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.title.toLowerCase().includes(searchQuery.toLowerCase());

    return passesSpecialtyFilter && passesSearchFilter;
  });

  const allSpecialties = Object.keys(specialtyLabels) as TrainerSpecialty[];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-dark to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Đội ngũ huấn luyện viên
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Tập luyện cùng các huấn luyện viên chuyên nghiệp với nhiều năm kinh nghiệm trong các
              lĩnh vực fitness khác nhau
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-medium text-gray-900 mb-1">
                Tìm huấn luyện viên phù hợp
              </h2>
              <p className="text-sm text-gray-500">
                {filteredTrainers.length} huấn luyện viên được tìm thấy
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              {selectedSpecialties.length > 0 && (
                <button onClick={clearFilters} className="text-sm text-gray-700 hover:text-primary">
                  Xóa bộ lọc ({selectedSpecialties.length})
                </button>
              )}
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {allSpecialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => toggleSpecialty(specialty)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    selectedSpecialties.includes(specialty)
                      ? specialtyColorClasses[specialty]
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {specialtyLabels[specialty]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrainers.map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{trainer.name}</h3>
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">
                        {trainer.rating} ({trainer.reviews})
                      </span>
                    </div>
                  </div>
                  <p className="text-primary font-medium">{trainer.title}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${specialtyColorClasses[specialty]}`}
                      >
                        {specialtyLabels[specialty]}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-gray-600 line-clamp-3">{trainer.description}</p>

                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <AcademicCapIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{trainer.experience} năm kinh nghiệm</span>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      to={`/trainers/${trainer.id}`}
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      Xem chi tiết
                    </Link>
                    <Link
                      to="/login"
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
                    >
                      Đặt lịch
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Cách đặt lịch huấn luyện</h2>
            <p className="mt-4 text-lg text-gray-600">
              Quy trình đơn giản để bắt đầu luyện tập cùng huấn luyện viên của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Chọn huấn luyện viên</h3>
              <p className="mt-2 text-gray-600">
                Dựa trên chuyên môn, lịch trình và đánh giá để chọn huấn luyện viên phù hợp với nhu
                cầu của bạn.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Đặt lịch</h3>
              <p className="mt-2 text-gray-600">
                Đăng nhập tài khoản và chọn ngày, giờ phù hợp với bạn trong lịch trình của huấn
                luyện viên.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Tận hưởng buổi tập</h3>
              <p className="mt-2 text-gray-600">
                Đến đúng giờ và tận hưởng buổi tập chất lượng với huấn luyện viên chuyên nghiệp của
                chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Sẵn sàng bắt đầu hành trình fitness?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Đăng ký thành viên ngay hôm nay để đặt lịch với huấn luyện viên và tham gia các lớp học.
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

export default Trainers;
