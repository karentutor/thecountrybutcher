import { FaFacebook, FaInstagram } from 'react-icons/fa'

export const navLinks = [
  { id: 1, text: 'Home', route: '/' },
  {
    id: 2,
    text: 'About Us',
    subMenu: [
      { id: 1, text: 'Our Story', route: '/our-story' },
      { id: 2, text: 'Contact', route: '/contact' },
    ],
  },
  {
    id: 4,
    text: 'Shop',
    subMenu: [
      { id: 1, text: 'Product List', route: '/product-list' },
      { id: 2, text: 'Shop Retail', route: '/shop-retail' },
    ],
  },
]
export const footerLinks = [
  { id: 1, text: 'Home', route: '/' },
  { id: 2, text: 'Our Story', route: '/our-story' },
  { id: 3, text: 'Contact', route: '/contact' },
  { id: 4, text: 'Product List', route: '/product-list' },
  { id: 5, text: 'Shop Retail', route: '/shop-retail' },
]
export const slides = [
  '/imgs/slide1.webp',
  '/imgs/slide2.jpg',
  '/imgs/slide3.webp',
  '/imgs/slide5.webp',
]
export const socialLinks = [
  {
    id: 1,
    text: 'The Country Butcher Shop',
    url: 'https://www.facebook.com/whosyourbutcher/',
    icon: FaFacebook,
  },
  {
    id: 2,
    text: 'thecountrybutcher.lambtonmeats',
    url: 'https://www.instagram.com/thecountrybutcher.lambtonmeats/',
    icon: FaInstagram,
  },
]
export const gallery = [
  '/imgs/gallery1.png',
  '/imgs/gallery2.png',
  '/imgs/gallery3.png',
  '/imgs/gallery4.png',
  '/imgs/gallery5.png',
  '/imgs/gallery6.png',
  '/imgs/gallery7.png',
  '/imgs/gallery8.png',
]
export const testimonials = [
  {
    id: 1,
    quote:
      '“Great meat no comparison to the super markets. Fair prices wide selection of beef poultry and pork, mostly frozen but some fresh.”',
    author: '- Dustin W.',
  },
  {
    id: 2,
    quote:
      '“We have really enjoyed Gunter Bros. They have all beef pepperoni and sausages. The lamb is great. We had one goat processed here, it was fantastic.”',
    author: '- Happy Customer',
  },
  {
    id: 3,
    quote:
      "“I love buying my meat from Gunter Brothers. Not only is it always service with a smile, but it's meat I feel really good about. and the prices can't be beat. SO easy to order online and pick just what you want.”",
    author: '- SueAnn D.',
  },
  {
    id: 4,
    quote:
      "“Great selection of meats, cheese, pork rinds, pepperonis, sausages, you name it! Most delicious pork rinds we've ever had... bbq, regular, and dilly flavour! Yummmm!!! ?”",
    author: '- April R.',
  },
  {
    id: 5,
    quote:
      "“Great selection, good prices, knowledgeable staff - overall a great place to buy meat. In addition they do a lot of the processing for local farms, we got half a pig butchered there and it's been excellent as well. A hidden gem.”",
    author: '- Daniel E.',
  },
]
