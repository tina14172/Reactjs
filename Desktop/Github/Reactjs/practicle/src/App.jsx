import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import './App.css';

const cars = [
  {
    companyName: "Ferrari",
    model: "SF90 Stradale",
    price: "₹7.50 Crore",
    category: "Supercar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5RBkswKbry6f89f5MXtjF2XPUsepZSnNVJwoj29jhA&s"
  },
  {
    companyName: "Lamborghini",
    model: "Revuelto",
    price: "₹8.89 Crore",
    category: "Supercar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsHg8wbf_mx3i5AyLLW-Gz2iOax6Gkejv9rxq09D0sA&s=10"
  },
  {
    companyName: "Bugatti",
    model: "Chiron Super Sport",
    price: "₹35 Crore",
    category: "Hypercar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcZ2Uv4fzJ3TU57pquvHMEcdiZv8NsV9ZsExI9pADbQ&s=10"
  },
  {
    companyName: "Rolls-Royce",
    model: "Phantom",
    price: "₹10 Crore",
    category: "Luxury Sedan",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmWYOmmD5RD_czPpJeMTbvKggydiIA0KZrMnUiPV8fw&s=10"
  },
  {
    companyName: "Mercedes-Benz",
    model: "S-Class",
    price: "₹1.90 Crore",
    category: "Luxury Sedan",
    img: "https://car.zigcdn.com/images/car-images/930x620/Mercedes-Benz/AMG-S-63/11732/1725008896775/221_high-tech-silver_8d979c.jpg"
  },
  {
    companyName: "BMW",
    model: "M4 Competition",
    price: "₹1.55 Crore",
    category: "Sports Coupe",
    img: "https://navnitgroup.in/web/assets/images/car-list/bmw-m4-cs/bmw-m4-cs2.jpg"
  },
  {
    companyName: "Audi",
    model: "RS e-tron GT",
    price: "₹2.05 Crore",
    category: "Electric Sports Car",
    img: "https://stimg.cardekho.com/images/car-images/large/Audi/RS-e-tron-GT/8607/1676287312179/222_Suzuka-Grey-Metallic_e3d1d3.jpg?impolicy=resize&imwidth=420"
  },
  {
    companyName: "Porsche",
    model: "911 Turbo S",
    price: "₹3.35 Crore",
    category: "Sports Car",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihg2_a5HO4IxrJ8E4j7pq-CNc244UfdAPUy6MxrP6QA&s=10"
  },
  {
    companyName: "Tesla",
    model: "Model S Plaid",
    price: "₹1.30 Crore",
    category: "Electric Sedan",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXyedU3ZwdK_27IWrmKWpHrbNGmFb5eOcTty05f9wrQ&s=10"
  },
  {
    companyName: "McLaren",
    model: "750S",
    price: "₹5.90 Crore",
    category: "Supercar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJWyWUKQrnsSCSodfPtAbkdE2nAZqaeCX34PcFLBXDw&s=10"
  },
  {
    companyName: "Aston Martin",
    model: "DB12",
    price: "₹4.80 Crore",
    category: "Luxury Sports Car",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpGeZ_gXt31KmOxTOs5caOoI7ioAmJXYt6yTvyQnARw&s=10"
  },
  {
    companyName: "Bentley",
    model: "Continental GT",
    price: "₹5.20 Crore",
    category: "Luxury Coupe",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqc6Rj0xMdGvPA234tIbD1KQWpOcr4RU6fNtDYPAu58A&s=10"
  },
  {
    companyName: "Pagani",
    model: "Utopia",
    price: "₹20 Crore",
    category: "Hypercar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNq0YHrR5mVDgD6CQ8irFmrjjHjWsXaevCR1WgmDl6g&s=10"
  },
  {
    companyName: "Koenigsegg",
    model: "Jesko Absolut",
    price: "₹25 Crore",
    category: "Hypercar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUROyeSVR1G6OdA3zrzMnl59UhsI5U9tY_Gcw-m3LgkA&s=10"
  },
  {
    companyName: "Toyota",
    model: "Land Cruiser 300",
    price: "₹2.40 Crore",
    category: "Luxury SUV",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMH2mQ5me3HHD2R8AbsBXd8G2jDEhOlri-aBE6Tl1NA&s=10"
  }
];





function App() {

  return (
   <>
    <Header/>
    <Home mycars={cars}/>
    <Footer/>
   </>
  )
}

export default App;
