/**
 * Convert a human-readable phone display string ("+998 90 000 00 00")
 * into a tel:-href value ("tel:+998900000000") by stripping any
 * characters that are not digits or a leading "+".
 */
export function toTelHref(displayPhone) {
  if (!displayPhone) return '';
  return `tel:${displayPhone.replace(/[^\d+]/g, '')}`;
}
