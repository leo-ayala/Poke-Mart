const db = require("./connection");
const { User, Item, Category } = require("../models");
var commaNumber = require("comma-number");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Potions" },
    { name: "Pokeballs" },
    { name: "Cures" },
    { name: "Repels" },
    { name: "Miscellaneous" },
  ]);

  console.log("categories have been created!");

  await Item.deleteMany();

  const items = await Item.insertMany([
    {
      name: "Potion",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "cookie-tin.jpg",
      category: categories[0]._id,
      price: 300,
      quantity: 100,
    },
    {
      name: "Super Potion",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 700,
      quantity: 100,
    },
    {
      name: "Hyper Potion",
      category: categories[0]._id,
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "toilet-paper.jpg",
      price: commaNumber(1200),
      quantity: 20,
    },
    {
      name: "Max Potion",
      category: categories[0]._id,
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "soap.jpg",
      price: commaNumber(2500),
      quantity: 50,
    },
    {
      name: "Poke Ball",
      category: categories[1]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "pokeball.png",
      price: 200,
      quantity: 500,
    },
    {
      name: "Great Ball",
      category: categories[1]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "tablet.jpg",
      price: 600,
      quantity: 300,
    },
    {
      name: "Ultra Ball",
      category: categories[1]._id,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "bedtime-book.jpg",
      price: commaNumber(1200),
      quantity: 100,
    },
    {
      name: "Master Ball",
      category: categories[1]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "spinning-top.jpg",
      price: commaNumber(10000000),
      quantity: 1,
    },
    {
      name: "Antidote",
      category: categories[2]._id,
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "plastic-horses.jpg",
      price: 100,
      quantity: 200,
    },
    {
      name: "Paralyze Heal",
      category: categories[2]._id,
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "teddy-bear.jpg",
      price: 200,
      quantity: 200,
    },
    {
      name: "Awakening",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 250,
      quantity: 200,
    },
    {
      name: "Burn Heal",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 250,
      quantity: 200,
    },
    {
      name: "Ice Heal",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 250,
      quantity: 200,
    },
    {
      name: "Full Heal",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 250,
      quantity: 200,
    },
    {
      name: "Repel",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 350,
      quantity: 100,
    },
    {
      name: "Super Repel",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 500,
      quantity: 75,
    },
    {
      name: "Max Repel",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 750,
      quantity: 25,
    },
    {
      name: "Escape Rope",
      category: categories[4]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 550,
      quantity: 10,
    },
    {
      name: "Poke Doll",
      category: categories[4]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
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
        items: [items[2]._id, items[4]._id, items[4]._id],
      },
    ],
  });

  console.log("user has been created!");

  process.exit();
});
