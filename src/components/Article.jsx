import dolar from "../images/image-currency.jpg";
import confete from "../images/image-confetti.png";
import plane from "../images/image-plane.png";
import restaurant from "../images/image-restaurant.png";
import ArticleCard from "./ArticleCard";

export default function Article() {
  const cards = [
    {
      image: dolar,
      alt: "Imagem de alguns dólares",
      author: "Claire Robinson",
      subject: "Receive money in any currency with no fees",
      paragraph:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: restaurant,
      alt: "Imagem de um restaurante",
      author: "Wilson Hutton",
      subject: "Treat yourself without worrying about money",
      paragraph:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      image: plane,
      alt: "Imagem de um avião",
      author: "Wilson Hutton",
      subject: "Take your Easybank card wherever you go",
      paragraph:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      image: confete,
      alt: "Imagem de confetes no ar",
      author: "Claire Robinson",
      subject: "Our invite-only Beta accounts are now live!",
      paragraph:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];
  return (
    <section className="flex justify-center items-center bg-light-gray h-172">
      <div className="w-277.5">
        <h2 className="text-4xl font-light text-dark-blue mb-9">
          Latest Articles
        </h2>
        <div className="flex gap-7.5">
          {cards.map((cards, index) => (
            <ArticleCard key={index} {...cards} />
          ))}
        </div>
      </div>
    </section>
  );
}
