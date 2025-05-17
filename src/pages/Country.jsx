import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../API/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country=()=>{
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search,setSearch]=useState();
    const [filter, setFilter] = useState("all");

    useEffect(()=>{
    startTransition(async()=>{
        const res=await getCountryData();
        console.log(res);
        setCountries(res.data);
    })
    },[])
    if(isPending){
        return <Loader/>
    }

    const searchCountry=(curcountry)=>{
        if(search){
            return curcountry.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return curcountry;
    }
    const filterRegion=(curcountry)=>{
        if(filter==="all"){
            return curcountry;
        }
        return curcountry.region.toLowerCase()===filter.toLowerCase();
    }
    
    const filterCountries=countries.filter((curcountry)=>
        searchCountry(curcountry) && filterRegion(curcountry)
    )

    return <section className="country-section">
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}
        countries={countries} setCountries={setCountries}/>
        <ul className="grid grid-four-cols">
            {
                filterCountries.map((curcountry, index) => {
                    return (
                        <CountryCard country={curcountry} key={index} />
                    )
                })
            }
        </ul>

    </section>
}