import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Countries from "@/components/countries/Countries";
import Header from "@/components/header/Header";
import Search from "@/components/search/Search";


export default function Home({ countriesData }) {
  const [selectedRegion, setSelectedRegion] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.query.region != selectRegion && router.query.region) {
      setSelectedRegion(router.query.region);
    }

    // alert("Side effect!");

    console.log(router.query.region);
  },[selectedRegion]);

  function selectRegion(region) {
    setSelectedRegion(region);
  }

  return (
    <div className="bg-gray-100">
      <Header />
      <Search selectRegion={selectRegion}  selectedRegion={selectedRegion}/>
      <Countries countriesData={countriesData} selectedRegion={selectedRegion} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/staticdata");
  const json = await response.json();
  const data = JSON.parse(json);

  return {
    props: {
      countriesData: data
    },
  };
}
