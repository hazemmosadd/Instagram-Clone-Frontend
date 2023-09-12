export const checkLoginStatus = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/auth/isLoggedIn`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error occured ");
  }
};

export const login = async (payload) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error occured");
  }
};

export const getMyAvatar = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/profile/avatar`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    return await response.blob();
  } catch (error) {
    console.error("Error occured");
    throw error;
  }
};

export const fetchMyProfileData = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/profile/`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error occured");
    throw error;

  }
};
