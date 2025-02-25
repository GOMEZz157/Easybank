import logo from "../images/logo2.svg";
import face from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import insta from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="h-66.25 bg-dark-blue px-20 flex justify-between items-center">
      <div className="flex flex-col gap-15.25">
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
      <div className="grid grid-cols-2 w-66 text-base text-white gap-3">
        <a href="#">About us</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
        <a href="#">Support</a>
        <a href="#">Blog</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="flex flex-col gap-5.75 items-end justify-end">
        <Button />
        <p className="text-grayish-blue text-[13px]">
          © EasyBank. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
