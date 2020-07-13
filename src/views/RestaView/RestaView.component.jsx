import React, { useState, useEffect } from 'react';
import HeaderLunch from '../../components/HeaderLunch/HeaderLuch.component';
import RestaList from '../../components/RestaList/RestaList.component';
// import {getRestaurants} from '../../controller/fetchInfo';

import * as Style from './RestaView.style';
import { useParams } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';


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

//   const {name}=useParams();
//   const [restaurants, setRestaurants] = useState([]);

//   const getRestaurants = () => {
//     return new Promise ((resolve,reject)=> {
//         fetch(API_URL).then(
//             (response=>response.json())
//         ).then(result =>{

//             const dataArray =result.map(element =>{
//                 const restaurants ={
//                     'name': element.name,
//                     'location':element.location,
//                 };
//                 console.log(restaurants)
//                 return restaurants
//             });
//             resolve (dataArray)
//         })
//         .catch(error=>{
//             console.log('error',error);
//             reject(error);
//         });
//     });
// }

//   const getRestaurantsData = async () => {
//     const data = await getRestaurants();
//     const filteredData =data.filter(restaurant => restaurant.name == name);
//     console.log(filteredData)
//     setRestaurants(filteredData);
//   };

//   useEffect(() => {
// 		getRestaurantsData();
// 	}, []);



  return (
    <div>
        <HeaderLunch />
        <Style.RestImage>
            <RestaList restaurants={restaurants} />
        </Style.RestImage>
    </div>
  );

}
export default RestaView;
