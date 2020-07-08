import React, { useState, useEffect }from 'react';
import HeaderLunch from '../../components/HeaderLunch/HeaderLuch.component';
import RestaList from '../../components/RestaList/RestaList.component';


function  RestaView() {

  const [restaurants, setRestaurants] = useState([ ]);

  const API_URL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json";


  const fetchListData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRestaurants(data);
      console.log(data)
      return data
    };


  useEffect(() => {
		fetchListData();
	}, []);

  return (
    <div>

    </div>
  );

}
export default RestaView;
