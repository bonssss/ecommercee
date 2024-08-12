// src/data/products.js
import Images from '../images/1.jpg'
import Image2 from '../images/3.jpg'
import Image3 from '../images/9.jpg'
import Image4 from '../images/3.jpg'
import Image5 from '../images/4.jpg'
import Image6 from '../images/5.jpg'
import Image7 from '../images/6.jpg'
import Image8 from '../images/2.jpg'
import Image9 from '../images/2.jpg'
import Image10 from '../images/2.jpg'


export const products = [
    {
      id: 1,
      name: 'Soccer Ball Necklace',
      price: 50.79,
      rating: 5,
      description: 'Soccer Ball Necklace made from high-quality glass beads, perfect for any sports fan.',
      images: Images,
      material: 'Glass',
      chainStyle: 'Bead',
      length: '42 cm',
    },
    {
      id: 2,
      name: 'Elegant Pearl Earrings',
      price: 35.49,
      rating: 4.5,
      description: 'Elegant pearl earrings with a classic design, ideal for formal occasions.',
      images:  Image10,
      material: 'Pearl',
      chainStyle: 'N/A',
      length: 'N/A',
    },
    {
      id: 3,
      name: 'Leather Bracelet',
      price: 22.99,
      rating: 4,
      description: 'Stylish leather bracelet with a modern design, suitable for both men and women.',
      images:  Image2,
      material: 'Leather',
      chainStyle: 'N/A',
      length: 'Adjustable',
    },
    {
      id: 4,
      name: 'Gold Plated Ring',
      price: 120.99,
      rating: 5,
      description: 'A luxurious gold-plated ring with an intricate design, perfect for special occasions.',
      images:  Image3,
      material: 'Gold-plated',
      chainStyle: 'N/A',
      length: 'N/A',
    },
    {
      id: 5,
      name: 'Silver Chain Necklace',
      price: 75.89,
      rating: 4.8,
      description: 'Elegant silver chain necklace, a perfect accessory for any outfit.',
      images:  Image4,
      material: 'Sterling Silver',
      chainStyle: 'Link Chain',
      length: '45 cm',
    },
    {
      id: 6,
      name: 'Diamond Stud Earrings',
      price: 250.50,
      rating: 5,
      description: 'Exquisite diamond stud earrings that add a touch of elegance to any ensemble.',
      images:  Image5,
      material: 'Diamond',
      chainStyle: 'N/A',
      length: 'N/A',
    },
    {
      id: 7,
      name: 'Beaded Bracelet',
      price: 19.99,
      rating: 4.2,
      description: 'Colorful beaded bracelet that brings a fun and vibrant touch to your style.',
      images:  Image6,
      material: 'Beads',
      chainStyle: 'Elastic',
      length: 'Adjustable',
    },
    {
      id: 8,
      name: 'Ruby Pendant Necklace',
      price: 150.00,
      rating: 4.7,
      description: 'Beautiful ruby pendant necklace, a timeless piece for any jewelry collection.',
      images:  Image7,
      material: 'Ruby',
      chainStyle: 'Rope Chain',
      length: '50 cm',
    },
    {
      id: 9,
      name: 'Custom Engraved Ring',
      price: 99.99,
      rating: 4.9,
      description: 'Personalize your jewelry with a custom engraved ring, perfect for memorable occasions.',
      images:  Image8,
      material: 'Stainless Steel',
      chainStyle: 'N/A',
      length: 'N/A',
    },
    {
      id: 10,
      name: 'Turquoise Drop Earrings',
      price: 45.50,
      rating: 4.6,
      description: 'Chic turquoise drop earrings, perfect for adding a pop of color to your outfit.',
      images:  Image9,
      material: 'Turquoise',
      chainStyle: 'N/A',
      length: 'N/A',
    },
  ];
  
  export const getProductById = (id) => {
    return products.find((product) => product.id === parseInt(id));
  };
  