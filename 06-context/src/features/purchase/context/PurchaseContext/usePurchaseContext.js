import { useContext } from 'react';
import PurchaseContext from './PurchaseContext';

export default function usePurchaseContext() {
  return useContext(PurchaseContext)
}