// import {data} from ".data";
const data = [
  {
    item: "web",
    dataOpen: "web-1",
    CardImg: "./assets/images/portfolio-1.jpg",
    CardImgAlt: "portfolio-icon",
    skill: "Web Development",
    siteType: "Beer Website",
    modalH3: "Web Project 1",
    modalItemTitle: "My first awesome website",
    modalP1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP2: "sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP3: "consectetur adipisicing elit. Labore, quam. ",
  },
  {
    item: "app",
    dataOpen: "web-2",
    CardImg: "./assets/images/portfolio-2.jpg",
    CardImgAlt: "portfolio-icon",
    skill: "App Development",
    siteType: "Utility Website",
    modalH3: "Web Project 2",
    modalItemTitle: "My first awesome website",
    modalP1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP2: "sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP3: "consectetur adipisicing elit. Labore, quam. ",
  },
  {
    item: "ui",
    dataOpen: "web-3",
    CardImg: "./assets/images/portfolio-3.jpg",
    CardImgAlt: "portfolio-icon",
    skill: "Logistics",
    siteType: "Delivery Website",
    modalH3: "Web Project 3",
    modalItemTitle: "My first awesome website",
    modalP1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam.",
    modal21: "sit amet consectetur adipisicing elit. Labore, quam.",
    modal31: "consectetur adipisicing elit. Labore, quam.",
  },
  {
    item: "ui",
    dataOpen: "web-4",
    CardImg: "./assets/images/img4.jpg",
    CardImgAlt: "portfolio-icon",
    skill: "Design",
    siteType: "Exercise Website",
    modalH3: "Web Project 4",
    modalItemTitle: "My first awesome website",
    modalP1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP2: "sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP3: "consectetur adipisicing elit. Labore, quam. ",
  },
  {
    item: "data",
    dataOpen: "web-5",
    CardImg: "./assets/images/portfolio-5.jpg",
    CardImgAlt: "portfolio-icon",
    skill: "Data tracking",
    siteType: "Exercise Website",
    modalH3: "Web Project 5",
    modalItemTitle: "My first awesome website",
    modalP1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP2: "sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP3: "consectetur adipisicing elit. Labore, quam. ",
  },
  {
    item: "ui",
    dataOpen: "web-6",
    CardImg: "./assets/images/portfolio-6.jpg",
    CardImgAlt: "portfolio-icon",
    skill: "Payment receiving",
    siteType: "Food truck website",
    modalH3: "Web Project 6",
    modalItemTitle: "My first awesome website",
    modalP1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP2: "sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP3: "consectetur adipisicing elit. Labore, quam. ",
  },
  {
    item: "ui",
    dataOpen: "web-7",
    CardImg: "./assets/images/portfolio-7.jpg",
    CardImgAlt: "portfolio-icon",
    skill: "Visual arts",
    siteType: "ASMR app",
    modalH3: "Web Project 7",
    modalItemTitle: "My first awesome website",
    modalP1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP2: "sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP3: "consectetur adipisicing elit. Labore, quam. ",
  },
  {
    item: "app",
    dataOpen: "web-8",
    CardImg: "./assets/images/portfolio-8.jpg",
    CardImgAlt: "portfolio-icon",
    skill: "API",
    siteType: "Stocks and finance",
    modalH3: "Web Project 8",
    modalItemTitle: "My first awesome website",
    modalP1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP2: "sit amet consectetur adipisicing elit. Labore, quam. ",
    modalP3: "consectetur adipisicing elit. Labore, quam. ",
  },
];

const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible";

const dataFilter = "[data-filter]";
const portfolioData = "[data-item]";

const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector("#search");

// Portfolio-grid builder
const portGrid = document.querySelector(".portfolio-grid");
for (let i = 0; i < data.length; i++) {
  const portCard = document.createElement("div");
  portCard.classList.add("portfolio-card");
  portCard.setAttribute("data-item", data[i].item);
  portCard.setAttribute("data-open", data[i].dataOpen);
  portGrid.append(portCard);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  portCard.append(cardBody);

  const cardImage = document.createElement("img");
  cardImage.src = data[i].CardImg;
  cardImage.setAttribute("alt", "portfolio-icon");
  cardBody.append(cardImage);

  const popBox = document.createElement("div");
  popBox.classList.add("card-popup-box");
  cardBody.append(popBox);

  const popBoxText = document.createElement("div");
  // const text = document.createTextNode('test');
  popBoxText.append(data[i].skill);
  popBox.append(popBoxText);

  const popBoxH3 = document.createElement("h3");
  popBoxH3.append(data[i].siteType);
  popBox.append(popBoxH3);
}

// Modal
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (el, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  } else {
    el.classList.add(active);
  }
};

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const el of switcher) {
  el.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    setActive(el, switcherBtn);
    setTheme(toggle);
  });
}

searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

for (const link of filterLink) {
  link.addEventListener("click", function () {
    setActive(link, ".filter-link");
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.dataset.item === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Modal/Full Site Modal "open buttons"
for (const el of openModal) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeModal) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

const portfolioCards = document.querySelectorAll(".portfolio-card");

// Popup Modal builder
portfolioCards.forEach((item) => {
  item.addEventListener("click", function () {
    const cardId = this.getAttribute("data-open");
    const portfolioItem = data.find((item) => item.dataOpen == cardId);

    const main = document.querySelector(".site-wrapper");
    const modalBackDrop = document.createElement("div");
    modalBackDrop.setAttribute("id", portfolioItem.dataOpen);
    modalBackDrop.classList.add("modal");
    modalBackDrop.classList.add(isVisible);
    console.log(portfolioItem.dataOpen);
    modalBackDrop.setAttribute("data-animation", "slideInOutTop");
    main.append(modalBackDrop);

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");
    modalBackDrop.append(modalDialog);

    const header = document.createElement("header");
    header.classList.add("modal-header");
    modalDialog.append(header);

    const hThree = document.createElement("h3");
    hThree.textContent = portfolioItem.modalH3;
    header.append(hThree);

    const iconClose = document.createElement("i");
    iconClose.className = "fas fa-times";
    iconClose.setAttribute("data-close", "");
    header.append(iconClose);

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalDialog.append(modalBody);

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");
    const modalImage = document.createElement("img");
    modalImage.src = portfolioItem.CardImg;
    modalBody.append(imgWrapper);
    imgWrapper.append(modalImage);

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");
    const p1 = document.createElement("strong");
    p1.textContent = portfolioItem.modalItemTitle;
    const p2 = document.createElement("p");
    p2.textContent = portfolioItem.modalP1;
    const p3 = document.createElement("p");
    p3.textContent = portfolioItem.modalP2;
    textWrapper.append(p1);
    textWrapper.append(p2);
    textWrapper.append(p3);
    modalBody.append(textWrapper);

    // Add event listener to close button
    iconClose.addEventListener("click", function () {
      modalBackDrop.remove();
    });
  });
});

// Modal
document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").remove();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    // document.querySelector(".modal.is-visible").classList.remove("is-Visible");
     document.querySelector(".modal.is-visible").remove();
    
  }
});
