import CountryCard from "@/components/country-card/CountryCard";
import Header from "@/components/header/Header";
import Search from "@/components/search/Search";

export default function Home({ data }) {
  return (
    <div className="bg-gray-100">
      <Header />
      <Search />
      <CountryCard country={data[1]}/>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/staticdata");
  const json = await response.json();
  const data = JSON.parse(json);

  return {
    props: {
      data: data
    },
  };
}
