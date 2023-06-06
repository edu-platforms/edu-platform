import { Instance } from "../instance";
import { endpoints } from "../endpoints";

const config = {
  baseURL: endpoints.user,
};

class UsersApi extends Instance {
  constructor(config) {
    super(config);
  }
  
  becomeTeacher = (data) => this.put(endpoints.become,data)
}

export const usersApi = new UsersApi(config);

