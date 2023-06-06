import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.courses,
};

class CouesesApi extends Instance {
  constructor(config) {
    super(config);
  }

  getCourses = () => this.get();

  getSingleCourse = (id) => this.get(`/${id}`);

  createCourse = (params) => this.post(params);

  updateCourse = (params) => this.patch(params);

  deleteCourse = (params) => this.delete(params);
}

export const coursesApi = new CouesesApi(config);
