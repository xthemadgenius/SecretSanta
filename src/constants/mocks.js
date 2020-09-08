const categories = [
  {
    id: "games",
    name: "Games",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../assets/icons/games.png")
  },
  {
    id: "shoes",
    name: "Shoes",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/shoes.png")
  },
  {
    id: "toys",
    name: "Toys",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/icons/toys.png")
  },
  {
    id: "makeup",
    name: "MakeUp",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/icons/makeup.png")
  },
  {
    id: "tech",
    name: "Technology",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/tech.png")
  },
  {
    id: "clothes",
    name: "Clothes",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/clothes.png")
  }
]

const products = [
  {
    id: 1,
    name: "16 of the best gifts purchased in the past Week",
    descrition: "Presents deserve to be decorated from top to bottom – but it can be tricky to find the right gift.",
    tags: ["Hottest", "Best Deals", "Packages"],
    images: [
      require("../assets/images/product_1.png"),
      require("../assets/images/product_2.png"),
      require("../assets/images/product_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/product_4.png"),
      require("../assets/images/product_5.png"),
      require("../assets/images/product_6.png"),
      require("../assets/images/product_7.png"),
      require("../assets/images/product_8.png"),
      require("../assets/images/product_9.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "xthemadgenius",
  location: "Bay Area",
  email: "javierjcjr@gmail.com",
  avatar: require("../assets/images/bigDaddy.jpg"),
  budget: 1000,
  monthly_cap: 5000,
  newsletter: false
};

export {
  categories,
  explore,
  products,
  profile
};