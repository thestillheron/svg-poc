import express, {
  Request as ExpRequest,
  Response as ExpResponse,
} from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

let token: string | null = null;

app.post("/tokens", async function (req: ExpRequest, res: ExpResponse) {
  const code = req.body.code as string;
  const request = new Request("https://auth.atlassian.com/oauth/token", {
    method: "POST",
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: process.env.CLIENT_ID,
      code,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: "http://localhost:3000/callback",
    }),
  });
  request.headers.set("Content-Type", "application/json");

  let result: any;
  try {
    result = await fetch(request);
  } catch (e) {
    console.error(e);
    return;
  }
  const body = await result.json();
  token = body.access_token;
  res.status(200);
});

app.listen(3001);
