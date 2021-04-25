import React from 'react';
import GlobalStyle from './GlobalStyle';
import { PhotoFeedPage } from './pages';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <PhotoFeedPage />
    </React.Fragment>
  );
}

export default App;
