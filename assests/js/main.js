document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".self-left h2");
    const toc = document.querySelector(".self-right ul:first-of-type");
    let pause = false;
  
    toc.innerHTML = "";
    const links = Array.from(headings, (h2, i) => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = h2.textContent.trim();
      a.onclick = (e) => {
        e.preventDefault();
        headings[i].scrollIntoView({ behavior: "smooth", block: "start" });
        links.forEach(l => l.classList.remove("active"));
        a.classList.add("active");
        pause = true;
        setTimeout(() => pause = false, 600);
      };
      const li = document.createElement("li");
      li.appendChild(a);
      toc.appendChild(li);
      return a;
    });
  
    const observer = new IntersectionObserver((entries) => {
      if (pause) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const i = Array.from(headings).indexOf(entry.target);
          links.forEach((l, j) => l.classList.toggle("active", j === i));
        }
      });
    }, { threshold: 0.5 });
  
    headings.forEach(h => observer.observe(h));
  });
  