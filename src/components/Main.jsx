import Button from "./Button";
import Mockup from "../images/image-mockups.png";

export default function Main() {
  return (
    <section className="flex flex-col-reverse bg-light-gray font-light h-164 items-center md:justify-between overflow-hidden justify-center mockup md:flex-row">
      <div className="flex flex-col gap-6 w-85.5 md:w-106 md:ml-50 md:text-left text-center items-center md:items-start translate-y-[-50px] md:translate-0">
        <h1 className="text-dark-blue md:text-[52px] text-4xl">
          Next generation digital banking!!!!
        </h1>
        <p className="text-grayish-blue md:text-left text-center md:text-base text-sm">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending,
          <br /> saving, budgeting, investing, and much more.
        </p>
        <Button />
      </div>
      <div className="flex">
        <img
          src={Mockup} // Troca de imagem conforme largura
          alt="mockup de celulares do easy bank"
          width="764px"
          className="translate-x-0 translate-y-[-150px] md:translate-y-0 md:translate-x-[120px]"
        />
      </div>
    </section>
  );
}
