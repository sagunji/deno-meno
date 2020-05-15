import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";

import { chat } from "./chat.ts";

const config = {
  port: 3000,
};

async function init(req: any) {
  if (req.method === "GET" && req.url === "/") {
    req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html",
      }),
      body: await Deno.open("./index.html"),
    });
  }
  talkies(req);
}

async function talkies(req: any) {
  // WebSockets Chat
  if (req.method === "GET" && req.url === "/chat") {
    if (acceptable(req)) {
      acceptWebSocket({
        conn: req.conn,
        bufReader: req.r,
        bufWriter: req.w,
        headers: req.headers,
      }).then(chat);
    }
  }
}

listenAndServe(config, init);

console.log("Server running on localhost:3000");
