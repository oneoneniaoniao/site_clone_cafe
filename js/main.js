const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let href = link.getAttribute("href").replace("#", "");
    let target = document.getElementById(href);
    const rect = target.getBoundingClientRect().top;
    const offset = window.pageYOffset
    const distance = rect + offset;
    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  });
})