import prop1 from "../assets/images/prop1.jpeg";
import prop2 from "../assets/images/prop2.jpg";
import prop3 from "../assets/images/prop3.jpg";
import prop4 from "../assets/images/prop4.jpg";
import prop5 from "../assets/images/prop5.jpg";
import prop6 from "../assets/images/prop6.jpeg";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.jpeg";
import client3 from "../assets/images/client3.jpg";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.jpeg";
import client6 from "../assets/images/client6.jpeg";
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { MdNoteAlt } from "react-icons/md";

export const property = [
  {
    id: 1,
    name: "Luxury Villa",
    image: prop1,
    address: "123 Palm Street, Los Angeles, CA",
    price: "$1,200,000",
    about:
      "A beautiful luxury villa with a spacious garden, swimming pool, and modern interiors.",
    bed: 4,
    bath: 3,
    area: "3500 sq ft",
    owner: "John Doe",
  },
  {
    id: 2,
    name: "Cozy Apartment",
    image: prop2,
    address: "456 Downtown Avenue, New York, NY",
    price: "$750,000",
    about:
      "A stylish and cozy apartment in the heart of the city, perfect for urban living.",
    bed: 2,
    bath: 2,
    area: "1200 sq ft",
    owner: "Sarah Johnson",
  },
  {
    id: 3,
    name: "Modern Townhouse",
    image: prop3,
    address: "789 Greenway, San Francisco, CA",
    price: "$900,000",
    about: "A modern townhouse with stunning beachfront smart home features and a private garage.",
    bed: 3,
    bath: 2,
    area: "2000 sq ft",
    owner: "Michael Smith",
  },
  {
    id: 4,
    name: "Beachfront Bungalow",
    image: prop4,
    address: "321 Ocean Drive, Miami, FL",
    price: "$2,500,000",
    about:
      "A stunning beachfront bungalow with  breathtaking ocean views and private access to the beach.",
    bed: 5,
    bath: 4,
    area: "4000 sq ft",
    owner: "Emily White",
  },
  {
    id: 5,
    name: "Suburban Family Home",
    image: prop5,
    address: "567 Maple Lane, Austin, TX",
    price: "$600,000",
    about:
      "A perfect family home with a stunning beachfront large backyard, great for kids and pets.",
    bed: 3,
    bath: 3,
    area: "2500 sq ft",
    owner: "David Brown",
  },
  {
    id: 6,
    name: "Saurabh",
    image: prop6,
    address: "452 Maple Lane, Austin, TX",
    price: "$300,000",
    about: "A perfect family home with stunning beachfront breathtaking ocean views and  and pets.",
    bed: 2,
    bath: 2,
    area: "2000 sq ft",
    owner: "Mikal Hood",
  },
];

export const service = [
  {
    icon: MdNoteAlt,
    title: "Real Estate Consulting",
    desc: "Providing expert advice on buying, selling, and investing in real estate properties.",
  },
  {
    icon: FaHome,
    title: "Property Documentation",
    desc: "Helping clients with legal paperwork, title verification, and smooth property transactions.",
  },
  {
    icon: GoLaw,
    title: "Home Renovation",
    desc: "Offering high-quality renovation and remodeling services to enhance property value.",
  },
  {
    icon: FaSearch,
    title: "Home Loan Assistance",
    desc: "Guiding clients through mortgage options, loan approvals, and financing solutions.",
  },
  {
    icon: FaNotesMedical,
    title: "Property Inspection",
    desc: "Conducting thorough inspections to ensure the property is safe and meets legal standards.",
  },
  {
    icon: FaCameraRetro,
    title: "Real Estate Marketing",
    desc: "Helping property owners market their listings with professional photography and online ads.",
  },
];

export const client = [
  {
    id: 1,
    image:client1,
    name: "John Doe",
    text: "The service was outstanding! They helped me find my dream home quickly and efficiently.",
    feedback: "★★★★★",
  },
  {
    id: 2,
    image: client2,
    name: "Sarah Johnson",
    text: "Very professional team. They guided me through the entire home-buying process smoothly.",
    feedback: "★★★★☆",
  },
  {
    id: 3,
    image: client3,
    name: "Michael Smith",
    text: "I had an amazing experience. The team was knowledgeable and highly responsive.",
    feedback: "★★★★★",
  },
  {
    id: 4,
    image:client4,
    name: "Emily White",
    text: "Excellent support throughout the deal. Highly recommend their services!",
    feedback: "★★★★★",
  },
  {
    id: 5,
    image:client5,
    name: "David Brown",
    text: "Their expertise in real estate helped me get a great deal on my new property.",
    feedback: "★★★★☆",
  },
  {
    id: 6,
    image:client6,
    name: "Sophia Wilson",
    text: "I appreciate their dedication and transparency. The best real estate service I’ve used!",
    feedback: "★★★★★",
  },
];
