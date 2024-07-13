import { Children, useState } from "react";

// eslint-disable-next-line react/prop-types
const Accordion = ({ className, title, children }) => {
  const childArray = Children.toArray(children);
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={className + "w-full"}>
      <button
        className="border-b-[1px] border-b-black dark:border-b-white flex justify-between w-full"
        onClick={handleOpen}
      >
        <p>{title}</p>
      </button>
      <div
        className={`content transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 h-0 duration-0"
        }`}
      >
        {childArray.length > 0 &&
          childArray.map((child, index) => (
            <div className="" key={index}>
              {child}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordion;
