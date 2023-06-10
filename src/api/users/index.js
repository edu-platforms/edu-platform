import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.users,
};

class UsersApi extends Instance {
  constructor(config) {
    super(config);
  }

  becomeTeacher = (data) => this.post(endpoints.become, data)
}

export const usersApi = new UsersApi(config);
