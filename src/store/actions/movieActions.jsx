export {removeDetail} from '../reducers/movieSlice';
// import { all } from 'axios';
import axios from "../../utils/axios";
import {loadDetail} from "../reducers/movieSlice";


export const  asyncLoadmovie =  (id) => async (dispatch,getState)=>{
try{
   const detail = await axios.get(`/movie/${id}`);
   const externalid = await axios.get(`/movie/${id}/external_ids`);
   const recommendations = await axios.get(`/movie/${id}/recommendations`);
   const similar = await axios.get(`/movie/${id}/similar`);
   const videos = await axios.get(`/movie/${id}/videos`);
   const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

   let theultimatedetails = {
      detail : detail.data,
      externalid : externalid.data,
      recommendations : recommendations.data.results,
      similar : similar.data.results,
      videos : videos.data.results.find(movie => movie.type === 'Trailer' ),
      watchproviders : watchproviders.data.results.IN,
   }
   dispatch(loadDetail(theultimatedetails))
   console.log(theultimatedetails);
}
catch(err){
  console.error("Error : ",err);
}
}