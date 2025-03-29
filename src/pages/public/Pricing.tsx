import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

type BillingCycle = 'monthly' | 'quarterly' | 'yearly';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const handleBillingChange = (cycle: BillingCycle) => {
    setBillingCycle(cycle);
  };

  const basicFeatures = [
    { title: 'Sử dụng phòng tập không giới hạn', included: true },
    { title: 'Huấn luyện cá nhân', value: '2 buổi/tháng', included: true },
    { title: 'Sử dụng phòng thay đồ và tủ đồ', included: true },
    { title: 'Đánh giá thể lực ban đầu', included: true },
    { title: 'Sử dụng hồ bơi', value: '4 lần/tháng', included: true },
    { title: 'Tham gia các lớp nhóm', included: false },
    { title: 'Sử dụng phòng xông hơi', included: false },
    { title: 'Tư vấn dinh dưỡng', included: false },
  ];

  const standardFeatures = [
    { title: 'Sử dụng phòng tập không giới hạn', included: true },
    { title: 'Huấn luyện cá nhân', value: '6 buổi/tháng', included: true },
    { title: 'Sử dụng phòng thay đồ và tủ đồ', included: true },
    { title: 'Đánh giá thể lực ban đầu', included: true },
    { title: 'Sử dụng hồ bơi không giới hạn', included: true },
    { title: 'Tham gia các lớp nhóm', included: true },
    { title: 'Sử dụng phòng xông hơi', value: '8 lần/tháng', included: true },
    { title: 'Tư vấn dinh dưỡng', value: '1 buổi/tháng', included: true },
  ];

  const premiumFeatures = [
    { title: 'Sử dụng phòng tập không giới hạn', included: true },
    { title: 'Huấn luyện cá nhân', value: '12 buổi/tháng', included: true },
    { title: 'Sử dụng phòng thay đồ và tủ đồ', included: true },
    { title: 'Đánh giá thể lực định kỳ hàng tháng', included: true },
    { title: 'Sử dụng hồ bơi không giới hạn', included: true },
    { title: 'Tham gia các lớp nhóm', included: true },
    { title: 'Sử dụng phòng xông hơi không giới hạn', included: true },
    { title: 'Tư vấn dinh dưỡng', value: '2 buổi/tháng', included: true },
    { title: 'Vé miễn phí cho khách', value: '2 lần/tháng', included: true },
    { title: 'Ưu tiên đặt lịch các lớp học', included: true },
    { title: 'Sử dụng dịch vụ spa', value: '2 lần/tháng', included: true },
  ];

  // Calculate prices based on billing cycle
  const getPrice = (basePrice: number, cycle: BillingCycle) => {
    switch (cycle) {
      case 'monthly':
        return basePrice;
      case 'quarterly':
        return Math.round(basePrice * 3 * 0.9); // 10% discount for quarterly
      case 'yearly':
        return Math.round(basePrice * 12 * 0.8); // 20% discount for yearly
    }
  };

  const getCycleText = (cycle: BillingCycle) => {
    switch (cycle) {
      case 'monthly':
        return 'tháng';
      case 'quarterly':
        return 'quý';
      case 'yearly':
        return 'năm';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-dark to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Bảng giá thành viên
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Chọn gói phù hợp với nhu cầu và mục tiêu của bạn. Tất cả các gói đều bao gồm các tiện
              ích cơ bản và sự hỗ trợ từ đội ngũ FitHub Pro.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Cycle Toggle */}
          <div className="sm:flex sm:flex-col sm:align-center">
            <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
              <button
                type="button"
                onClick={() => handleBillingChange('monthly')}
                className={`relative py-2 px-4 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8 ${
                  billingCycle === 'monthly'
                    ? 'bg-white border-gray-200 rounded-md shadow-sm text-gray-900'
                    : 'border border-transparent text-gray-700'
                }`}
              >
                Hàng tháng
              </button>
              <button
                type="button"
                onClick={() => handleBillingChange('quarterly')}
                className={`relative py-2 px-4 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8 ${
                  billingCycle === 'quarterly'
                    ? 'bg-white border-gray-200 rounded-md shadow-sm text-gray-900'
                    : 'border border-transparent text-gray-700'
                }`}
              >
                Hàng quý
              </button>
              <button
                type="button"
                onClick={() => handleBillingChange('yearly')}
                className={`relative py-2 px-4 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8 ${
                  billingCycle === 'yearly'
                    ? 'bg-white border-gray-200 rounded-md shadow-sm text-gray-900'
                    : 'border border-transparent text-gray-700'
                }`}
              >
                Hàng năm
              </button>
            </div>
            {(billingCycle === 'quarterly' || billingCycle === 'yearly') && (
              <p className="mt-3 text-sm text-gray-500 text-center">
                Tiết kiệm {billingCycle === 'quarterly' ? '10%' : '20%'} khi đăng ký{' '}
                {billingCycle === 'quarterly' ? 'gói quý' : 'gói năm'}
              </p>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
            {/* Basic Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">Gói Cơ Bản</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Lựa chọn hoàn hảo cho những ai mới bắt đầu
                </p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {getPrice(49, billingCycle).toLocaleString('vi-VN')}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{getCycleText(billingCycle)}
                  </span>
                </p>
                <Link
                  to="/login"
                  className="mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary/90"
                >
                  Đăng ký ngay
                </Link>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  Bao gồm
                </h3>
                <ul className="mt-6 space-y-4">
                  {basicFeatures.map((feature, index) => (
                    <li key={index} className="flex">
                      {feature.included ? (
                        <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
                      ) : (
                        <XCircleIcon className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      )}
                      <span
                        className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}
                      >
                        {feature.title}{' '}
                        {feature.value && feature.included && (
                          <span className="font-semibold">({feature.value})</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="border-2 border-primary rounded-lg shadow-lg divide-y divide-gray-200 bg-white transform scale-105 z-10">
              <div className="p-6">
                <div className="bg-primary text-white text-center py-1 text-sm font-medium absolute top-0 inset-x-0 rounded-t-lg transform -translate-y-full">
                  Phổ biến nhất
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Gói Tiêu Chuẩn</h2>
                <p className="mt-2 text-sm text-gray-500">Tối ưu cho người tập luyện nghiêm túc</p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {getPrice(129, billingCycle).toLocaleString('vi-VN')}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{getCycleText(billingCycle)}
                  </span>
                </p>
                <Link
                  to="/login"
                  className="mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary/90"
                >
                  Đăng ký ngay
                </Link>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  Bao gồm
                </h3>
                <ul className="mt-6 space-y-4">
                  {standardFeatures.map((feature, index) => (
                    <li key={index} className="flex">
                      <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-sm text-gray-700">
                        {feature.title}{' '}
                        {feature.value && <span className="font-semibold">({feature.value})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">Gói Cao Cấp</h2>
                <p className="mt-2 text-sm text-gray-500">Trải nghiệm đầy đủ dịch vụ cao cấp</p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {getPrice(249, billingCycle).toLocaleString('vi-VN')}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{getCycleText(billingCycle)}
                  </span>
                </p>
                <Link
                  to="/login"
                  className="mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary/90"
                >
                  Đăng ký ngay
                </Link>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  Bao gồm
                </h3>
                <ul className="mt-6 space-y-4">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex">
                      <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-sm text-gray-700">
                        {feature.title}{' '}
                        {feature.value && <span className="font-semibold">({feature.value})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Câu hỏi thường gặp
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  Có cần thanh toán phí đăng ký ban đầu không?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Không, bạn chỉ cần thanh toán theo kỳ hạn đã chọn mà không cần phí đăng ký ban
                  đầu.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  Tôi có thể hủy hoặc đổi gói thành viên không?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Có, bạn có thể hủy hoặc thay đổi gói thành viên vào cuối mỗi kỳ thanh toán. Nếu
                  nâng cấp gói, phần chênh lệch sẽ được tính theo thời gian còn lại.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  Buổi huấn luyện cá nhân kéo dài bao lâu?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Mỗi buổi huấn luyện cá nhân kéo dài 60 phút với huấn luyện viên chuyên nghiệp.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  Tôi có thể mang theo bạn đến phòng tập không?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Các gói Tiêu Chuẩn và Cao Cấp cho phép bạn mang khách với số lượng hạn chế mỗi
                  tháng. Khách đi cùng cần đăng ký trước và tuân thủ nội quy phòng tập.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  Phương thức thanh toán nào được chấp nhận?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Chúng tôi chấp nhận thanh toán qua thẻ tín dụng, thẻ ghi nợ, chuyển khoản ngân
                  hàng và các ví điện tử phổ biến như MoMo, ZaloPay, và VNPay.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-white">Vẫn chưa chắc chắn?</h2>
          <p className="mt-4 text-center text-lg text-gray-300">
            Đăng ký dùng thử miễn phí 1 ngày và trải nghiệm các dịch vụ của chúng tôi
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
            >
              Đăng ký dùng thử
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
