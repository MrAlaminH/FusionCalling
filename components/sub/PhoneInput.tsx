"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import React, { forwardRef, useState, useEffect, useCallback } from "react";
import PhoneInput, { Country } from "react-phone-number-input";
import type { DefaultInputComponentProps } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import en from "react-phone-number-input/locale/en.json";

// Only the flags we can actually serve ship in the bundle. The demo form
// requires a USA/Canada number, so US + CA cover every valid submission —
// the full ~200-flag atlas (227 KB raw, 97% unused per PageSpeed) is gone.
// Any other selected country falls back to the phone icon.
import USFlag from "country-flag-icons/react/3x2/US";
import CAFlag from "country-flag-icons/react/3x2/CA";

type FlagIcon = React.ComponentType<{ title?: string }>;

const FLAG_ICONS: Partial<Record<Country, FlagIcon>> = {
  US: USFlag as FlagIcon,
  CA: CAFlag as FlagIcon,
};

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
          "-ms-px rounded-s-none shadow-none focus-visible:z-10 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400",
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
  const FlagIcon = (country && FLAG_ICONS[country]) || undefined;
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
    <div className="relative inline-flex items-center self-stretch rounded-s-lg border border-zinc-700 bg-zinc-800 py-2 pe-2 ps-3 text-white">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} />
        <ChevronDown size={16} strokeWidth={2} className="text-gray-400" />
      </div>
      <select
        {...allowedProps}
        aria-label="Phone country code"
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

  const renderCountrySelect = useCallback(
    (props: CountrySelectProps) => <CountrySelect {...props} />,
    []
  );

  return (
    <div className="phone-input-wrapper">
      <PhoneInput
        international={international}
        defaultCountry={defaultCountry}
        value={phoneValue}
        onChange={handleChange}
        labels={en}
        countrySelectComponent={renderCountrySelect}
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
