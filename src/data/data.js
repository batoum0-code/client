// hero image
import heroimg from "../assets/chertie-logo.png";

/// imgs for cherti gallery 

import img1 from '../assets/gallery/1.webp'
import img2 from '../assets/gallery/2.webp'
import img3 from '../assets/gallery/3.webp'
import img4 from '../assets/gallery/4.jpg'
import img5 from '../assets/gallery/5.webp'
import img6 from '../assets/gallery/6.webp'
import img7 from '../assets/gallery/7.jpg'
import img8 from '../assets/gallery/8.webp'








import hightlightimg from "../assets/2.jpg";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/4.png";
import psale2 from "../assets/6.png";
import psale3 from "../assets/10.png";
                                                           
import product1 from "../assets/S0J26eNyVBJH9isGhxmozERfl5ccZq-metaMS5qcGc_--small720-removebg-preview.png";
import product2 from "../assets/3.png";
import product3 from "../assets/4.png";
import product4 from "../assets/5.png";
import product5 from "../assets/7.png";
import product6 from "../assets/6.png";
import product7 from "../assets/8.png";
import product8 from "../assets/9.png";
import product9 from "../assets/logo1.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "MEN Running Shoes",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  btn: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};



const footerAPI = {
  titles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Nike Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};

export const photosGallery = [
  {
    img:img4
  },
  {
    img:img2
  },
  {
    img:img3
  },
  {
    img:img1 
  },
  {
    img:img5
  },
  {
    img:img6
  },
  {
    img:img7
  },
  {
    img:img8
  },

];



export {  footerAPI,   highlight,  popularsales   };
