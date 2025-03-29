import { Link } from 'react-router-dom';
import {
  ChevronRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  HeartIcon,
  LightBulbIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-dark to-gray-800">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/gym-background.avif"
            alt="Gym Equipment"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Nâng cao sức khỏe và thể lực của bạn với{' '}
                <span className="text-primary">FitHub Pro</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Chúng tôi cung cấp môi trường tập luyện chất lượng cao với các thiết bị hiện đại và
                đội ngũ huấn luyện viên chuyên nghiệp để giúp bạn đạt được mục tiêu sức khỏe và thể
                hình.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/login"
                  className="btn btn-primary flex items-center justify-center gap-2"
                >
                  Bắt đầu ngay
                  <ChevronRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="btn btn-outline border-white text-white hover:bg-white/10 flex items-center justify-center gap-2"
                >
                  Tìm hiểu thêm
                  <ChevronRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:-mr-16 relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2">
                <img
                  src="/Fitness-Training.avif"
                  alt="Fitness Training"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tại sao chọn FitHub Pro?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Chúng tôi cung cấp dịch vụ tập luyện tiêu chuẩn quốc tế giúp bạn đạt được mục tiêu sức
              khỏe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <UserGroupIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Huấn luyện viên chuyên nghiệp
              </h3>
              <p className="text-gray-600">
                Đội ngũ huấn luyện viên giàu kinh nghiệm sẽ hướng dẫn bạn các bài tập phù hợp và
                hiệu quả.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <HeartIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Thiết bị hiện đại</h3>
              <p className="text-gray-600">
                Chúng tôi đầu tư vào các thiết bị tập luyện hiện đại, đảm bảo an toàn và hiệu quả
                cho việc tập luyện.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <LightBulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lịch tập linh hoạt</h3>
              <p className="text-gray-600">
                Với nhiều lớp học khác nhau và lịch trình linh hoạt, bạn dễ dàng sắp xếp thời gian
                tập luyện.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Gói thành viên</h2>
            <p className="mt-4 text-xl text-gray-600">
              Chọn gói phù hợp với nhu cầu và mục tiêu của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gói Cơ Bản</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-900">49</span>
                <span className="text-xl text-gray-500 ml-1">/tháng</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Sử dụng phòng tập không giới hạn</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>2 buổi huấn luyện cá nhân miễn phí</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Sử dụng phòng thay đồ và tủ đồ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Đánh giá thể lực ban đầu</span>
                </li>
              </ul>
              <Link to="/pricing" className="btn btn-outline w-full">
                Tìm hiểu thêm
              </Link>
            </div>

            {/* Standard Plan */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-primary relative transform scale-105 z-10">
              <div className="bg-primary text-white text-center py-1 text-sm font-medium absolute top-0 left-0 right-0 rounded-t-lg">
                Phổ biến nhất
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Gói Tiêu Chuẩn</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-900">129</span>
                <span className="text-xl text-gray-500 ml-1">/quý</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Tất cả tính năng của gói Cơ Bản</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>6 buổi huấn luyện cá nhân miễn phí</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Tham gia tất cả các lớp nhóm</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Tư vấn dinh dưỡng cơ bản</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Sử dụng thiết bị cao cấp</span>
                </li>
              </ul>
              <Link to="/pricing" className="btn btn-primary w-full">
                Đăng ký ngay
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gói Cao Cấp</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-900">449</span>
                <span className="text-xl text-gray-500 ml-1">/năm</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Tất cả tính năng của gói Tiêu Chuẩn</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>18 buổi huấn luyện cá nhân miễn phí</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Đánh giá thể lực định kỳ hàng quý</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Vé miễn phí cho khách (4 lần/năm)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>Sự kiện độc quyền cho thành viên</span>
                </li>
              </ul>
              <Link to="/pricing" className="btn btn-outline w-full">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Huấn luyện viên hàng đầu
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Đội ngũ huấn luyện viên chuyên nghiệp và giàu kinh nghiệm
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trainer 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/trainer02.avif"
                  alt="Huấn luyện viên Tom Johnson"
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Tom Johnson</h3>
                <p className="text-primary font-medium">Chuyên gia thể hình</p>
                <p className="mt-3 text-gray-600">
                  Hơn 10 năm kinh nghiệm trong lĩnh vực thể hình và sức mạnh.
                </p>
                <Link
                  to="/trainers"
                  className="mt-4 inline-flex items-center text-primary hover:underline"
                >
                  Xem chi tiết
                  <ArrowLongRightIcon className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Trainer 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/trainer01.avif"
                  alt="Huấn luyện viên Anna Smith"
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Anna Smith</h3>
                <p className="text-primary font-medium">Chuyên gia Yoga</p>
                <p className="mt-3 text-gray-600">
                  Chứng chỉ Yoga quốc tế với 8 năm kinh nghiệm hướng dẫn.
                </p>
                <Link
                  to="/trainers"
                  className="mt-4 inline-flex items-center text-primary hover:underline"
                >
                  Xem chi tiết
                  <ArrowLongRightIcon className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Trainer 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/trainer03.avif"
                  alt="Huấn luyện viên Michael Chen"
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
                <p className="text-primary font-medium">Chuyên gia HIIT & Cardio</p>
                <p className="mt-3 text-gray-600">
                  Chuyên về các bài tập cường độ cao và cardio hiệu quả.
                </p>
                <Link
                  to="/trainers"
                  className="mt-4 inline-flex items-center text-primary hover:underline"
                >
                  Xem chi tiết
                  <ArrowLongRightIcon className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Trainer 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/trainer04.avif"
                  alt="Huấn luyện viên Lisa Rodriguez"
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Lisa Rodriguez</h3>
                <p className="text-primary font-medium">Chuyên gia Pilates</p>
                <p className="mt-3 text-gray-600">
                  Hướng dẫn Pilates và các bài tập kéo giãn chuyên nghiệp.
                </p>
                <Link
                  to="/trainers"
                  className="mt-4 inline-flex items-center text-primary hover:underline"
                >
                  Xem chi tiết
                  <ArrowLongRightIcon className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu hành trình fitness của bạn?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Đăng ký thành viên ngay hôm nay và bắt đầu hành trình cải thiện sức khỏe cùng đội ngũ
            chuyên nghiệp của chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="btn bg-white text-primary hover:bg-white/90 flex items-center justify-center"
            >
              Đăng ký ngay
            </Link>
            <Link
              to="/contact"
              className="btn border-white text-white hover:bg-white/10 flex items-center justify-center"
            >
              Liên hệ với chúng tôi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
