import { SERVER } from "../../config/config.json";
import axios from "axios";

class AuthApi {
  async login(id, password) {
    const body = {
      id: id,
      password: password,
    };
    console.log(body);
    const response = await axios.post(`${SERVER}/auth/login`, body);
    return response;
  }
}

export default new AuthApi();
