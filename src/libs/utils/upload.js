import { uploadApi } from "@/api/index.js";
import { addNotification } from "./addNotification.js";

export const upload = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    return await uploadApi.fileUpload(formData);
  } catch (error) {
    addNotification(error);
    return Promise.reject(error);
  }
};
