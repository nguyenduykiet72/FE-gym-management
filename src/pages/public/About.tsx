import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-dark to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Về FitHub Pro</h1>
            <p className="mt-6 text-xl text-gray-300">
              Chúng tôi cam kết mang đến giải pháp tập luyện hiệu quả và bền vững cho tất cả mọi người, không phân biệt
              trình độ hay kinh nghiệm.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Câu chuyện của chúng tôi</h2>
              <p className="mt-4 text-lg text-gray-600">
                FitHub Pro được thành lập vào năm 2018 với mục tiêu tạo ra một không gian tập luyện chất lượng cao kết
                hợp với công nghệ hiện đại để giúp mọi người đạt được mục tiêu sức khỏe của họ.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Từ một phòng tập nhỏ với chỉ 3 huấn luyện viên, chúng tôi đã phát triển thành một chuỗi 5 trung tâm với
                hơn 50 huấn luyện viên chuyên nghiệp và hàng nghìn thành viên hài lòng.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Tầm nhìn của chúng tôi là trở thành chuỗi phòng tập hàng đầu Việt Nam, nơi mọi người đều có thể tìm thấy
                động lực và phương pháp tập luyện phù hợp để duy trì lối sống khỏe mạnh lâu dài.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img src="/gym-equipment.avif" alt="Gym interior" className="w-full h-64 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img src="/gym-equipment02.avif" alt="Training session" className="w-full h-64 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden sm:col-span-2">
                  <img src="/gym-equipment03.avif" alt="Gym team" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Giá trị cốt lõi của chúng tôi</h2>
            <p className="mt-4 text-lg text-gray-600">Những giá trị định hướng hoạt động của chúng tôi mỗi ngày</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chất lượng</h3>
              <p className="text-gray-600">
                Chúng tôi cam kết mang đến dịch vụ chất lượng cao nhất trong mọi khía cạnh, từ thiết bị, không gian cho
                đến đội ngũ huấn luyện viên.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cộng đồng</h3>
              <p className="text-gray-600">
                Chúng tôi tin vào sức mạnh của cộng đồng và tạo ra môi trường hỗ trợ, nơi các thành viên có thể động
                viên và truyền cảm hứng cho nhau.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">An toàn</h3>
              <p className="text-gray-600">
                An toàn luôn là ưu tiên hàng đầu. Chúng tôi đảm bảo mọi thiết bị và phương pháp tập luyện đều tuân thủ
                các tiêu chuẩn an toàn cao nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Đội ngũ lãnh đạo</h2>
            <p className="mt-4 text-lg text-gray-600">Những người đứng sau thành công của FitHub Pro</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img src="/trainer02.avif" alt="Elliot Nguyen" className="w-full h-72 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Elliot Nguyen</h3>
                <p className="text-primary font-medium mt-2">Nhà sáng lập & CEO</p>
                <p className="mt-3 text-gray-600">
                  Với hơn 15 năm kinh nghiệm trong ngành fitness, anh Đạt đã xây dựng FitHub Pro từ một ý tưởng nhỏ
                  thành chuỗi phòng tập hàng đầu hiện nay.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img src="/trainer02.avif" alt="Henry Nguyen" className="w-full h-72 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Henry Nguyen</h3>
                <p className="text-primary font-medium mt-2">Giám đốc Điều hành</p>
                <p className="mt-3 text-gray-600">
                  Chị Mai phụ trách điều hành toàn bộ hoạt động của FitHub Pro, đảm bảo mọi thành viên đều nhận được
                  trải nghiệm tốt nhất.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img src="/trainer02.avif" alt="Larry Nguyen" className="w-full h-72 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Larry Nguyen</h3>
                <p className="text-primary font-medium mt-2">Giám đốc Đào tạo</p>
                <p className="mt-3 text-gray-600">
                  Anh Tuấn chịu trách nhiệm phát triển các chương trình tập luyện và đào tạo đội ngũ huấn luyện viên
                  chuyên nghiệp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Hãy trở thành thành viên của chúng tôi</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Bắt đầu hành trình fitness của bạn cùng FitHub Pro ngay hôm nay. Chúng tôi cam kết sẽ đồng hành và hỗ trợ
            bạn đạt được mục tiêu.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="btn bg-white text-primary hover:bg-white/90 flex items-center justify-center gap-2"
            >
              Xem các gói thành viên
              <ArrowRightIcon className="h-5 w-5" />
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

export default About;
