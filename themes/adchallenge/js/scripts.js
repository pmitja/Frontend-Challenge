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

//Setting ID to News section
const newsContainer = document.getElementById("block-adchallenge-content");
newsContainer.setAttribute("id", "challenge-news");

//Adding after to first child in news section
const headingInNews = newsContainer.getElementsByTagName("h2");
headingInNews[0].classList.add("first-h2", "margin-b");

//Change text in site slogan
const siteSlogan = document.getElementsByClassName("site-slogan");
siteSlogan[0].innerHTML = "<strong>Music</strong>Theme";
