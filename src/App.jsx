import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import WhyEasybank from "./components/WhyEasybank";

export default function App() {
  return (
    <div className="font-public text-lg">
      <Header />
      <Main />
      <WhyEasybank/>
      <Article/>
      <Footer/>
    </div>
  );
}
