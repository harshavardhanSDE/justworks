// Root.jsx
import React from 'react';
import App from './App.jsx';
import { useTheme } from './ThemeContext.jsx';

const Root = () => {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <App />;
};

export default Root;
