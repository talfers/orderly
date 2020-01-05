import { useState } from 'react';

export function useOrderType() {
  const [orderType, setOrderType] = useState('none');

  return {
    orderType,
    setOrderType
  }
}
