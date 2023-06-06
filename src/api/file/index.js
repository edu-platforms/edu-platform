import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.file,
};

class FileApi extends Instance {
  constructor(config) {
    super(config);
  }

  fileUpload = (file) => this.post(file);
}

export const fileApi = new FileApi(config);
