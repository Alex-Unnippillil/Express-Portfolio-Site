
const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", nav: NAV });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", nav: NAV });
});

app.get("/projects", (req, res) => {
  const projects = [
    { name: "Next.js Rental App", tech: ["AWS", "Next.js", "RDS"], link: "#" },
    { name: "Security Lab ARP Spoofing", tech: ["Python", "Networking"], link: "#" },
    { name: "Security Lab – ARP Spoofing", tech: ["Python", "Networking"], link: "#" }
  ];
  res.render("projects", { title: "Projects", nav: NAV, projects });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact", nav: NAV });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found", nav: NAV });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});