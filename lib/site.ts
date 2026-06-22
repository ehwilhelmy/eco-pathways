export const site = {
  name: "Eco-Pathways",
  legalName: "Eco-Pathways LLC",
  tagline: "Premium Composite Docks & Bridges",
  email: "sales@eco-pathways.com",
  phone: "(832) 687-2147",
  phoneHref: "tel:+18326872147",
  youtube: "https://www.youtube.com/@ecopathways",
  brochure: "/eco-pathways-brochure.pdf",
};

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const nav: NavItem[] = [
  { label: "The Difference", href: "/difference" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Advantages to Owners", href: "/advantages-owners" },
      { label: "Advantages to Contractors", href: "/advantages-contractors" },
      { label: "Product Specs", href: "/product-specs" },
      { label: "DOCKSrx Docks", href: "/docks" },
      { label: "Golf Cart Bridges", href: "/golf-cart-bridges" },
    ],
  },
  { label: "DOCKSrx Docks", href: "/docks" },
  { label: "Golf Cart Bridges", href: "/golf-cart-bridges" },
  { label: "About", href: "/about" },
];
