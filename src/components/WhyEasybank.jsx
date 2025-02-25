import online from "../images/icon-online.svg";
import simple from "../images/icon-budgeting.svg";
import open from "../images/icon-api.svg";
import fast from "../images/icon-onboarding.svg";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: online,
    title: "Online Banking",
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  },
  {
    icon: simple,
    title: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
  },
  {
    icon: fast,
    title: "Fast Onboarding",
    description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
  },
  {
    icon: open,
    title: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
  }
];

export default function WhyEasybank() {
  return (
    <section className="bg-gray-mono pl-50 h-170.25 flex flex-col gap-15 justify-center">
      <div className="flex flex-col gap-9 w-160">
        <h2 className="text-4xl text-dark-blue">Why choose Easybank?</h2>
        <p className="text-lg font-light text-grayish-blue">
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
