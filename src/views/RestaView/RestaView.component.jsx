import React, { useState, useEffect }from 'react';
import HeaderLunch from '../../components/HeaderLunch/HeaderLuch.component';
import RestaList from '../../components/RestaList/RestaList.component';


function  RestaView() {

  const [restaurants, setRestaurants] = useState([ ]);

  const API_URL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json";


  const fetchListData = async () => {
    return await fetch(API_URL );
  };

  useEffect(() => {
    
    fetchListData().then( async (data) => {
      let arrayRes = await data.json();
      setRestaurants(arrayRes);
      console.log(arrayRes)
      return arrayRes
    });
  },[]);

  return (
    <div>

    </div>
  )
};


export default RestaView;
