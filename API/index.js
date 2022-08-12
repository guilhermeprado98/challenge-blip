const express = require("express");
const axios = require("axios");
const app = express();

//port Heroku or my port.
const PORT = process.env.PORT || 8000;

//Personal Acess Token to call GIT API (cannot be in public repository)
const TOKEN = "";

app.use(express.json());

//GET repo info , useragent : axios
app.get(`/repo/:owner/:repo`, (req, res) => {
  let owner = req.params.owner;
  let repo = req.params.repo;

  axios
    .get(`https://api.github.com/repos/${owner}/${repo}`, {
      baseUrl: "https://api.github.com",
//Headers is add in builder BliP plataform
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${TOKEN}`,
      },
    })

    //Error code as per the GIT API response
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
