//Setting ID to News section
const newsContainer = document.getElementById("block-adchallenge-content");
newsContainer.setAttribute("id", "challenge-news");

// Section selectors
const homeSection = document.getElementById("challenge-home");
const aboutSection = document.getElementById("block-about-me");
const newsSection = document.getElementById("challenge-news");
const eventSection = document.getElementById("block-latest-event");

const sections = [];
sections.push(homeSection, aboutSection, newsSection, eventSection);

// Nav links selector

const navLinks = document.querySelectorAll("li");

//Smooth scrolling with links

const allLinks = document.querySelectorAll("a");
allLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el === null) {
        return;
      }
      el.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//Adding after to first child in news section
const headingInNews = newsContainer.getElementsByTagName("h2");
headingInNews[0].classList.add("first-h2", "margin-b");

//Change text in site slogan
const siteSlogan = document.getElementsByClassName("site-slogan");
siteSlogan[0].innerHTML = "<strong>Music</strong>Theme";

// Observer for adding focus class on nav links whern scroll into viewport
const observer = new IntersectionObserver(
  (entry) => {
    entry.forEach((el) => {
      console.log(el);
      if (el.isIntersecting) {
        if (el.target.id === "challenge-home")
          navLinks[0].classList.add("focus");
        if (el.target.id === "challenge-news")
          navLinks[1].classList.add("focus");
        if (el.target.id === "block-latest-event")
          navLinks[2].classList.add("focus");
        if (el.target.id === "block-about-me")
          navLinks[3].classList.add("focus");
      } else if (!el.isIntersecting) {
        if (el.target.id === "challenge-home")
          navLinks[0].classList.remove("focus");
        if (el.target.id === "challenge-news")
          navLinks[1].classList.remove("focus");
        if (el.target.id === "block-latest-event")
          navLinks[2].classList.remove("focus");
        if (el.target.id === "block-about-me")
          navLinks[3].classList.remove("focus");
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
