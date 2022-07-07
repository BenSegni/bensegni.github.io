//@ts-check
/** @type { { title: string, subTitle: string, link: string, linkText: string } } */
let hero;
/** @type {{ heroImage: string, profileImages: [ { image: string, title: string, text: string, date: string, link: string, linkText: string } ] }} */
let images;
/** @type { { socialLinks: [ { type: string, link: string } ] } } */
let social;
/** @type {HTMLElement} */
let nav;
/** @type {HTMLElement} */
let heroSection;
/** @type {HTMLElement} */
let profileSection;
/** @type {HTMLElement} */
let footer;
/**
 * create Logo Class
 */
class Logo {
  constructor() {
    this.logo = document.createElement("img");
    this.logo.classList.add("logo");
    this.logo.src = `./img/logo${".png" ? ".png" : ".jpg"}`;
    this.logo.onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    nav.appendChild(this.logo);
  }
}
/**
 * create Social Media Icons Class
 */
class socialMediaIcons {
  constructor(iconObject) {
    this.createLink(iconObject);
    this.createIcon(iconObject);
  }

  createLink = (iconObject) => {
    this.link = document.createElement("a");
    this.link.href = iconObject.link;
    this.link.target = "_blank";
    this.link.classList.add("icon");
    nav.appendChild(this.link);
  };

  createIcon = (iconObject) => {
    this.icon = document.createElement("img");
    this.icon.src = `./img/${iconObject.type}.svg`;
    this.link.appendChild(this.icon);
  };
}
/**
 * create Hero Class
 */
class Hero {
  constructor(hero) {
    this.createWrapper();
    this.createTitle(hero);
    this.createSubText(hero);
    this.createHeroButton(hero);
    heroSection.appendChild(this.heroWrapper);
  }

  createWrapper = () => {
    this.heroWrapper = document.createElement("div");
    this.heroWrapper.classList.add("hero-wrapper");
  };

  createTitle = (hero) => {
    this.header = document.createElement("h1");
    this.heroTitleText = document.createTextNode(
      `${hero.title ? hero.title : ""}`
    );
    this.header.appendChild(this.heroTitleText);
    this.heroWrapper.appendChild(this.header);
  };

  createSubText = (hero) => {
    this.subTitle = document.createElement("p");
    this.subTitleText = document.createTextNode(
      `${hero.subTitle ? hero.subTitle : ""}`
    );
    this.subTitle.appendChild(this.subTitleText);
    this.heroWrapper.appendChild(this.subTitle);
  };

  createHeroButton = (hero) => {
    if (hero.link && hero.linkText) {
      this.button = document.createElement("a");
      this.button.classList.add("hero-button");
      this.buttonText = document.createTextNode(hero.linkText);
      this.button.appendChild(this.buttonText);
      this.button.href = hero.link;
      this.button.target = "_blank";
      this.heroWrapper.appendChild(this.button);
    }
  };
}
/**
 * create ImageProfile class
 */
class ImageProfile {
  constructor(image) {
    this.createImageWrapper();
    this.createTextWrapper(image);
    this.createDate(image);
    this.createDescription(image);
    this.createButton(image);
    if (this.textWrapper) {
      this.imageWrapper.appendChild(this.textWrapper);
      profileSection.appendChild(this.imageWrapper);
    }
  }

  createImageWrapper = () => {
    this.imageWrapper = document.createElement("div");
    this.imageWrapper.classList.add("profile-image");
  };

  createTextWrapper = (image) => {
    this.textWrapper = document.createElement("div");
    this.title = document.createElement("h2");
    this.titleText = document.createTextNode(`${image.title}`);
    this.title.appendChild(this.titleText);
  };

  createDate = (image) => {
    this.date = document.createElement("span");
    if (image.date) {
      this.date.classList.add("date");
      this.dateValue = document.createTextNode(
        new Date(`${image.date}`).toDateString()
      );
      this.date.appendChild(this.dateValue);
    }
  };

  createDescription = (image) => {
    this.textWrapper.classList.add("description");
    this.description = document.createTextNode(`${image.text}`);
    this.textWrapper.appendChild(this.title);
    if (image.date) {
      this.textWrapper.appendChild(this.date);
    }
    this.textWrapper.appendChild(this.description);
  };

  createButton = (image) => {
    if (image.link && image.linkText) {
      const link = document.createElement("a");
      const linkText = document.createTextNode(`${image.linkText}`);
      link.appendChild(linkText);
      link.classList.add("link");
      link.href = image.link;
      link.target = "_blank";
      this.textWrapper.appendChild(link);
    }
    this.imageWrapper.style.backgroundImage = `url(${
      image.image ? image.image : "none"
    })`;
  };
}
/**
 * create a Footer Class with social media data
 */
class FooterIcon {
  constructor(listElement, socialObject) {
    this.createFooterIcon(socialObject);
    this.createFooterLink(socialObject);
    this.createFooterList(listElement);
  }

  createFooterIcon = (socialObject) => {
    this.footerIcon = document.createElement("img");
    this.footerIcon.src = `./img/${socialObject.type}.svg`;
  };

  createFooterLink = (socialObject) => {
    this.footerLink = document.createElement("a");
    this.footerLink.href = socialObject.link;
    this.linkText = document.createTextNode(`${socialObject.type}`);
    this.footerLink.appendChild(this.linkText);
  };

  createFooterList = (listElement) => {
    this.listItem = document.createElement("li");
    this.listItem.appendChild(this.footerIcon);
    this.listItem.appendChild(this.footerLink);
    listElement.appendChild(this.listItem);
    footer.appendChild(listElement);
  };
}

class FooterNavigationArrow {
  constructor() {
    this.createArrowIcon();
    footer.appendChild(this.arrow);
  }

  createArrowIcon = () => {
    this.arrow = document.createElement("img");
    this.arrow.src = "./img/up-arrow.svg";
    this.arrow.classList.add("up-arrow");
    this.arrow.onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  };
}
/**
 *
 * @returns a new Logo Object
 */
const createLogo = () => {
  return new Logo();
};
/**
 * get social icon data and return new icons
 */
const assignSocialMediaIcons = () => {
  createLogo();
  fetch("./json/social.json")
    .then((social) => {
      return social.json();
    })
    .then((data) => {
      social = data;
      social?.socialLinks.map((link) => {
        return new socialMediaIcons(link);
      });
    });
};
/**
 * get hero data and create elements
 */
const assignHero = () => {
  fetch("./json/hero.json")
    .then((hero) => {
      return hero.json();
    })
    .then((data) => {
      return new Hero(data);
    });
};

const assignImages = () => {
  fetch("./json/images.json")
    .then((images) => {
      return images.json();
    })
    .then((data) => {
      images = data;
      heroSection.style.backgroundImage = `url(${
        images.heroImage ? images.heroImage : "none"
      })`;
      images?.profileImages?.map((image) => {
        return new ImageProfile(image);
      });
    });
};
/**
 * assign footer links for mobile
 */
const createFooterLinks = () => {
  const list = document.createElement("ul");
  list.classList.add("footer-icon-list");
  footer.appendChild(list);
  fetch("./json/social.json")
    .then((social) => {
      return social.json();
    })
    .then((data) => {
      social = data;
      social?.socialLinks.map((social) => {
        if (!social) return;
        return new FooterIcon(list, social);
      });
      return new FooterNavigationArrow();
    });
};
/**
 * create all elements for the page
 */
const createElements = () => {
  nav = document.createElement("nav");
  heroSection = document.createElement("header");
  profileSection = document.createElement("section");
  footer = document.createElement("footer");
};
/**
 * assign classes to newly created elements
 */
const styleElements = () => {
  nav.classList.add("nav");
  heroSection.classList.add("hero");
  profileSection.classList.add("profile");
  footer.classList.add("footer");
};
/**
 * assign new elements to document
 */
const prepareDocument = () => {
  const boiler = document.getElementById("boiler-plate");
  document.body.insertBefore(heroSection, boiler);
  document.body.insertBefore(nav, heroSection);
  document.body.insertBefore(profileSection, boiler);
  document.body.insertBefore(footer, boiler);
};
/**
 * build out the template for the browser
 */
const createTemplate = () => {
  createElements();
  styleElements();
  assignSocialMediaIcons();
  assignHero();
  assignImages();
  createFooterLinks();
  prepareDocument();
};

if (document.body) {
  document.body.onload = () => createTemplate();
}
