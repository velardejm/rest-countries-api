import RegionDropdown from "./RegionDropdown";
import Searchbar from "./Searchbar";

export default function Search({ selectRegion, selectedRegion }) {
  return (
    <div className='mx-5 '>
      <div className="flex flex-col g-slate-500">
        <Searchbar />
        <RegionDropdown selectRegion={selectRegion} selectedRegion={selectedRegion} />
      </div>
    </div>
  );
}
