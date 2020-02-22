const API_BASE_URL = {
  DEV: 'http://localhost:5000',
  TEST: '',
  PROD: '',
};

const FRONT_BASE_URL = {
  DEV: ['localhost:3000'],
  TEST: [''],
  PROD: [''],
};


export const getEnv = () => {
  return Object.entries(FRONT_BASE_URL).find(hostType =>
    hostType[1].includes(document.location.host),
  )[0];
}

export const getBaseUrl = () => {
  if (API_BASE_URL[getEnv()]) {
    return API_BASE_URL[getEnv()];
  }

  throw new Error('Cannot find api base url');
}
