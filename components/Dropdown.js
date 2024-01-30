import Image from "next/image";

import { useState, useRef, useEffect } from "react";

const Dropdown = ({ onSelectValue, options, imgSrc }) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    let handler = (e) => {
        if(!dropdownRef.current.contains(e.target)){
            setIsActive(false);
        }
    }
    document.addEventListener("mousedown", handler);
    return () => {
        document.removeEventListener("mousedown", handler);
    }
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex justify-between  gap-2 p-3 border border-[#F2F2F2] rounded-lg cursor-pointer"
      >
        <span className="text-small-regular font-figtree text-bulma">Select  Tags</span>
        <Image src={`${imgSrc || "/assets/arrow-down.svg"}`} alt="caret down" width={16} height={16} />
      </div>

      {isActive && (
        <div className="p-2 max-h-48 overflow-auto invisible-scrollbar z-50 w-full bg-white absolute top-[110%] rounded-xl dropdown-shadow">
          {options.map((option) => (
            <p key={option} onClick = {() => {
                onSelectValue(option)
                setIsActive(false);
            }} className="p-2 cursor-pointer hover:bg-[#F5F5F5] font-figtree text-bulma text-small-regular rounded-lg">
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;