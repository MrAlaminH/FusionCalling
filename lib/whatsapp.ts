const DEFAULT_WHATSAPP_NUMBER = "8801716056236";
const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Fusion Calling! I'd like to talk to someone.";

function isValidDigits(digits: string): boolean {
  return digits.length >= 10 && digits.length <= 15;
}

function normalizeWhatsappNumber(raw: string | undefined): string {
  const digits = (raw ?? DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, "");
  if (!isValidDigits(digits)) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[whatsapp] invalid NEXT_PUBLIC_WHATSAPP_NUMBER, using default"
      );
    }
    return DEFAULT_WHATSAPP_NUMBER;
  }
  return digits;
}

export const WHATSAPP_NUMBER = normalizeWhatsappNumber(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
);
export const WHATSAPP_MESSAGE = DEFAULT_WHATSAPP_MESSAGE;

export function buildWhatsAppUrl(
  number: string = WHATSAPP_NUMBER,
  message: string = WHATSAPP_MESSAGE
): string {
  const digits = number.replace(/\D/g, "");
  const safeNumber = isValidDigits(digits)
    ? digits
    : DEFAULT_WHATSAPP_NUMBER;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${safeNumber}${text}`;
}
