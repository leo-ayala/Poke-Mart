const db = require("./connection");
const { User, Item, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Potions" },
    { name: "Pokeballs" },
    { name: "Status" },
    { name: "Repels" },
    { name: "Miscellaneous" },
  ]);

  console.log("categories have been created!");

  await Item.deleteMany();
  console.log("old items are gone!");

  const items = await Item.insertMany([
    {
      name: "Potion",
      description:
        "The Potion (Japanese: キズぐすり Wound Medicine) is a type of medicine introduced in Generation I. It can be used to restore a Pokémon's HP.",
      image: "potion1.png",
      category: categories[0]._id,
      price: 300,
      quantity: 100,
    },
    {
      name: "Super Potion",
      description:
        "The Potion (Japanese: キズぐすり Wound Medicine) is a type of medicine introduced in Generation I. It can be used to restore a Pokémon's HP.",
      image: "potion2.png",
      category: categories[0]._id,
      price: 700,
      quantity: 100,
    },
    {
      name: "Hyper Potion",
      category: categories[0]._id,
      description:
        "The Hyper Potion (Japanese: すごいキズぐすり Amazing Wound Medicine) is a type of medicine introduced in Generation I. It can be used to restore a Pokémon's HP.",
      image: "potion3.png",
      price: 1200,
      quantity: 20,
    },
    {
      name: "Max Potion",
      category: categories[0]._id,
      description:
        "The Max Potion (Japanese: まんたんのくすり Tank-Filling Medicine) is a type of medicine introduced in Generation I. It can be used to restore a Pokémon's HP.",
      image: "potion4.png",
      price: 2500,
      quantity: 50,
    },
    {
      name: "Poke Ball",
      category: categories[1]._id,
      description:
        "A Poké Ball (Japanese: モンスターボール Monster Ball) is a type of item that is critical to a Trainer's quest, used for catching and storing Pokémon.",
      image: "pokeb1.png",
      price: 200,
      quantity: 500,
    },
    {
      name: "Great Ball",
      category: categories[1]._id,
      description:
        "The Great Ball (Japanese: スーパーボール Super Ball) is a type of Poké Ball introduced in Generation I. It is an improved variant of the regular Poké Ball that can be used to catch wild Pokémon.",
      image: "pokeb2.png",
      price: 600,
      quantity: 300,
    },
    {
      name: "Ultra Ball",
      category: categories[1]._id,
      description:
        "The Ultra Ball (Japanese: ハイパーボール Hyper Ball) is a type of Poké Ball introduced in Generation I. It is an improved variant of the Great Ball that can be used to catch wild Pokémon.",
      image: "pokeb3.png",
      price: 1200,
      quantity: 100,
    },
    {
      name: "Master Ball",
      category: categories[1]._id,
      description:
        "A pokeball with the ability to catch any pokemon with 100% catch rate",
      image: "pokeb4.png",
      price: 10000000,
      quantity: 1,
    },
    {
      name: "Antidote",
      category: categories[2]._id,
      description:
        "The Antidote (Japanese: どくけし Antidote) is a type of status condition healing medicine introduced in Generation I. It cures a Pokémon of poison.",
      image: "antidote.png",
      price: 100,
      quantity: 200,
    },
    {
      name: "Awakening",
      category: categories[2]._id,
      description:
        "The Awakening (Japanese: ねむけざまし Drowsiness Cure) is a type of medicine introduced in Generation I. It can be used to wake a Pokémon from sleep.",
      image: "awakening.png",
      price: 250,
      quantity: 200,
    },

    {
      name: "Ice Heal",
      category: categories[2]._id,
      description:
        "The Ice Heal (Japanese: こおりなおし Ice Heal) is a type of medicine introduced in Generation I. It can be used to thaw a frozen Pokémon.",
      image: "Ice_Heal.png",
      price: 250,
      quantity: 200,
    },
    {
      name: "Full Heal",
      category: categories[2]._id,
      description:
        "The Full Heal (Japanese: なんでもなおし Heal-All) is a type of medicine introduced in Generation I. It can be used to cure a Pokémon of all non-volatile status conditions and confusion.",
      image: "Full_Heal.png",
      price: 250,
      quantity: 200,
    },
    {
      name: "Repel",
      category: categories[3]._id,
      description:
        "The Repel (Japanese: むしよけスプレー Repellent Spray) is a type of item introduced in Generation I.",
      image: "repel.png",
      price: 350,
      quantity: 100,
    },
    {
      name: "Max Repel",
      category: categories[3]._id,
      description: "       The Max Repel are stronger versions of a Repel.",
      image: "max_repel.png",
      price: 750,
      quantity: 25,
    },
    {
      name: "Escape Rope",
      category: categories[4]._id,
      description:
        "The Escape Rope (Japanese: あなぬけのヒモ Hole-Escape Rope) is an item introduced in Generation I. It is used to escape a cave or dungeon.",
      image: "escape_rope.png",
      price: 550,
      quantity: 10,
    },
    {
      name: "Poke Doll",
      category: categories[4]._id,
      description:
        "The Poké Doll (Japanese: ピッピにんぎょう Pippi Doll) is an item introduced in Generation I. It can be used to escape from a battle with a wild Pokémon.",
      image: "poke-doll.png",
      price: 300,
      quantity: 5,
    },
  ]);

  console.log("items have been created!");

  await User.deleteMany();

  await User.create({
    firstName: "Leo",
    lastName: "Ayala",
    email: "leo@me.com",
    password: "leoleo",
    orders: [
      {
        items: [items[0]._id, items[3]._id, items[3]._id, items[4]._id],
      },
    ],
  });

  console.log("user has been created!");

  process.exit();
});
