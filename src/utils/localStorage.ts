export const localStorageSet = (key: string, value: any) => {
  window.localStorage.setItem(key, value);
}

export const localStorageGet = (key: string) => {
  const responseData = window.localStorage.getItem(key);
  return responseData ? JSON.parse(responseData) : null;
};
