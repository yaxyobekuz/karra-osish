import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

// Axios
import axios from "axios";

// Animation
import useGsap from "../hooks/useGsap";

// Utils
import { extractNumbers, formatDate } from "../utils";

// Components
import FormInputWrapper from "../components/FormInputWrapper";

const SubmitForm = () => {
  const animate = useGsap();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    variant: "Hech qanday ma'lumotim yo'q, to'liqroq bilishni xohlayman.",
  });

  // Update form data
  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;

    const { firstName, tel, variant } = formData || {};
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
    if (tel.length !== 19) return alert("Telefon raqam xato kiritildi!");
    const data = JSON.stringify([
      formatDate(new Date()),
      firstName,
      `+${extractNumbers(tel)}`,
      variant,
    ]);

    setIsLoading(true);
    const url = `${apiBaseUrl}?data=${encodeURIComponent(data)}`;

    // Send data to the API
    axios
      .post(url)
      .then(({ data }) => {
        const { success } = data || {};
        if (success) navigate("/success");
      })
      .catch(() => alert("Noma'lum xatolik, Qaytadan urinib ko'ring!"))
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 p-5 bg-gray-light rounded-2xl dark dark:bg-white/5 lg:p-8"
    >
      <div className="text-xl font-semibold xs:text-2xl">So'rov yuborish</div>

      {/* First name */}
      <div ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}>
        <FormInputWrapper
          required
          label="Ism *"
          name="firstName"
          disabled={isLoading}
          placeholder="Falonchi"
          onChange={(value) => handleInputChange("firstName", value)}
        />
      </div>

      <div ref={animate({ y: 50, scale: 0.9, delay: 0.3 })}>
        {/* Phone number */}
        <FormInputWrapper
          required
          type="tel"
          disabled={isLoading}
          label="Telefon raqam *"
          placeholder="+998 (__) ___-__-__"
          onChange={(value) => handleInputChange("tel", value)}
        />
      </div>

      {/* Select */}
      <div
        className="space-y-3.5"
        ref={animate({ y: 50, scale: 0.9, delay: 0.4 })}
      >
        <label htmlFor="variants" className="pl-1.5">
          Variantlardan birni tanlang *
        </label>

        {/* Select */}
        <select
          id="variants"
          name="variants"
          disabled={isLoading}
          className="h-11 px-3.5"
          onChange={(e) => handleInputChange("variant", e.target.value)}
        >
          <option value="Hech qanday ma'lumotim yo'q, to'liqroq bilishni xohlayman.">
            Hech qanday ma'lumotim yo'q, to'liqroq bilishni xohlayman.
          </option>
          <option value="Dastur haqida bilaman, lekin savollarim bor.">
            Dastur haqida bilaman, lekin savollarim bor.
          </option>
          <option value="Dasturni o'rganib chiqdim, to'lov qilishga tayyorman.">
            Dasturni o'rganib chiqdim, to'lov qilishga tayyorman.
          </option>
        </select>
      </div>

      <button
        disabled={isLoading}
        ref={animate({ y: 50, scale: 0.9, delay: 0.5 })}
        className={`${isLoading ? "animate-pulse" : ""} btn-primary w-full`}
      >
        Yuborish
        {isLoading ? "..." : ""}
      </button>
    </form>
  );
};

export default SubmitForm;
