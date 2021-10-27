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
}

export default new CardApi();
