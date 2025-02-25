import Button from "./components/Button";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="font-public text-lg">
      <Header />
      <section>
        <div>
          <h1>Next generation digital banking!!!!</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button />
        </div>
      </section>
    </div>
  );
}
