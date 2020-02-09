const webpush = require("web-push");

let vapidKeys = {
  publicKey:
    "BEJugkYk_jWJ9wNsjvZhba8_CNN-ss1pvqBECcUuQ4tGgqx-EXtoYA1YTkkle07rqNpzPCgehm9M38C3N3zmCxc",
  privateKey: "7Zo3zqbj8keAWGbKhD1oYUJpRGAW82ZIvuFNbTDSUpQ"
};

webpush.setVapidDetails(
  "mailto:web-push-book@gauntface.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {};

webpush.sendNotification(sub, "text message");
