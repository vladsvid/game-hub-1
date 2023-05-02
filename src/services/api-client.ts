import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3d98ddc56719437a9e8754d64693799e"
  }
});
