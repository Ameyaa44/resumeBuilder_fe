import baseUrl from "./baseUrl";
import commonApi from "./commonApi";
import axios from "axios";

//add resume
export const addResumeApi=async(data)=>{
    return await commonApi("POST",`${baseUrl}/resume`,data)
}

//view history
export const addHistoryApi=async(data)=>{
    return await commonApi("POST",`${baseUrl}/history`,data)
}

//GET history
export const fetchHistoryApi=async()=>{
    return await commonApi("GET",`${baseUrl}/history`,{})
}

//DELETE history
export const deleteHistoryApi=async(id)=>{
    return await commonApi("DELETE",`${baseUrl}/history/${id}`,{})
}

//GET data by id
export const getResumeApi=async(id)=>{
    return await commonApi("GET",`${baseUrl}/resume/${id}`,{})
}

//edit resume
export const editResumeApi=async(id,data)=>{
    return await commonApi("PUT",`${baseUrl}/resume/${id}`,data)
}
