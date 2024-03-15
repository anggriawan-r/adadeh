import CardList from "./components/CardList";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const heroes = [
    {
      id: 1,
      bgColor: "bg-gray-900",
      imageUrl: "https://via.placeholder.com/600x400",
      title: "YEZZY 500 STONE TAUPE",
      imageAlt: "YEZZY 500 STONE TAUPE",
      buttonUrl: "#",
      isButtonDark: true,
    },
    {
      id: 2,
      bgColor: "bg-yellow-500",
      imageUrl: "https://via.placeholder.com/600x400",
      title: "Belanja perlengkapan Perang anda disini!",
      imageAlt: "Belanja perlengkapan Perang anda disini!",
      buttonUrl: "#",
      isButtonDark: false,
    },
  ];
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15,
      image: "https://via.placeholder.com/400",
    },
  ];

  return (
    <div>
      <HeroSection heroes={heroes} />
      <CardList products={products} />
    </div>
  );
}
