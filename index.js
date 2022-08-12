const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8080;

const owner = "takenet";
const repo = "library.data";
const TOKEN = "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";

app.use(express.json());

app.get("/git_repo", (req, res) => {
  axios
    .get(`https://api.github.com/repos/${owner}/${repo}`, {
      baseUrl: "https://api.github.com",

      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${TOKEN}`,
      },
    })
    .then(function (response) {
      console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
