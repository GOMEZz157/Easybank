import logo from "../images/logo2.svg";
import face from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import insta from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-dark-blue h-155.25 md:h-66.25 flex items-center justify-center flex-col gap-15">
      <div className="w-full px-20 flex gap-10 md:justify-between items-center flex-col md:flex-row">
        <div className="flex flex-col gap-8.5 md:gap-15.25 items-center md:items-start">
          <img src={logo} alt="logo do easybank" width={139} height={20} />
          <div className="flex justify-between w-45.75">
            <a href="">
              <img src={face} alt="icone do facebook" />
            </a>
            <a href="">
              <img src={youtube} alt="icone do youtube" />
            </a>
            <a href="">
              <img src={twitter} alt="icone do twitter" />
            </a>
            <a href="">
              <img src={pinterest} alt="icone do pinterest" />
            </a>
            <a href="">
              <img src={insta} alt="icone do instagram" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col text-center md:text-left md:grid md:grid-cols-2 w-66 text-base text-white gap-3">
          <a href="#">About us</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Support</a>
          <a href="#">Blog</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-5.75 md:items-end items-center justify-end">
          <Button />
          <p className="text-grayish-blue text-[13px]">
            © EasyBank. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="w-full text-center text-grayish-blue">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/GOMEZz157" className="text-blue-600 hover:underline">
          Nicollas Gomes
        </a>
        .
      </div>
    </footer>
  );
}
