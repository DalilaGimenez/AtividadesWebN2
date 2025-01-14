import { api, requestConfig } from "../utils/config";

// Publish an user's photo
const publishPhoto = async (data, token) => {
  const formData = new FormData();
  formData.append('photo', data.photo);
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('userId', data.userId);

  try {
    const uploadRes = await fetch(api + "/upload", {
      method: "POST",
      body: formData,
    }).then(res => res.json());

    const photoData = {
      ...data,
      url: uploadRes.url,
    };

    const config = requestConfig("POST", photoData, token);
    const res = await fetch(api + "/api/photos", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get user photos
const getUserPhotos = async (id) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/api/photos?userId=" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get photo
const getPhoto = async (id) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/api/photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Delete a photo
const deletePhoto = async (id, token) => {
  const config = requestConfig("DELETE", "", token);

  try {
    const res = await fetch(api + "/api/photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Update a photo
const updatePhoto = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/api/photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Like a photo
const like = async (id, token) => {
  const config = requestConfig("PUT", null, token);

  try {
    const res = await fetch(api + "/api/photos/like/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Add a comment to a photo
const comment = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/api/photos/comment/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get all photos
const getPhotos = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/api/photos", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Search photos by title
const searchPhotos = async (query) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/api/photos/search?q=" + query, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const photoService = {
  publishPhoto,
  getUserPhotos,
  getPhoto,
  deletePhoto,
  updatePhoto,
  like,
  comment,
  getPhotos,
  searchPhotos,
};

export default photoService;