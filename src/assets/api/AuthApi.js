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

  async checkId(id) {
    const response = await axios.post(`${SERVER}/auth/available/id/${id}`);
    return response;
  }

  async simpleLogin(simpleNum) {
    console.log(simpleNum);
    const body = {
      number: simpleNum,
    };
    console.log(body);
    const response = await axios.post(`${SERVER}/user/certify`, body, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    return response;
  }

  async selfCertification(name, rrm) {
    const body = {
      name: name,
      rrm: rrm,
    };
    console.log(body);
    const response = await axios.post(
      `${SERVER}/user/self/certification`,
      body,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      }
    );
    return response;
  }
  async register(
    imgFile,
    id,
    password,
    phoneNumber,
    name,
    nickname,
    residentRegistrationNumber,
    simpleNumber
  ) {
    console.log(imgFile);
    const fd = new FormData();
    Object.values(imgFile).forEach((file) => fd.append("file", file));

    fd.append("id", id);
    fd.append("password", password);
    fd.append("phoneNumber", phoneNumber);
    fd.append("name", name);
    fd.append("nickname", nickname);
    fd.append("residentRegistrationNumber", residentRegistrationNumber);
    fd.append("simpleNumber", simpleNumber);

    console.log(fd);
    const response = await axios.post(`${SERVER}/auth/register`, fd, {
      headers: {
        "Content-Type": `multipart/form-data; `,
      },
    });
    return response;
  }
}

export default new AuthApi();
