const SlackBot = require("slackbots");
const R = require("ramda");
require('dotenv').config();

// helper functions
const getUserId = msg => {
  const userIdRegex = /<@(\w+)>/;
  return R.propOr("", 1, msg.match(userIdRegex));
};

const getFirstNameById = (id, users) => R.pipe(
  R.find(R.propEq('id', id)),
  R.path(['profile', 'first_name']),
)(users);

// create a bot
const bot = new SlackBot({
  token: process.env.SLACK_API_KEY,
  name: "Leslie Knope",
});

// bot functions
async function getUsers() {
  return bot.getUsers();
}

// bot
async function knopeBot() {
  const users = await getUsers();
  bot.on("message", msg => {
    const params = {
      as_user: true,
      icon_emoji: ":cat:",
    };
    switch (msg.type) {
      case "message":
        if (msg.channel[0] === "D" && msg.source_team) {
          const userId = getUserId(msg.text);
          const name = getFirstNameById(userId, users.members);
          const message = userId
            ? `${name}, you beautiful, naive, sophisticated newborn baby.`
            : "No user to send this message to";
          bot.postMessage(msg.user, message, params);
        }
        break;
      default:
        break;
    }
  });
}

knopeBot();
