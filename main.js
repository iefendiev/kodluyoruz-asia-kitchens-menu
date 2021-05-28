const menu = [
  {
    id: 1,
    title: 'Tteokbokki',
    category: 'Korea',
    price: 10.99,
    img: 'https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg',
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: 'Chicken Ramen',
    category: 'Japan',
    price: 7.99,
    img: 'https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg',
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: 'Bibimbap',
    category: 'Korea',
    price: 8.99,
    img: 'https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg',
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: 'Dan Dan Mian',
    category: 'China',
    price: 5.99,
    img: 'https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg',
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: 'Yangzhou Fried Rice',
    category: 'China',
    price: 12.99,
    img: 'https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg',
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: 'Onigiri',
    category: 'Japan',
    price: 9.99,
    img: 'https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg',
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: 'Jajangmyeon',
    category: 'Korea',
    price: 15.99,
    img: 'https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg',
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: 'Ma Yi Shang Shu',
    category: 'China',
    price: 12.99,
    img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg',
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: 'Doroyaki',
    category: 'Japan',
    price: 3.99,
    img: 'https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg',
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const buttons = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Korea',
  },
  {
    id: 2,
    name: 'Japan',
  },
  {
    id: 0,
    name: 'China',
  },
];

const creatingOneItem = (item) => {
  // creating a place for 1 recipe ------------------------------------
  let oneItem = document.createElement('div');
  oneItem.setAttribute('class', 'menu-item');
  // --------------------------------------------------------
  // Adding it to the static menu-items div -----------------
  let menuItems = document.querySelector('.menu-items');
  menuItems.appendChild(oneItem);
  // --------------------------------------------------------
  let leftSide = document.createElement('div');
  leftSide.setAttribute('class', '.left-side');
  let rightSide = document.createElement('div');
  rightSide.setAttribute('class', '.right-side');
  let rightUp = document.createElement('div');
  rightUp.setAttribute('class', '.right-up');
  // placing the sections created into te one item element---
  oneItem.appendChild(leftSide);
  oneItem.appendChild(rightSide);
  rightSide.appendChild(rightUp);
  // ------------------------------------------------------------------

  // placing the images
  let image = document.createElement('img');
  image.setAttribute('src', `${item.img}`);
  image.setAttribute('class', 'image');

  // Creating item title h4 element and placing it ----------
  let itemTitle = document.createElement('h4');
  itemTitle.setAttribute('class', 'item-title');
  itemTitle.innerHTML = item.title;

  // --------------------------------------------------------
  // and for the h4 price elements --------------------------
  let itemPrice = document.createElement('h4');
  itemPrice.setAttribute('class', 'item-price');
  itemPrice.innerHTML = item.price;

  // Same for item description ------------------------------
  let itemDesc = document.createElement('h4');
  itemDesc.setAttribute('class', 'item-desc');
  itemDesc.innerHTML = item.desc;
  // --------------------------------------------------------
  leftSide.appendChild(image);
  rightUp.appendChild(itemTitle);
  rightUp.appendChild(itemPrice);
  rightSide.appendChild(itemDesc);
};
// ----------------------------------------------------------

menu.forEach((item) => {
  creatingOneItem(item);
});

// Adding the Buttons----------------------------------------

buttons.forEach((button) => {
  let btn = document.createElement('button');
  btn.setAttribute('class', 'btn');
  btn.innerHTML = button.name;
  let buttonContainer = document.querySelector('.btn-container');
  buttonContainer.appendChild(btn);
});
// ----------------------------------------------------------
let menuItems = document.querySelector('.menu-items');

const showAll = () => {
  menuItems.innerHTML = '';
  menu.forEach((item) => {
    creatingOneItem(item);
  });
};

const showKorea = () => {
  menuItems.innerHTML = '';
  const korean = menu.filter((item) => item.category === 'Korea');
  korean.forEach((item) => {
    creatingOneItem(item);
  });
};

const showJapan = () => {
  menuItems.innerHTML = '';
  const japanese = menu.filter((item) => item.category === 'Japan');
  japanese.forEach((item) => {
    creatingOneItem(item);
  });
};

const showChina = () => {
  menuItems.innerHTML = '';
  const chinese = menu.filter((item) => item.category === 'China');
  chinese.forEach((item) => {
    creatingOneItem(item);
  });
};

const handleClick = function () {
  let buttonName = this.innerHTML;
  if (buttonName === 'All') {
    showAll();
  } else if (buttonName === 'Korea') {
    showKorea();
  } else if (buttonName === 'Japan') {
    showJapan();
  } else if (buttonName === 'China') {
    showChina();
  }
};

$('button').on('click', handleClick);
