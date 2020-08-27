let access_token = ""; // default empty, don't touch!
const urlBase = "https://someurl.com";
const configUrl = {
  auth: {
    url: urlBase + "/oauth/token",
    authorization:
      "Basic aBcdefghijkxz",
  },
  card: {
    url: urlBase + "/payments/report",
    application_key: "",
  },
  cash: {
    url: urlBase + "/payments/cash/report",
    application_key: "0WNAxsEn3faavo8rVsrUmWHVLLXX3z5S",
  },
};
