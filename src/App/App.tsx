import React, { createContext, useContext } from 'react';

import { Container } from './App.style';

interface Props {}

const AppContext = createContext({
  isSidebarOpen: false,
  handleSidebarToggle: () => {}
});

export const useAppContext = () => {
  return useContext(AppContext);
};

const App: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, handleSidebarToggle }}>
      <Container>{children}</Container>
    </AppContext.Provider>
  );
};

export default App;
