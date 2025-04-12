import PageLayout from "../layout/PageLayout";
import { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    feedback: "",
    rating: "",
    category: "",
    subcategory: "",
  });

  const [errors, setErrors] = useState<{
    email?: string;
    feedback?: string;
    rating?: string | number;
    category?: string;
    subcategory?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categoryOptions = [
    { value: "", label: "Select a category" },
    { value: "room", label: "Room" },
    { value: "transport", label: "Transport" },
    { value: "meeting-room", label: "Meeting Room" },
    { value: "wedding-hall", label: "Wedding Hall" },
    { value: "massage-spa", label: "Massage & Spa" },
  ];

  const subcategoryOptions = {
    room: [
      { value: "", label: "Select room type" },
      { value: "vip-room", label: "VIP Room" },
      { value: "family-room", label: "Family Room" },
      { value: "executive-suite", label: "Executive Suite" },
      { value: "standard-room", label: "Standard Room" },
    ],
    transport: [
      { value: "", label: "Select vehicle type" },
      { value: "8-people", label: "8-Person Vehicle" },
      { value: "14-people", label: "14-Person Vehicle" },
      { value: "46-people", label: "46-Person Vehicle" },
    ],
    "meeting-room": [
      { value: "", label: "Select meeting room" },
      { value: "boardroom", label: "Boardroom" },
      { value: "conference-hall", label: "Conference Hall" },
      { value: "training-room", label: "Training Room" },
    ],
    "wedding-hall": [
      { value: "", label: "Select wedding hall" },
      { value: "grand-ballroom", label: "Grand Ballroom" },
      { value: "garden-pavilion", label: "Garden Pavilion" },
      { value: "beachfront-venue", label: "Beachfront Venue" },
    ],
    "massage-spa": [
      { value: "", label: "Select service" },
      { value: "couples-massage", label: "Couples Massage" },
      { value: "hot-stone", label: "Hot Stone Therapy" },
      { value: "aromatherapy", label: "Aromatherapy" },
      { value: "full-body", label: "Full Body Massage" },
    ],
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      // Reset subcategory when category changes
      ...(name === "category" && { subcategory: "" }),
    });
  };

  const validateForm = () => {
    const newErrors: {
      email?: string;
      feedback?: string;
      rating?: string;
      category?: string;
      subcategory?: string;
    } = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.feedback) newErrors.feedback = "Feedback is required";
    if (!formData.rating) newErrors.rating = "Please rate your experience";
    if (!formData.category) newErrors.category = "Please select a category";
    if (formData.category && !formData.subcategory)
      newErrors.subcategory = "Please select a subcategory";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      // Reset form after submission if needed
      setFormData({
        email: "",
        feedback: "",
        rating: "",
        category: "",
        subcategory: "",
      });
    }
  };

  if (isSubmitted) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Thank You!
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Your feedback has been submitted successfully.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Submit Another Feedback
              </button>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen pt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Share Your Experience
            </h1>
            <p className="mt-3 text-xl text-gray-500">
              Help us improve our services with your valuable feedback
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Rating Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Overall Rating
                </label>
                <div className="mt-2 flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, rating: star.toString() })
                      }
                      className={`p-1 rounded-full ${
                        Number(formData.rating) >= star
                          ? "text-amber-500"
                          : "text-gray-300"
                      } hover:text-amber-500 focus:outline-none`}
                    >
                      <svg
                        className="h-8 w-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
                {errors.rating && (
                  <p className="mt-2 text-sm text-red-600">{errors.rating}</p>
                )}
              </div>

              {/* Category Field */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${
                    errors.category ? "border-red-300" : "border-gray-300"
                  } focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md`}
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-2 text-sm text-red-600">{errors.category}</p>
                )}
              </div>

              {/* Subcategory Field - Conditionally Rendered */}
              {formData.category && (
                <div>
                  <label
                    htmlFor="subcategory"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {formData.category === "room"
                      ? "Room Type"
                      : formData.category === "transport"
                      ? "Vehicle Type"
                      : formData.category === "meeting-room"
                      ? "Meeting Room Type"
                      : formData.category === "wedding-hall"
                      ? "Wedding Hall Type"
                      : "Service Type"}
                  </label>
                  <select
                    id="subcategory"
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleChange}
                    className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${
                      errors.subcategory ? "border-red-300" : "border-gray-300"
                    } focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md`}
                  >
                    {subcategoryOptions[
                      formData.category as keyof typeof subcategoryOptions
                    ].map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.subcategory && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.subcategory}
                    </p>
                  )}
                </div>
              )}

              {/* Feedback Field */}
              <div>
                <label
                  htmlFor="feedback"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Feedback
                </label>
                <div className="mt-1">
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows={4}
                    value={formData.feedback}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      errors.feedback ? "border-red-300" : "border-gray-300"
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm`}
                  />
                  {errors.feedback && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.feedback}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FeedbackForm;
