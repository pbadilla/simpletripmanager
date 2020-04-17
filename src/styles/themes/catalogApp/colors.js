const defaultColors = {
  brown: '#856404',
  green1: '#cdf0dd',
  green2: '#d4edda',
  green3: '#75e1c9',
  green4: '#1d8549',
  greyDarker: '#272726',
  red2: '#c92a2a',
  redDark: '#721c24',
  redLight: '#f8d7da',
  redMedium: '#f5c6cb',
  yellowLight: '#fff3cd',
  yellowMedium: '#ffeeba',
};

const brandingColors = {
  magenta: '#f60e5f',
  magenta2: '#fee7ef',
  magenta3: '#c50b4c',
  grey0: '#333',
  grey1: '#414141',
  grey2: '#666',
  grey3: '#a8a8a8',
  grey4: '#e0e0e0',
  grey5: '#f2f2f2',
  grey6: '#f5f5f5',
  grey7: '#fafafa',
  white: '#fff',
  red: '#eb5757',
  orange: '#f2994a',
  yellow: '#f2c94c',
  green: '#27ae60',
  blue: '#0078cc',
};

const specificColors = {
  black: '#000',
  facebook: '#3B5998',
  twitter: '#1DA1F2',
  whatsapp: '#25D366',
  tripadvisor: '#00a680',
};

const palette = {
  ...defaultColors,
  ...brandingColors,
  ...specificColors,
};

export default palette;
