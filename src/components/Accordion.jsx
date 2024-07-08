import { Children, useState } from "react";
import { motion } from "framer-motion";

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
      <motion.div
        layout
        className={`content ${
          isOpen ? "h-fit overflow-auto" : "h-0 overflow-hidden "
        }`}
      >
        {childArray.length > 0 &&
          childArray.map((child, index) => (
            <div className="" key={index}>
              {child}
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Accordion;
