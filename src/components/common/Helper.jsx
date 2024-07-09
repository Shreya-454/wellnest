
import heroImg1 from '../../assets/images/webp/headerImages/heroImg1.webp'
import heroImg2 from '../../assets/images/webp/headerImages/heroImg2.webp'
import heroImg3 from '../../assets/images/webp/headerImages/heroImg3.webp'
import heroImg4 from '../../assets/images/webp/headerImages/heroImg4.webp'
import coaching from '../../assets/images/svg/servicesSvg/coaching.svg'
import cunsultancy from '../../assets/images/svg/servicesSvg/consultancy.svg'
import home from '../../assets/images/svg/servicesSvg/home.svg'
import { Instagrame, Twitter, Facebook, Youtube, Music } from "../common/Icon";

// =============== HERO SECTION =============
export const NavLinkList = [
  { link: "About Wellnest", path: "#about" },
  { link: "Our Services", path: "#services" },
  { link: "Benefits", path: "/benefits" },
  { link: "FAQs", path: "/faq" },
  { link: "Upcoming Workshops", path: "/workshops" },
];
export const HeroImageList = [
  {
    img: heroImg1,
  },
  {
    img: heroImg2,
  },
  {
    img: heroImg3,
  },
  {
    img: heroImg4,
  },
];

// ================== UNLOCK ===================
export const UnlockData = [
  {
    dates: "01",
    tittle:
      "Meditation 101: Learn the basics of meditation to start your own practice.",
  },
  {
    dates: "04",
    tittle: "Tap into your Intuition",
  },
  {
    dates: "06",
    tittle: "Living in Alignment",
  },
];

// =============== FREQUENTLY ===================
export const accordionData = [
  {
    index: 0,
    titleno: "1.",
    title: "What is a Health Coaches scope of practice?",
    content: [
      "Facilitate and empower clients to develop and achieve health and wellness goals.",
      "Support clients in navigating behavioral change in the capacity of a holistic health professional, an accountability partner, a guide on the side, and an intuition and transformational coach.",
      "Share evidence-based resources and information from recognized authorities.",
      "Assist clients in strengthening their insight and intuition to set goals and commit to action steps, to establish accountability and real transformation in their lives.",
    ],
  },
  {
    index: 1,
    titleno: "2.",
    title:
      "How much does it cost to use the AI Trading Platform, and are there any discounts available?",
    content: [
      "Facilitate and empower clients to develop and achieve health and wellness goals.",
      "Support clients in navigating behavioral change in the capacity of a holistic health professional, an accountability partner, a guide on the side, and an intuition and transformational coach.",
      "Share evidence-based resources and information from recognized authorities.",
      "Assist clients in strengthening their insight and intuition to set goals and commit to action steps, to establish accountability and real transformation in their lives.",
    ],
  },
  {
    index: 2,
    titleno: "3.",
    title: "How can i start using the trading platform?",
    content: [
      "Facilitate and empower clients to develop and achieve health and wellness goals.",
      "Support clients in navigating behavioral change in the capacity of a holistic health professional, an accountability partner, a guide on the side, and an intuition and transformational coach.",
      "Share evidence-based resources and information from recognized authorities.",
      "Assist clients in strengthening their insight and intuition to set goals and commit to action steps, to establish accountability and real transformation in their lives.",
    ],
  },
  {
    index: 3,
    titleno: "4.",
    title: "How can i start using the trading platform?",
    content: [
      "Facilitate and empower clients to develop and achieve health and wellness goals.",
      "Support clients in navigating behavioral change in the capacity of a holistic health professional, an accountability partner, a guide on the side, and an intuition and transformational coach.",
      "Share evidence-based resources and information from recognized authorities.",
      "Assist clients in strengthening their insight and intuition to set goals and commit to action steps, to establish accountability and real transformation in their lives.",
    ],
  },
  {
    index: 4,
    titleno: "5.",
    title: "Does it matter what time zone I live in?",
    content: [
      "Facilitate and empower clients to develop and achieve health and wellness goals.",
      "Support clients in navigating behavioral change in the capacity of a holistic health professional, an accountability partner, a guide on the side, and an intuition and transformational coach.",
      "Share evidence-based resources and information from recognized authorities.",
      "Assist clients in strengthening their insight and intuition to set goals and commit to action steps, to establish accountability and real transformation in their lives.",
    ],
  },
  {
    index: 5,
    titleno: "6.",
    title: "What if I need to pause or cancel the coaching agreement?",
    content: [
      "Facilitate and empower clients to develop and achieve health and wellness goals.",
      "Support clients in navigating behavioral change in the capacity of a holistic health professional, an accountability partner, a guide on the side, and an intuition and transformational coach.",
      "Share evidence-based resources and information from recognized authorities.",
      "Assist clients in strengthening their insight and intuition to set goals and commit to action steps, to establish accountability and real transformation in their lives.",
    ],
  },
  {
    index: 6,
    titleno: "7.",
    title: "What about confidentiality?",
    content: [
      "Facilitate and empower clients to develop and achieve health and wellness goals.",
      "Support clients in navigating behavioral change in the capacity of a holistic health professional, an accountability partner, a guide on the side, and an intuition and transformational coach.",
      "Share evidence-based resources and information from recognized authorities.",
      "Assist clients in strengthening their insight and intuition to set goals and commit to action steps, to establish accountability and real transformation in their lives.",
    ],
  },
];
export const ServiceList =[
  {
    icon:coaching,
    title:"One-On-One Coaching",
    discription:'As a Certified Health Coach, I support individuals in addressing all areas of their life to achieve alignment, balance, purpose, health, wellness and happiness. Click here to find out more and book your free consultation!',
    btnname:"Find Out More",
  },
  {
    icon:cunsultancy,
    title:"Brand Consultancy & Corporate Wellness",
    discription:'With 16 years of corporate experience, I now partner with businesses that value social responsibility, aim to build authentic brands, and strive to be Employers of Choice. Click here to explore my services and workshops.',
    btnname:"Explore More",
  },
  {
    icon:home,
    title:"Wellness Store",
    discription:"We are thrilled to introduce a space dedicated to nurturing your mind, body, and spirit. Whether you're looking to enhance your physical health, boost your mental clarity, or find balance in your daily life, our store will offer everything you need to thrive.",
    btnname:"Book Your Free Consultaion",
  }
]

// ============== FOOTER ===================
export const footerSocialIcon = [
  {
    icons: <Instagrame />,
    url: "https://www.instagram.com/",
  },
  {
    icons: <Twitter />,
    url: "https://x.com/",
  },
  {
    icons: <Facebook />,
    url: "https://www.facebook.com/",
  },
  {
    icons: <Youtube />,
    url: "https://www.youtube.com/",
  },
  {
    icons: <Music />,
    url: "https://music.apple.com/",
  },
];
export const footerLinkList = [
  {
    title: "Use Cases",
    links: [
      { link: "About Wellnest", path: "/about" },
      { link: "Our Services", path: "/services" },
      { link: "Benefits", path: "/benefits" },
      { link: "FAQs", path: "/faq" },
      { link: "Upcoming Workshops", path: "/workshops" },
    ],
  },
  {
    title: "Policies",
    links: [
      {
        link: "User Agreement",
      },
      {
        link: "Terms & Conditions",
      },
      {
        link: "Privacy Policy",
      },
      {
        link: "Legal Policy",
      },
      {
        link: "What’s New",
      },
    ],
  },
];
