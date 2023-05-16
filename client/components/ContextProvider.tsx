'use client'
import { StoreProvider } from "easy-peasy";
import { initializeStore }  from '../store';

type Props = {
  children: React.ReactNode;
}

const store = initializeStore();

const ContextProvider = ({ children }: Props) => {
  return (
    <StoreProvider store={store}>{ children }</StoreProvider>
  )
}

export default ContextProvider