import { FiChevronDown } from "react-icons/fi";

import { useState } from "react";

export default function RegionDropdown({ selectRegion, selectedRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState('');

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function selectItem(e) {
    setRegion(e.target.innerText);
    selectRegion(e.target.innerText);
    toggleDropdown();
  }

  return (
    <div className="relative w-[50%] mb-8">
      <div
        className="flex items-center justify-between cursor-pointer bg-white mb-2 px-7 py-3 rounded"
        onClick={toggleDropdown}
      >
        <span>{selectedRegion ? selectedRegion : 'Region'}</span>{" "}
        <span>
          <FiChevronDown />
        </span>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} absolute bg-white w-full px-7 py-3 rounded`}>
        <ul>
          {regions.map((region, index) => {
            return (
              <li className="mb-1 cursor-pointer last:mb-0" onClick={selectItem} key={index}>
                {region}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
