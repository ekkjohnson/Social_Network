const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomReactions, getRandomName } = require('./data')



connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  await Thought.deleteMany({});

  await Thought.collection.insertOne({
    thoughtText: "something",
    username: "BretBanger",
    reactions: getRandomReactions(5)
  });

  const users = [];

  for (let i = 0; i < 5; i++) {

    const username = getRandomName();
    const email = `${username}@something.com`

    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});