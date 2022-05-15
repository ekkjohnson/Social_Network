const connection = require("../config/connection");
const { user, thought } = require("../models");
const { getRandomReactions, getRandomName } = require('./data')



connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await user.deleteMany({});

  await thought.deleteMany({});

  await thought.collection.insertOne({
    thoughtText: "something",
    username: "ekkjohnson",
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

  await user.collection.insertMany(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});