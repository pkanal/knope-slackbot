# Knope SlackBot
A SlackBot I made for fun. It responds via DM with compliments featured in the show Parks and Recreation.

# Installation
To use this bot, clone/fork this repo:
```sh
  $ mkdir knope-slackbot && cd knope-slackbot
  $ git clone [] .
```

As long as you have node installed, you should be able to run this locally. Create a new bot for the slack group you'd like to test it with, you can do so by going [here](https://my.slack.com/services/new/bot).

Once you have the API token for your bot. Create a `.env` file in the root of this repo and add the following:
```sh
SLACK_API_KEY=<your api token>
```

Install dependencies and run the bot:
```sh
  $ yarn
  $ yarn start
```

# Deployment
TBD.
