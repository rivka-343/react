import { useEffect, useState } from 'react';
const images = [
  'https://chef-lavan.co.il/wp-content/uploads/old-storage/uploads/images/fd2fcab061b4326d9c0cb1f43b01717e.jpg',
  'https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2021/09/22192230/WhatsApp-Image-2021-09-19-at-15.33.02.jpeg',
  'https://chef-lavan.co.il/wp-content/uploads/old-storage/uploads/images/fd2fcab061b4326d9c0cb1f43b01717e.jpg',
   'https://www.10dakot.co.il/wp-content/uploads/2017/05/%E2%80%8F%E2%80%8FDSC_0005-%D7%A2%D7%95%D7%AA%D7%A7.jpg',
  'https://img.mako.co.il/2023/03/27/oga_pereg_choclet_autoOrient_i.jpg',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div
    style={{
      backgroundImage: `url(${images[currentImageIndex]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', 
      width: '100vw', 
      transition: 'background-image 1s ease-in-out', 
    }}
  >
  </div>
 );
};
export default Home;