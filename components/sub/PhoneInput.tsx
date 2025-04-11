"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import React, { forwardRef, useState, useEffect } from "react";
import PhoneInput, { Country } from "react-phone-number-input";
import type { DefaultInputComponentProps } from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Pre-import all flags
import en from "react-phone-number-input/locale/en.json";
import flags from "react-phone-number-input/flags";

interface PhoneInputProps {
  id?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
  international?: boolean;
  defaultCountry?: Country;
  "aria-label": string;
}

interface CountrySelectProps {
  value: Country;
  onChange: (value: Country) => void;
  options: Array<{
    value: Country;
    label: string;
  }>;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
  tabIndex?: number;
}

const CustomInput = forwardRef<HTMLInputElement, DefaultInputComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        className={cn(
          "-ms-px rounded-s-none shadow-none focus-visible:z-10 bg-zinc-800 border-zinc-700 text-black",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";

// Updated FlagComponent with proper typing and title handling
const FlagComponent: React.FC<{ country: Country }> = ({ country }) => {
  const FlagIcon = country ? flags[country] : undefined;
  const countryName = en[country as keyof typeof en] || country;

  return FlagIcon ? (
    <span className="w-6 overflow-hidden">
      <FlagIcon title={countryName} />
    </span>
  ) : (
    <Phone size={16} />
  );
};

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  className,
  ...rest
}) => {
  // Only spread allowed props
  const allowedProps = {
    className,
    disabled: rest.disabled,
    name: rest.name,
    tabIndex: rest.tabIndex,
  };

  return (
    <div className="relative inline-flex items-center self-stretch rounded-s-lg border border-zinc-700 bg-zinc-800 py-2 pe-2 ps-3 text-black">
      <div className="inline-flex items-center gap-1">
        <FlagComponent country={value} />
        <ChevronDown size={16} strokeWidth={2} className="text-gray-400" />
      </div>
      <select
        {...allowedProps}
        value={value || ""}
        onChange={(event) => {
          onChange(event.target.value as Country);
        }}
        className="absolute inset-0 w-full opacity-0 cursor-pointer"
      >
        <option value="">{placeholder}</option>
        {options.map(({ value, label }) => (
          <option key={value || ""} value={value || ""}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

const PhoneInputComponent: React.FC<PhoneInputProps> = ({
  id,
  value,
  onChange,
  placeholder = "Enter phone number",
  international = true,
  defaultCountry = "US",
  "aria-label": ariaLabel,
}) => {
  const [phoneValue, setPhoneValue] = useState(value || "");

  // Update internal state when value prop changes
  useEffect(() => {
    setPhoneValue(value || "");
  }, [value]);

  const handleChange = (newValue: string | undefined) => {
    setPhoneValue(newValue || "");
    onChange?.(newValue);
  };

  return (
    <div className="phone-input-wrapper">
      <PhoneInput
        international={international}
        defaultCountry={defaultCountry}
        value={phoneValue}
        onChange={handleChange}
        labels={en}
        flags={flags}
        countrySelectComponent={CountrySelect}
        inputComponent={CustomInput}
        placeholder={placeholder}
        className="flex rounded-lg shadow-sm shadow-black/5"
        id={id}
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default PhoneInputComponent;
