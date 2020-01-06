import { useState } from 'react';

export function useDeliveryLocation() {
  const [destination, setDestination] = useState();

  return {
    destination,
    setDestination
  }
}
