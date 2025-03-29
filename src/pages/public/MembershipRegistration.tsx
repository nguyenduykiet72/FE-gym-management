import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckIcon,
  ChevronRightIcon,
  CreditCardIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  CalendarIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

// Mock membership package data
const packages = [
  {
    id: 'monthly',
    name: 'Monthly',
    description: 'Perfect for getting started',
    price: 49,
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
    id: 'quarterly',
    name: 'Quarterly',
    description: 'Our most popular package',
    price: 129,
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
    id: 'annual',
    name: 'Annual',
    description: 'Best value for committed members',
    price: 449,
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
];

// Steps in the registration process
type Step = 'package' | 'personal' | 'healthInfo' | 'payment' | 'confirmation';

interface HealthInfo {
  height: string;
  weight: string;
  medicalConditions: string;
  fitnessGoals: string[];
  activityLevel: string;
}

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  emergencyContact: string;
  emergencyPhone: string;
}

interface PaymentInfo {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  billingAddress: string;
  sameAsPersonal: boolean;
}

const MembershipRegistration = () => {
  // Current step of the registration process
  const [currentStep, setCurrentStep] = useState<Step>('package');

  // Selected package
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  // Personal Information
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    emergencyContact: '',
    emergencyPhone: '',
  });

  // Health Information
  const [healthInfo, setHealthInfo] = useState<HealthInfo>({
    height: '',
    weight: '',
    medicalConditions: '',
    fitnessGoals: [],
    activityLevel: 'beginner',
  });

  // Payment Information
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    sameAsPersonal: true,
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Progress percentage based on steps
  const progressPercentage = () => {
    const steps: Record<Step, number> = {
      package: 20,
      personal: 40,
      healthInfo: 60,
      payment: 80,
      confirmation: 100,
    };
    return steps[currentStep];
  };

  // Handle package selection
  const selectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
  };

  // Update personal information
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    // Clear any error for this field
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  // Update health information
  const handleHealthInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (
      name === 'fitnessGoals' &&
      e.target instanceof HTMLInputElement &&
      e.target.type === 'checkbox'
    ) {
      const isChecked = e.target.checked;
      const goal = e.target.value;

      setHealthInfo({
        ...healthInfo,
        fitnessGoals: isChecked
          ? [...healthInfo.fitnessGoals, goal]
          : healthInfo.fitnessGoals.filter((g) => g !== goal),
      });
    } else {
      setHealthInfo({ ...healthInfo, [name]: value });
    }

    // Clear any error for this field
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  // Update payment information
  const handlePaymentInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'sameAsPersonal') {
      setPaymentInfo({
        ...paymentInfo,
        sameAsPersonal: checked,
        billingAddress: checked ? personalInfo.address : paymentInfo.billingAddress,
      });
    } else {
      setPaymentInfo({ ...paymentInfo, [name]: value });
    }

    // Clear any error for this field
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  // Validate the current step and move to next if valid
  const goToNextStep = () => {
    const newErrors: Record<string, string> = {};

    // Validate based on current step
    if (currentStep === 'package') {
      if (!selectedPackage) {
        newErrors.package = 'Please select a membership package';
      }
    } else if (currentStep === 'personal') {
      if (!personalInfo.firstName) newErrors.firstName = 'First name is required';
      if (!personalInfo.lastName) newErrors.lastName = 'Last name is required';
      if (!personalInfo.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(personalInfo.email)) newErrors.email = 'Email is invalid';
      if (!personalInfo.phone) newErrors.phone = 'Phone number is required';
      if (!personalInfo.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    } else if (currentStep === 'healthInfo') {
      // Basic validation for health info
      if (!healthInfo.height) newErrors.height = 'Height is required';
      if (!healthInfo.weight) newErrors.weight = 'Weight is required';
      if (healthInfo.fitnessGoals.length === 0)
        newErrors.fitnessGoals = 'Please select at least one fitness goal';
    } else if (currentStep === 'payment') {
      if (!paymentInfo.cardName) newErrors.cardName = 'Name on card is required';
      if (!paymentInfo.cardNumber) newErrors.cardNumber = 'Card number is required';
      else if (!/^\d{16}$/.test(paymentInfo.cardNumber.replace(/\s/g, '')))
        newErrors.cardNumber = 'Card number should be 16 digits';
      if (!paymentInfo.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!paymentInfo.cvv) newErrors.cvv = 'CVV is required';
      else if (!/^\d{3,4}$/.test(paymentInfo.cvv)) newErrors.cvv = 'CVV should be 3 or 4 digits';
      if (!paymentInfo.billingAddress) newErrors.billingAddress = 'Billing address is required';
    }

    // If there are errors, show them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Move to next step if validation passes
    if (currentStep === 'package') setCurrentStep('personal');
    else if (currentStep === 'personal') setCurrentStep('healthInfo');
    else if (currentStep === 'healthInfo') setCurrentStep('payment');
    else if (currentStep === 'payment') setCurrentStep('confirmation');
  };

  // Go back to previous step
  const goToPreviousStep = () => {
    if (currentStep === 'personal') setCurrentStep('package');
    else if (currentStep === 'healthInfo') setCurrentStep('personal');
    else if (currentStep === 'payment') setCurrentStep('healthInfo');
    else if (currentStep === 'confirmation') setCurrentStep('payment');
  };

  // Submit registration (would connect to API in real application)
  const submitRegistration = () => {
    // In a real app, this would send data to the server
    console.log('Registration submitted:', {
      package: selectedPackage,
      personalInfo,
      healthInfo,
      paymentInfo,
    });

    // Show confirmation step
    setCurrentStep('confirmation');
  };

  // Get the selected package details
  const getSelectedPackageDetails = () => {
    return packages.find((pkg) => pkg.id === selectedPackage);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Membership Registration</h1>
          <p className="mt-2 text-lg text-gray-600">Complete the form below to join FitHub Pro</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="relative">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${progressPercentage()}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500"
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <div className={currentStep === 'package' ? 'text-primary font-bold' : ''}>
                Select Package
              </div>
              <div className={currentStep === 'personal' ? 'text-primary font-bold' : ''}>
                Personal Info
              </div>
              <div className={currentStep === 'healthInfo' ? 'text-primary font-bold' : ''}>
                Health Info
              </div>
              <div className={currentStep === 'payment' ? 'text-primary font-bold' : ''}>
                Payment
              </div>
              <div className={currentStep === 'confirmation' ? 'text-primary font-bold' : ''}>
                Confirmation
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Step 1: Package Selection */}
          {currentStep === 'package' && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Choose Your Membership Package
              </h2>

              {errors.package && (
                <div className="mb-4 p-2 bg-red-50 text-red-500 rounded flex items-center">
                  <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                  {errors.package}
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`border rounded-lg overflow-hidden transition-all ${
                      pkg.popular ? 'transform scale-105 shadow-lg border-primary' : 'shadow'
                    } ${
                      selectedPackage === pkg.id
                        ? 'ring-2 ring-primary border-primary'
                        : 'hover:shadow-md cursor-pointer'
                    }`}
                    onClick={() => selectPackage(pkg.id)}
                  >
                    {pkg.popular && (
                      <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
                          <p className="text-sm text-gray-500">{pkg.description}</p>
                        </div>
                        {selectedPackage === pkg.id && (
                          <div className="bg-primary rounded-full h-6 w-6 flex items-center justify-center">
                            <CheckIcon className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>

                      <div className="mt-4">
                        <span className="text-2xl font-bold text-gray-900">${pkg.price}</span>
                        <span className="text-gray-500 text-sm">/{pkg.duration}</span>
                      </div>

                      <div className="mt-4 space-y-2">
                        {pkg.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                        {pkg.features.length > 3 && (
                          <div className="text-sm text-primary font-medium">
                            +{pkg.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 'personal' && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-900">Personal Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`input ${errors.firstName ? 'border-red-500' : ''}`}
                    value={personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`input ${errors.lastName ? 'border-red-500' : ''}`}
                    value={personalInfo.lastName}
                    onChange={handlePersonalInfoChange}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`input ${errors.email ? 'border-red-500' : ''}`}
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`input ${errors.phone ? 'border-red-500' : ''}`}
                    value={personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className={`input ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                    value={personalInfo.dateOfBirth}
                    onChange={handlePersonalInfoChange}
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="input"
                    value={personalInfo.gender}
                    onChange={handlePersonalInfoChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="input"
                    value={personalInfo.address}
                    onChange={handlePersonalInfoChange}
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="input"
                    value={personalInfo.city}
                    onChange={handlePersonalInfoChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="emergencyContact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    className="input"
                    value={personalInfo.emergencyContact}
                    onChange={handlePersonalInfoChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="emergencyPhone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    className="input"
                    value={personalInfo.emergencyPhone}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Health Information */}
          {currentStep === 'healthInfo' && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Health and Fitness Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                    Height (cm) *
                  </label>
                  <input
                    type="text"
                    id="height"
                    name="height"
                    className={`input ${errors.height ? 'border-red-500' : ''}`}
                    value={healthInfo.height}
                    onChange={handleHealthInfoChange}
                  />
                  {errors.height && <p className="mt-1 text-sm text-red-500">{errors.height}</p>}
                </div>

                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                    Weight (kg) *
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    className={`input ${errors.weight ? 'border-red-500' : ''}`}
                    value={healthInfo.weight}
                    onChange={handleHealthInfoChange}
                  />
                  {errors.weight && <p className="mt-1 text-sm text-red-500">{errors.weight}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="activityLevel"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Activity Level *
                </label>
                <select
                  id="activityLevel"
                  name="activityLevel"
                  className="input"
                  value={healthInfo.activityLevel}
                  onChange={handleHealthInfoChange}
                >
                  <option value="beginner">Beginner (Little to no exercise)</option>
                  <option value="intermediate">Intermediate (Exercise 1-3 times/week)</option>
                  <option value="active">Active (Exercise 3-5 times/week)</option>
                  <option value="veryActive">Very Active (Exercise 6-7 times/week)</option>
                  <option value="athletic">Athletic (Exercise multiple times per day)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fitness Goals *{' '}
                  {errors.fitnessGoals && (
                    <span className="text-red-500">({errors.fitnessGoals})</span>
                  )}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Weight Loss',
                    'Muscle Gain',
                    'Improve Flexibility',
                    'Cardio Fitness',
                    'General Health',
                    'Strength Training',
                    'Sports Performance',
                    'Stress Reduction',
                    'Recovery',
                  ].map((goal) => (
                    <label key={goal} className="flex items-center">
                      <input
                        type="checkbox"
                        name="fitnessGoals"
                        value={goal}
                        checked={healthInfo.fitnessGoals.includes(goal)}
                        onChange={handleHealthInfoChange}
                        className="h-4 w-4 text-primary border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="medicalConditions"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Medical Conditions or Allergies (if any)
                </label>
                <textarea
                  id="medicalConditions"
                  name="medicalConditions"
                  rows={3}
                  className="input"
                  value={healthInfo.medicalConditions}
                  onChange={handleHealthInfoChange}
                  placeholder="Please list any medical conditions, injuries, or allergies that might affect your fitness program"
                ></textarea>
              </div>
            </div>
          )}

          {/* Step 4: Payment Information */}
          {currentStep === 'payment' && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-900">Payment Information</h2>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">
                  Selected Package: {getSelectedPackageDetails()?.name}
                </h3>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-bold">${getSelectedPackageDetails()?.price}.00</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label
                    htmlFor="cardName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name on Card *
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    className={`input ${errors.cardName ? 'border-red-500' : ''}`}
                    value={paymentInfo.cardName}
                    onChange={handlePaymentInfoChange}
                  />
                  {errors.cardName && (
                    <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Card Number *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      className={`input pl-10 ${errors.cardNumber ? 'border-red-500' : ''}`}
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentInfoChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                    />
                    <CreditCardIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.cardNumber && (
                    <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="expiryDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Expiry Date *
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    className={`input ${errors.expiryDate ? 'border-red-500' : ''}`}
                    value={paymentInfo.expiryDate}
                    onChange={handlePaymentInfoChange}
                    placeholder="MM/YY"
                  />
                  {errors.expiryDate && (
                    <p className="mt-1 text-sm text-red-500">{errors.expiryDate}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    CVV *
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    className={`input ${errors.cvv ? 'border-red-500' : ''}`}
                    value={paymentInfo.cvv}
                    onChange={handlePaymentInfoChange}
                    placeholder="XXX"
                  />
                  {errors.cvv && <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      name="sameAsPersonal"
                      checked={paymentInfo.sameAsPersonal}
                      onChange={handlePaymentInfoChange}
                      className="h-4 w-4 text-primary border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Billing address same as personal address
                    </span>
                  </label>

                  {!paymentInfo.sameAsPersonal && (
                    <>
                      <label
                        htmlFor="billingAddress"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Billing Address *
                      </label>
                      <textarea
                        id="billingAddress"
                        name="billingAddress"
                        rows={3}
                        className={`input ${errors.billingAddress ? 'border-red-500' : ''}`}
                        value={paymentInfo.billingAddress}
                        onChange={handlePaymentInfoChange}
                      ></textarea>
                      {errors.billingAddress && (
                        <p className="mt-1 text-sm text-red-500">{errors.billingAddress}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 'confirmation' && (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <CheckIcon className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Complete!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for registering with FitHub Pro. Your membership is now active.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left max-w-md mx-auto">
                <h3 className="font-semibold mb-2 text-primary">Your Membership Details</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Package:</dt>
                    <dd className="font-medium">{getSelectedPackageDetails()?.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Member:</dt>
                    <dd className="font-medium">
                      {personalInfo.firstName} {personalInfo.lastName}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Amount Paid:</dt>
                    <dd className="font-medium">${getSelectedPackageDetails()?.price}.00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Start Date:</dt>
                    <dd className="font-medium">{new Date().toLocaleDateString()}</dd>
                  </div>
                </dl>
              </div>

              <p className="text-gray-600 mb-8">
                We've sent a confirmation email to{' '}
                <span className="font-semibold">{personalInfo.email}</span> with all the details.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/dashboard" className="btn btn-primary flex items-center justify-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Go to Member Dashboard
                </Link>
                <Link to="/classes" className="btn btn-outline flex items-center justify-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Browse Classes
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        {currentStep !== 'confirmation' && (
          <div className="flex justify-between">
            <button
              type="button"
              className="btn btn-outline flex items-center"
              onClick={goToPreviousStep}
              disabled={currentStep === 'package'}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary flex items-center"
              onClick={currentStep === 'payment' ? submitRegistration : goToNextStep}
            >
              {currentStep === 'payment' ? 'Complete Registration' : 'Continue'}
              <ChevronRightIcon className="h-5 w-5 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipRegistration;
