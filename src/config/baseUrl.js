const API_BASE_URL = {
  DEV: 'localhost:5000',
  TEST: '',
  PROD: '',
};

const FRONT_BASE_URL = {
  DEV: ['localhost:3000'],
  TEST: [''],
  PROD: [''],
};

export const getBaseUrl = () => {
  const currentServer = Object.entries(FRONT_BASE_URL).find(hostType =>
    hostType[1].includes(document.location.host),
  )[0];

  if (API_BASE_URL[currentServer]) {
    return API_BASE_URL[currentServer];
  }

  throw new Error('Cannot find api base url');
};
