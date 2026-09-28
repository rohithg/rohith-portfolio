const projects = [
  {
    name: "Snowflake Retail Data Warehouse",
    blurb: "ELT on Snowflake + dbt + Airflow with a retail star schema over ERP, CRM, and logistics sources.",
    href: "https://github.com/rohithg/Snowflake-Retail-Data-Warehouse",
    meta: "dbt · Airflow",
  },
  {
    name: "Echo Earning Agent",
    blurb: "Always-on autonomous agent on GitHub Actions that monitors wallets and bounty listings.",
    href: "https://github.com/rohithg/echo-earning-agent",
    meta: "Automation",
  },
  {
    name: "Distributed Task Queue",
    blurb: "Async Python task queue with priorities, retries, and worker pool management.",
    href: "https://github.com/rohithg/Distributed-Task-Queue-System-",
    meta: "Python",
  },
  {
    name: "C# Dependency Injection Framework",
    blurb: "Custom DI container demonstrating generics, reflection, and SOLID lifetimes.",
    href: "https://github.com/rohithg/-C-Dependency-Injection-Framework",
    meta: "C#",
  },
];

const list = document.getElementById("project-list");
projects.forEach((p, i) => {
  const li = document.createElement("li");
  li.style.animationDelay = `${0.08 * i}s`;
  li.innerHTML = `
    <a href="${p.href}" target="_blank" rel="noopener">
      <h3>${p.name}</h3>
      <span class="meta">${p.meta}</span>
      <p>${p.blurb}</p>
    </a>
  `;
  list.appendChild(li);
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".project-list li").forEach((el) => io.observe(el));

document.getElementById("year").textContent = String(new Date().getFullYear());
