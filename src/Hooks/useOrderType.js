import { useState } from 'react';

export function useOrderType() {
  const [orderType, setOrderType] = useState({
    selection: '',
    decision: false
  });

  return {
    orderType,
    setOrderType
  }
}
