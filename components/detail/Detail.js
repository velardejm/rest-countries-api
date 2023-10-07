import Link from "next/link";

Link
export default function Detail() {
    return (
        <div>
            <h1>Flag Image</h1>
            <div>
                <p>Native Name</p>
                <p>Population</p>
                <p>Region</p>
                <p>Sub Region</p>
                <p>Capital</p>
            </div>

            <div>
                <p>Top Level Domain</p>
                <p>Currencies</p>
                <p>Languages</p>
            </div>

            <div>
                <h2>Border Countries</h2>
                <div>
                    <Link>France</Link>
                    <Link>Germany</Link>
                    <Link>Netherlands</Link>
                </div>
            </div>
                
        </div>
    );
}