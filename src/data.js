import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "tsg money saving",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "unlimited hiking",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Your preferred confort",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th,2023",
    title: "Tsg Adventure",
    info: "more datails loading",
  },
  {
    id: 2,
    image: tour2,
    date: "august 26th,2023",
    title: "Tsg Adventure",
    info: "more datails loading",
  },
  {
    id: 3,
    image: tour3,
    date: "Decemeber 26th,2023",
    title: "Tsg Adventure",
    info: "more datails loading",
  },
  {
    id: 4,
    image: tour4,
    date: "november 26th,2023",
    title: "Tsg game",
    info: "more datails loading",
  },
];
