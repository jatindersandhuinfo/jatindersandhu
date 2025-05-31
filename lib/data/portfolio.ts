import type { Project } from "@/lib/type/portfolio";

export const filters = [
  "All",
  "Next.js",
  "React.js",
  "Node.js",
  "PHP",
  "WordPress",
  "Tailwind CSS",
  "MongoDB"
];

export const projects: Project[] = [
  {
    id: "1",
    href: "https://dairy.malwaland.in/",
    image: "/sandhuDairy1.png",
    title: "Sandhu Dairy",
    category: "Next.JS, React.js, MongoDB, Tailwind CSS",
  },
  {
    id: "2",
    href: "https://luxorlimo.ca/",
    image: "/luxor_limo.png",
    title: "Luxorlimo Rental Service",
    category: "Wordpress,Elementor,Woocommerce"
  },
  {
    id: "3",
    href: "https://invictusfreight.com",
    image: "/invictus_freight1.png",
    title: "InvictusFreight",
    category: "Wordpress,Elementor,Woocommerce"
  },
  {
    id: "4",
    href: "https://lunanav.malwaland.in/",
    image: "/lunanav1.png",
    title: "Luna By Navneet & Navjot",
    category: "Wordpress,Elementor,Woocommerce"
  },
  {
    id: "5",
    href: "https://weddingpagdiwale.com/",
    image: "/weeding.png",
    title: "Wedding Pagdi Wale",
    category: "Wordpress,Elementor,Woocommerce"
  },
  {
    id: "6",
    href: "/",
    image: "/SandhuCementStore.png",
    title: "Admin Sandhu Cement Store",
    category: "Node.JS, React.js, MySQl, Tailwind CSS"
  },
  {
    id: "7",
    href: "/",
    image: "/trueholidayAdmin.png",
    title: "Admin True Holiday",
    category: "PHP, MySQl, Bootstrap"
  },
];
