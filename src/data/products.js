import laptopImage from "../assets/laptop-01.jpg";
import headPhoneImage from "../assets/headphone-01.jpg";
import smartPhoneImage from "../assets/mobile-01.jpg";
import smartWatchImage from "../assets/smartwatch-01.jpg";
import gamingLaptopImage from "../assets/gaminglaptop-01.jpg";
import bluetoothSpeakerImage from "../assets/bluetoothspeaker-01.jpg";

const products = [
  {
    id: 1,
    name: "Apple MacBook Air",
    category: "Laptops",
    price: 89999,
    description: "Powerful and lightweight laptop for work and creativity.",
    image: laptopImage
  },
  {
    id: 2,
    name: "Sony Wireless Headphones",
    category: "Accessories",
    price: 4999,
    description: "Premium sound quality with comfortable wireless listening.",
    image: headPhoneImage
  },
  {
    id: 3,
    name: "Samsung Smartphone",
    category: "Mobiles",
    price: 24999,
    description: "Modern smartphone with a brilliant display and camera.",
    image: smartPhoneImage
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Accessories",
    price: 3999,
    description: "Stay connected with smart notifications and fitness tracking.",
    image: smartWatchImage
  },
  {
    id: 5,
    name: "Gaming Laptop",
    category: "Laptops",
    price: 74999,
    description: "Performance laptop for gaming and demanding applications.",
    image: gamingLaptopImage
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Accessories",
    price: 1999,
    description: "Portable speaker with rich and powerful audio.",
    image: bluetoothSpeakerImage
  }
];

export default products;
