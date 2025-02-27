/* eslint-disable react/prop-types */
export default function FeatureCard({ icon, title, description }) {
    return (
      <div className="w-85.5 md:w-66.25 flex flex-col items-center md:items-start text-center md:text-left h-fit p-3">
        <img src={icon} alt={title} className="size-18" />
        <h2 className="font-light text-xl md:text-2xl mt-8.25 md:mt-12">{title}</h2>
        <p className="text-sm text-grayish-blue mt-4 md:mt-9 max-w-58.25">{description}</p>
      </div>
    );
  }
  