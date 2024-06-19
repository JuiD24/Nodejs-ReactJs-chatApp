const express = require("express"); //run http server
const cors = require("cors"); //to call the server
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key" : "d6d57241-3968-48bb-aac2-5232dae62a85"}}
    )

    return res.status(r.status).json(r.data)
  }
  catch(e){
    return res.status(e.response.status).json(e.response.data)
  }

});

app.listen(3001);