import React, { useState } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import { PhotoFeedPage } from './pages';

function App() {
  const [test] = useState(false);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PhotoFeedPage />
    </Provider>
  );
}

export default App;
