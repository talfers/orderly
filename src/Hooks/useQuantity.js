import { useState } from 'react';

export function useQuantity(defaultQuantity) {
  const [quantity, setQuantity] = useState(defaultQuantity || 1);

  function onChange(e) {
    if(!(Number(e.target.value) >= 1)){
      setQuantity(1);
    } else {
      setQuantity(Number(e.target.value))
    }

  }

  return {
    quantity,
    setQuantity,
    onChange
  }
}
