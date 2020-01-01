import { useEffect } from 'react';

export function useTitle(openItem, orders) {
  useEffect(() => {
    if(openItem) {
      document.title = openItem.name;
    } else {
      orders.length === 0 ? document.title = `Online Order` : document.title = `[${orders.length}] Item(s) in your order`;
    }
  })
}
