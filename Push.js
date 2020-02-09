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

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/f0atWFpJrVY:APA91bHvc-URWI64x9t7J_fNm47DQHBXjMdHHXPulBupp4sRltO4z_ItJkjT9304ICNVmPXATGt7hEjHxnSQVVopr4VkpDPby6Wt6z4J_7mMq578K95SUQPgGe3Yv-6G8DDCVJlNIoQI",
  expirationTime: null,
  keys: {
    p256dh:
      "BDXvm0n1_YV9_UdC16ZvGmPUMnpBVonQJb6VsDUa-xfJhCfqS6yH6GGRnR60_eG-yjJZ7RkSKqpL9g3FnGi8ZYQ",
    auth: "2GWTIuOIVlNK6Tc95vavPA"
  }
};

webpush.sendNotification(sub, "text message");
