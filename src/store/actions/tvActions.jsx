export {removeDetail} from '../reducers/tvSlice';
// import { all } from 'axios';
import axios from "../../utils/axios";
import {loadDetail} from "../reducers/tvSlice";


export const  asyncLoadtv =  (id) => async (dispatch,getState)=>{
try{
   const detail = await axios.get(`/tv/${id}`);
   const externalid = await axios.get(`/tv/${id}/external_ids`);
   const recommendations = await axios.get(`/tv/${id}/recommendations`);
   const similar = await axios.get(`/tv/${id}/similar`);
   const videos = await axios.get(`/tv/${id}/videos`);
   const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

   let theultimatedetails = {
      detail : detail.data,
      externalid : externalid.data,
      recommendations : recommendations.data.results,
      similar : similar.data.results,
      videos : videos.data.results.find(tv => tv.type === 'Trailer' ),
      watchproviders : watchproviders.data.results.IN,
   }
   dispatch(loadDetail(theultimatedetails))
   console.log(theultimatedetails);
}
catch(err){
  console.error("Error : ",err);
}
}