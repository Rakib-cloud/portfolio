//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';



// projects images
import Project1 from './assets/img/projects/w1.PNG';
import Project2 from './assets/img/projects/w2.PNG';
import Project3 from './assets/img/projects/w3.PNG';
import Project4 from './assets/img/projects/w4.PNG';
import Project5 from './assets/img/projects/w5.PNG';
import Project6 from './assets/img/projects/w6.PNG';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'Feedback',
    href: 'Feedback',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'RS Event Creature',
    category: 'HTML,Bootstrap-5,CSS',
    details:'In this projects any user can know whitch service i provide and how much cost of this service.Different Category have different price.',
    livelink:'https://rs-event-creature.netlify.app/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Camera World',
    category: 'HTML,Bootstrap-5,CSS',
    details:'This is a simple E-commerce projects for a sepific products.Here any user wants to know and buy all latest camera in this world',
    livelink:'https://cameraworldbd.netlify.app/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Rakibs Tuiton point',
    category: 'React-JS,Firebase,Bootstrap-5',
    details:'I am a professional Teacher .So It is necessary to know for update any batch and other issues .IT will help for my students to know update and which batch is running or close',
    livelink:'https://rakibstuitorialpoint.netlify.app/',
  },
  {
    id: '4',
    image: Project4,
    name: 'RS Phone Search',
    category: 'Javascript,Contex API,Bootstrap-5',
    details:'This is basically phone searching website where any user can find his phone that he choose.',
    livelink:'https://rs-phone-search-home.netlify.app/',
  },
  {
    id: '5',
    image: Project5,
    name: 'RS Computer Zone',
    category: 'React Js,Node JS,Mongodb,Tailwind Css,Firebase',
    details:'This is Manufacture website where any user can visits and buy his computer parts whole sell.An Interacive Admin Dashboard is present also User dashboard',
    livelink:'https://manufacture-computer.web.app/',
  },
  {
    id: '6',
    image: Project6,
    name: 'RFL Best Buy warehouse',
    category: 'React Js,Node JS,Mongodb,Bootstrap-5,Firebase',
    details:'This is warehouse management website where any businessman can store his own products and manage it easily',
    livelink:'https://warehousemanagement-60ea7.web.app/',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Web Development',
  },
  {
    name: 'web development',
  },
  {
    name: 'Web Development',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Iot Works',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Content Writing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'Teaching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at mislam172131@bscse.uiu.ac.bd',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Badda,Dhaka',
    description: 'Serving clients worldwide',
  },
];
