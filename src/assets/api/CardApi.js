import { SERVER } from "../../config/config.json";
import axios from "axios";

class CardApi {
  async getCardList(token) {
    const response = await axios.get(`${SERVER}/account`, {
      headers: {
        Authorization: "Bearer" + token,
      },
    });
    return response;
  }

  async makeCard(nickname, password) {
    const body = {
      accountType: "BASIC",
      nickname: nickname,
      password: password,
    };
    console.log(body);
    const response = await axios.post(`${SERVER}/account`, body, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    return response;
  }
}

export default new CardApi();
