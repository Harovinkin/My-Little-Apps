import React, {useState, useContext} from 'react';

const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext)
}

export const AlertProvider = ({children}) => {
  const [isVisible, setIsVisible] = useState(false)

const toggle = () => setIsVisible(prev => !prev)

  return (
    <AlertContext.Provider value={{
      visible: isVisible,
      toggle
    }}>
      {children}
    </AlertContext.Provider>
  );
}