"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const PhoneInputComponent = dynamic(
  () => import("@/components/sub/PhoneInput"),
);
const SlideToCall = dynamic(() => import("@/components/sub/SlideToCall"));

export default function HeroForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");
  const [formKey, setFormKey] = useState(0);
  const [touched, setTouched] = useState<{
    name: boolean;
    email: boolean;
    phone: boolean;
    agent: boolean;
  }>({ name: false, email: false, phone: false, agent: false });
  const markTouched = (field: keyof typeof touched) =>
    setTouched((t) => ({ ...t, [field]: true }));

  const resetInputs = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedAgent("");
    setFormKey((prev) => prev + 1);
    setTouched({ name: false, email: false, phone: false, agent: false });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return (
      name.trim().length >= 2 &&
      isValidEmail(email.trim()) &&
      phoneNumber.trim().length >= 10 &&
      selectedAgent !== ""
    );
  };

  const handleCallComplete = () => {};

  return (
    <form className="space-y-4" key={formKey} noValidate>
      <label
        className="block text-sm font-medium text-gray-300"
        htmlFor="name"
      >
        Your name <span className="text-red-500">*</span>
      </label>
      <Input
        id="name"
        type="text"
        placeholder="Your name"
        autoComplete="name"
        className="bg-zinc-800 border-zinc-700 text-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => markTouched("name")}
        aria-invalid={touched.name && name.trim().length < 2}
      />
      {touched.name && name.trim().length < 2 && (
        <p className="-mt-2 mb-2 text-xs text-red-400">
          Please enter your name (at least 2 characters).
        </p>
      )}

      <label
        className="block text-sm font-medium text-gray-300"
        htmlFor="email"
      >
        Your e-mail <span className="text-red-500">*</span>
      </label>
      <Input
        id="email"
        type="email"
        placeholder="Your e-mail"
        autoComplete="email"
        className="bg-zinc-800 border-zinc-700 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => markTouched("email")}
        aria-invalid={touched.email && !isValidEmail(email.trim())}
      />
      {touched.email && !isValidEmail(email.trim()) && (
        <p className="-mt-2 mb-2 text-xs text-red-400">
          Please enter a valid email address.
        </p>
      )}

      <label
        className="block text-sm font-medium text-gray-300"
        htmlFor="phone"
      >
        Phone number <span className="text-red-500">*</span>
      </label>
      <div
        className="[&_.PhoneInputInput]:bg-zinc-800 [&_.PhoneInputInput]:border-zinc-700 [&_.PhoneInputInput]:text-white"
        onBlur={() => markTouched("phone")}
      >
        <PhoneInputComponent
          id="phone"
          placeholder="Phone number"
          defaultCountry="US"
          aria-label="Phone number"
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(value || "")}
        />
      </div>
      {touched.phone && phoneNumber.trim().length < 10 && (
        <p className="-mt-2 mb-2 text-xs text-red-400">
          Please enter a valid phone number (min. 10 digits).
        </p>
      )}

      <label
        className="block text-sm font-medium text-gray-300"
        htmlFor="agent"
      >
        Select Agent <span className="text-red-500">*</span>
      </label>
      <select
        id="agent"
        value={selectedAgent}
        onChange={(e) => setSelectedAgent(e.target.value)}
        onBlur={() => markTouched("agent")}
        aria-invalid={touched.agent && selectedAgent === ""}
        className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
      >
        <option value="">Choose an agent</option>
        <option value="appointment-scheduler">
          Appointment Scheduler Agent
        </option>
        <option value="real-estate">Real Estate Agent</option>
        <option value="dental-practice">Dental Practice Agent</option>
        <option value="insurance-agent">insurance Agent</option>
      </select>
      {touched.agent && selectedAgent === "" && (
        <p className="-mt-2 mb-2 text-xs text-red-400">
          Please select an agent.
        </p>
      )}

      <p className="text-sm text-gray-400">
        The call will automatically end after{" "}
        <span className="text-brand-strong">5 minutes</span>. Must use USA or
        Canada phone number.
      </p>

      <div className="relative">
        <div className="w-full ">
          <SlideToCall
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            selectedAgent={selectedAgent}
            resetInputs={resetInputs}
            onCallComplete={handleCallComplete}
            disabled={!isFormValid()}
          />
        </div>
      </div>
    </form>
  );
}
