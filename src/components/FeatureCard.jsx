/* eslint-disable react/prop-types */
export default function FeatureCard({ icon, title, description }) {
    return (
      <div className="w-66.25 flex flex-col">
        <img src={icon} alt={title} className="size-18" />
        <h2 className="font-light text-2xl mt-12">{title}</h2>
        <p className="text-sm text-grayish-blue mt-9 max-w-58.25">{description}</p>
      </div>
    );
  }
  