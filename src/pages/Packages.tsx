import { CheckIcon } from '@heroicons/react/24/outline';

const packages = [
  {
    id: 1,
    name: 'Monthly',
    description: 'Perfect for getting started',
    price: '$49',
    duration: '1 month',
    features: [
      'Unlimited gym access',
      '2 free personal training sessions',
      'Access to group classes',
      'Locker access',
      'Fitness assessment',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Quarterly',
    description: 'Our most popular package',
    price: '$129',
    duration: '3 months',
    features: [
      'Unlimited gym access',
      '6 free personal training sessions',
      'Access to all group classes',
      'Locker access',
      'Fitness assessment',
      'Nutrition consultation',
      'Access to premium equipment',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Annual',
    description: 'Best value for committed members',
    price: '$449',
    duration: '12 months',
    features: [
      'Unlimited gym access',
      '18 free personal training sessions',
      'Access to all group classes',
      'Premium locker access',
      'Quarterly fitness assessments',
      'Nutrition consultation',
      'Access to premium equipment',
      'Free guest passes (4 per year)',
      'Exclusive member events',
    ],
    popular: false,
  },
  {
    id: 4,
    name: 'Pay-as-you-go',
    description: 'Flexible option with no commitment',
    price: '$15',
    duration: 'per day',
    features: [
      'Daily gym access',
      'Group classes (additional fee)',
      'Locker access',
      'No long-term commitment',
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Membership Packages</h1>

        <div className="mt-6">
          <div className="text-center mb-10">
            <p className="mt-2 text-lg text-gray-600">
              Choose the perfect membership package to fit your fitness goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-lg shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-primary transform scale-105 z-10' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="bg-white p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{pkg.description}</p>
                    <div className="mt-4">
                      <span className="text-3xl font-extrabold text-gray-900">{pkg.price}</span>
                      <span className="text-sm font-medium text-gray-500">/{pkg.duration}</span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button
                      className={`w-full ${pkg.popular ? 'btn btn-primary' : 'btn btn-outline hover:bg-gray-50'}`}
                    >
                      {pkg.popular ? 'Get Started' : 'Learn More'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Additional Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">Personal Training Sessions</h3>
                <div className="mt-2 text-gray-700">
                  <p className="text-sm mb-4">
                    Work with our certified trainers to achieve your fitness goals faster
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Single Session</span>
                      <span className="font-medium">$45</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5 Session Pack</span>
                      <span className="font-medium">$200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>10 Session Pack</span>
                      <span className="font-medium">$350</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">Nutrition Consultation</h3>
                <div className="mt-2 text-gray-700">
                  <p className="text-sm mb-4">Get personalized nutrition advice from our experts</p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Initial Consultation</span>
                      <span className="font-medium">$75</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Follow-up Session</span>
                      <span className="font-medium">$50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Meal Plan</span>
                      <span className="font-medium">$120</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">Special Programs</h3>
                <div className="mt-2 text-gray-700">
                  <p className="text-sm mb-4">
                    Join our specialized fitness programs for targeted results
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Weight Loss Camp (8 weeks)</span>
                      <span className="font-medium">$299</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Body Transformation (12 weeks)</span>
                      <span className="font-medium">$399</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sports Performance (6 weeks)</span>
                      <span className="font-medium">$249</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Need Help Choosing?</h2>
              <p className="text-gray-600 mb-6">
                Our fitness experts are available to help you select the best package for your goals
              </p>
              <button className="btn btn-primary px-8">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
