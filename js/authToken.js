const settings = {
  url: configUrl.auth.url,
  method: "POST",
  timeout: 0,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: configUrl.auth.authorization,
  },
  data: {
    grant_type: "client_credentials",
  },
};

$.ajax(settings).done(function (response) {
  access_token = response.access_token;
  console.log("Get Token successfulyl");
});
