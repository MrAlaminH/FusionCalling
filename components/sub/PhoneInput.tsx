"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import React, { forwardRef, useState, useEffect, useCallback } from "react";
import PhoneInput, { Country } from "react-phone-number-input";
import type { DefaultInputComponentProps } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import en from "react-phone-number-input/locale/en.json";

// All ~200 country flag SVGs (~50 KB). Loaded idle in the background: only
// the current country's flag is ever rendered, so the initial paint uses the
// phone-icon fallback and flags pop in moments later. Keeps the hero form's
// bundle free of the full flag atlas.
type FlagIcon = React.ComponentType<{ title?: string }>;
type FlagMap = Record<string, FlagIcon>;

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
const FlagComponent: React.FC<{ country: Country; flags: FlagMap | null }> = ({
  country,
  flags,
}) => {
  const FlagIcon = country && flags ? flags[country] : undefined;
  const countryName = en[country as keyof typeof en] || country;

  return FlagIcon ? (
    <span className="w-6 overflow-hidden">
      <FlagIcon title={countryName} />
    </span>
  ) : (
    <Phone size={16} />
  );
};

const CountrySelect: React.FC<
  CountrySelectProps & { flags: FlagMap | null }
> = ({ value, onChange, options, placeholder, className, flags, ...rest }) => {
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
        <FlagComponent country={value} flags={flags} />
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
  const [flagMap, setFlagMap] = useState<FlagMap | null>(null);

  // Update internal state when value prop changes
  useEffect(() => {
    setPhoneValue(value || "");
  }, [value]);

  // Load the flag atlas after the page is interactive.
  useEffect(() => {
    let cancelled = false;
    const load = () => {
      import("react-phone-number-input/flags")
        .then((m) => {
          if (!cancelled) setFlagMap(m.default as FlagMap);
        })
        .catch(() => {
          // Atlas failed to load (offline/blocked) — keep phone-icon fallback.
        });
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(load, { timeout: 4000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }
    const t: ReturnType<typeof setTimeout> = setTimeout(load, 3000);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  const handleChange = (newValue: string | undefined) => {
    setPhoneValue(newValue || "");
    onChange?.(newValue);
  };

  const renderCountrySelect = useCallback(
    (props: CountrySelectProps) => (
      <CountrySelect {...props} flags={flagMap} />
    ),
    [flagMap]
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
