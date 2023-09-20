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

export const fetchProfileAvatarByUsername = async (username) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/profile/avatar/${username}`,
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

export const fetchProfileDataByUsername = async (username) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/profile/${username}/`,
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

export const fetchPostsByUsername = async (username) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/posts/:username`,
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
