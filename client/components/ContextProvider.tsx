'use client'
import { StoreProvider } from "easy-peasy";
import { initializeStore }  from '../store';
import StyledComponentsRegistry from "./StyledComponentsRegistry";

type Props = {
  children: React.ReactNode;
}

const store = initializeStore();

const ContextProvider = ({ children }: Props) => {
  return (
    <StoreProvider store={store}>
      <StyledComponentsRegistry>
        { children }
      </StyledComponentsRegistry>
     </StoreProvider>
  )
}

export default ContextProvider