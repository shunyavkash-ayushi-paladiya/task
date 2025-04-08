document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".self-left h2");
    const toc = document.querySelector(".self-right ul:first-of-type");
  
    toc.innerHTML = "";
  
    const links = Array.from(headings, (h2, i) => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = h2.textContent.trim();
  
      const li = document.createElement("li");
      li.appendChild(a);
      toc.appendChild(li);
  
      a.addEventListener("click", (e) => {
        e.preventDefault();
        headings[i].scrollIntoView({ behavior: "smooth", block: "start" });
  
        links.forEach(link => link.classList.remove("clicked"));
        a.classList.add("clicked");
      });
  
      return a;
    });
  
    const observer = new IntersectionObserver((entries) => {
    }, { threshold: 0.5 });
  
    headings.forEach(h => observer.observe(h));
  });
  