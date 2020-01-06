import { useState } from 'react';

export function useStoreLocation() {
  const [store, setStore] = useState();

  return {
    store,
    setStore
  }
}
