import React from 'react';

import GlobalStyle from './styles/global';

import Router from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router />
  </>
);

export default App;
