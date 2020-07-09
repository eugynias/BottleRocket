import React, { useState, useEffect }from 'react';
import HeaderLunch from '../../components/HeaderLunch/HeaderLuch.component';
import RestaList from '../../components/RestaList/RestaList.component';


function  RestaView() {

  const [restaurants, setRestaurants] = useState([]);

  const API_URL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json";


  const fetchListData = async () => {
      fetch(API_URL).then(
        function (response){
          return response.json();
        }
      ).then(
        function(data){
          console.log(data.restaurants)
          setRestaurants(data.restaurants)
        }
      )
    };


  useEffect(() => {
		fetchListData();
	}, []);

  return (
    <div>
        <RestaList restaurants={restaurants} />
    </div>
  );

}
export default RestaView;
