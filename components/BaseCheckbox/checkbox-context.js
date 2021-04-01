import { createContext, useContext } from 'react';

const CheckboxContext = createContext();

function useCheckboxContext() {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error(
      `Checkbox compound components cannot be rendered outside the BaseChecbox component`,
    );
  }
  return context;
}

function CheckboxProvider({ value, ...props }) {
  return <CheckboxContext.Provider value={value} {...props} />;
}

export { useCheckboxContext, CheckboxProvider };
