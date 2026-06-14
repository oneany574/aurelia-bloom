// Tiny global event bus for the booking inquiry modal.
type Listener = (defaultType?: string) => void;
let listener: Listener | null = null;

export function registerBookingModal(fn: Listener) {
  listener = fn;
  return () => {
    if (listener === fn) listener = null;
  };
}

export function openBookingModal(defaultType?: string) {
  listener?.(defaultType);
}
