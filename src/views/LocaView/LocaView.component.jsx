import React, { useEffect , useState} from 'react';

import { useParams} from "react-router-dom";

import LocationItem from '../../components/LocationItem/LocationItem.component';
import HeaderLoca from '../../components/HeaderLoca/HeaderLoca.component';


import * as Style from './LocaView.style'



function LocaView() {

const [restaLoca, setRestaLoca]= useState();
const { restaItem } = useParams();

const API_URL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json";


  const fetchListData = async () => {
      fetch(API_URL).then(
        function (response){
          return response.json();
        }
      ).then(
        function(data){
          const restaurant= data.restaurants.filter((restaurant)=>{
              return restaurant.name == restaItem;
          })
          setRestaLoca(restaurant)
          console.log(restaLoca)
        }
      )
    };

    const handleConsole = () => {
        console.log(restaLoca)
    }
    
    useEffect(() => {
		fetchListData()
	}, []);

return (
    <>
        <HeaderLoca />
        {/* <LocationItem  restaInfo={restaLoca} /> */}
        <button onClick={handleConsole}></button>
    </>
);
}

export default LocaView;

