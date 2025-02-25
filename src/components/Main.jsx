import Button from "./Button";
import Mockup from "../images/image-mockups.png";
export default function Main() {
  return (
    <section className="flex bg-light-gray font-light h-164 items-center justify-between overflow-hidden mockup-bg">
      <div className="flex flex-col gap-6 w-106 ml-50">
        <h1 className="text-dark-blue text-[52px]">
          Next generation digital banking!!!!
        </h1>
        <p className="text-grayish-blue text-left">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending,
          <br /> saving, budgeting, investing, and much more.
        </p>
        <Button />
      </div>
      <div className="flex ">
        <img
          src={Mockup}
          alt="mockup de celulares do easy bank"
          width="764px"
          className="translate-x-[120px]"
        />
      </div>
    </section>
  );
}
