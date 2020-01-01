import {useState} from 'react';

export function useOpenItem() {
  const [openItem, setOpenItem] = useState();
  return {
    openItem: openItem,
    setOpenItem: setOpenItem
  }
}
