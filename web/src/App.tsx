import React from 'react';

import GlobalStyle from './styles/global';
import 'leaflet/dist/leaflet.css';

import Router from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router />
  </>
);

export default App;
