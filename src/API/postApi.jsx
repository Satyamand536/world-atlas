import axios from 'axios';
const api=axios.create({
    baseURL: 'https://restcountries.com/v3.1',
})
//http get method
export const getCountryData=()=>{
    return api.get('/all?fields=name,flags,population,region,capital,flags')
};

//http get method with country name
export const getCountryDataByName=(name)=>{
    return api.get(`/name/${name}?fullText=true&fields=name,flags,population,region,capital,languages,currencies`)
};
