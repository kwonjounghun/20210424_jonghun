import GlobalStyle from '../src/GlobalStyle';

const customViewports = {
  desktop: {
    name: 'Desktop',
    type: 'desktop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  mobile: {
    name: 'Mobile',
    type: 'mobile',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      {Story()}
    </>
  ),
];
