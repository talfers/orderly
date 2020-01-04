import { useState } from 'react';

export function useOrderModal() {
  const [orderModalOpen, setOrderModalOpen] = useState();

  return {
    orderModalOpen,
    setOrderModalOpen
  }
}
