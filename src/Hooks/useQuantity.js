import { useState } from 'react';

export function useQuantity() {
  const [quantity, setQuantity] = useState(0);

  return {
    quantity,
    setQuantity
  }
}
