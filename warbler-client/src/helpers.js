const LOCAL_STORAGE_USER_KEY = "warblerUser";

export const BASE_URL =
  process.env.REACT_APP_SERVER_URL || "http://localhost:3000";

export const config = () => ({
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
    Authorization: "bearer " + localStorage.getItem(LOCAL_STORAGE_USER_KEY).token
  }
});

export const setCurrentUser = userInfo => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userInfo));
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
  } catch (e) {
    return undefined;
  }
};

export const logoutCurrentUser = () => {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
};
