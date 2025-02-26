import logo from "../images/logo.svg";
import Button from "./Button";
import Menu from "../images/icon-hamburger.svg"
export default function Header() {
  return (
    <header className="text-sm flex justify-around items-center w-screen h-20">
      <img src={logo} alt="logo do easybank" className="w-35 h-5"/>
      <div className="w-84 h-6 flex justify-between font-light text-grayish-blue">
        <a href=""> <img src={Menu} alt="" /></a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Carrers</a>
      </div>
      <Button/>
    </header>
  );
}
