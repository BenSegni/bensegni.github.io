/**
 * declare global variables
 */
let hero;
let images;
let nav;
let heroSection;
let profileSection;
let footer;
let social;
/**
 * get nav data and assign social media buttons
 */
assignSocialMedia = () => {
  //create a logo for the site
  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = `./img/logo${".png" ? ".png" : ".jpg"}`;
  nav.appendChild(logo);
  fetch("./json/social.json")
    .then((social) => {
      return social.json();
    })
    .then((data) => {
      social = data;
      social?.socialLinks.map((link) => {
        createSocialMediaButtons(link);
      });
    });
};
/**
 * create social media buttons
 */
createSocialMediaButtons = (button) => {
  const link = document.createElement("a");
  link.href = button.link;
  link.target = "_blank";
  link.classList.add("icon");
  const icon = document.createElement("img");
  icon.src = `./img/${button.type}.svg`;
  link.appendChild(icon);
  nav.appendChild(link);
  //add click event to logo
  const logo = document.querySelector(".logo");
  if (window.screenY > 50) {
    logo.onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  }
};
/**
 * get hero data and create elements
 */
assignHero = () => {
  fetch("./json/hero.json")
    .then((hero) => {
      return hero.json();
    })
    .then((data) => {
      hero = data;
      const heroWrapper = document.createElement("div");
      heroWrapper.classList.add("hero-wrapper");
      //create header text
      const header = document.createElement("h1");
      const heroTitleText = document.createTextNode(
        `${hero.title ? hero.title : ""}`
      );
      //create subtitle text
      const subTitle = document.createElement("p");
      const subTitleText = document.createTextNode(
        `${hero.subTitle ? hero.subTitle : ""}`
      );
      subTitle.appendChild(subTitleText);
      header.appendChild(heroTitleText);
      heroWrapper.appendChild(header);
      heroWrapper.appendChild(subTitle);
      //create link button
      if (hero.link && hero.linkText) {
        const button = document.createElement("a");
        button.classList.add("hero-button");
        const buttonText = document.createTextNode(hero.linkText);
        button.appendChild(buttonText);
        button.href = hero.link;
        button.target = "_blank";
        heroWrapper.appendChild(button);
      }
      heroSection.appendChild(heroWrapper);
    });
};
/**
 * get image data and create elements
 */
assignImages = () => {
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
        //create image wrappers
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("profile-image");
        //create text wrappers with text & links
        const textWrapper = document.createElement("div");
        const title = document.createElement("h2");
        const titleText = document.createTextNode(`${image.title}`);
        title.appendChild(titleText);
        const date = document.createElement("span");
        if (image.date) {
          date.classList.add("date");
          const dateValue = document.createTextNode(
            new Date(`${image.date}`).toDateString()
          );
          date.appendChild(dateValue);
        }
        textWrapper.classList.add("description");
        const description = document.createTextNode(`${image.text}`);
        textWrapper.appendChild(title);
        if (image.date) {
          textWrapper.appendChild(date);
        }
        textWrapper.appendChild(description);
        if (image.link && image.linkText) {
          const link = document.createElement("a");
          const linkText = document.createTextNode(`${image.linkText}`);
          link.appendChild(linkText);
          link.classList.add("link");
          link.href = image.link;
          link.target = "_blank";
          textWrapper.appendChild(link);
        }
        //style background of image wrapper
        imageWrapper.style.backgroundImage = `url(${
          image.image ? image.image : "none"
        })`;
        imageWrapper.appendChild(textWrapper);
        profileSection.appendChild(imageWrapper);
      });
    });
};
/**
 * assign footer links for mobile
 */
createFooterLinks = () => {
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
        const footerIcon = document.createElement("img");
        footerIcon.src = `./img/${social.type}.svg`;
        const footerLink = document.createElement("a");
        footerLink.href = social.link;
        const linkText = document.createTextNode(`${social.type}`);
        footerLink.appendChild(linkText);
        const listItem = document.createElement("li");
        listItem.appendChild(footerIcon);
        listItem.appendChild(footerLink);
        list.appendChild(listItem);
      });
    });
};
/**
 * create all elements for the page
 */
createElements = () => {
  nav = document.createElement("nav");
  heroSection = document.createElement("header");
  profileSection = document.createElement("section");
  footer = document.createElement("footer");
};
/**
 * assign classes to newly created elements
 */
styleElements = () => {
  nav.classList.add("nav");
  heroSection.classList.add("hero");
  profileSection.classList.add("profile");
  footer.classList.add("footer");
};
/**
 * render the up arrow in the footer
 */
createFooterUpArrow = () => {
  const arrow = document.createElement("img");
  arrow.src = "./img/up-arrow.svg";
  arrow.classList.add("up-arrow");
  arrow.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  footer.appendChild(arrow);
};
/**
 * build out the template for the browser
 */
createTemplate = () => {
  const boiler = document.getElementById("boiler-plate");
  createElements();
  styleElements();
  assignSocialMedia();
  assignHero();
  assignImages();
  createFooterLinks();
  createFooterUpArrow();
  document.body.insertBefore(heroSection, boiler);
  document.body.insertBefore(nav, heroSection);
  document.body.insertBefore(profileSection, boiler);
  document.body.insertBefore(footer, boiler);
};
/**
 * on document load, create a the template
 */
document.body.onload = createTemplate();
