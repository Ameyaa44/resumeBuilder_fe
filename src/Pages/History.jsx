import React from 'react'
import {useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import { IoMdArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { fetchHistoryApi,deleteHistoryApi} from '../services/allApis';



function History() {
  const [historyData,setHistoryData]=useState([])
  const [deleteStatus,setDeleteStatus]=useState([])


  useEffect(() => {
    getData()
  },[deleteStatus])

  const getData = async() => {
    try{
      const res = await fetchHistoryApi()
      console.log(res)
      setHistoryData(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  const handleDeleteData=async(id)=>{
    try{
      const res=await deleteHistoryApi(id)
      console.log(res)
      setDeleteStatus(res.id)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <div className='container-fluid p-2'>

      <div className='container-fluid my-3 d-flex justify-content-between '>
        <h2>Resume Downloaded History</h2>
        {/* Back to Instructions */}
        <Link className='btn' to={'/instructions'}><IoMdArrowBack style={{fontSize:'28px'}} />Back</Link>
      </div>

      <div className='row container-fluid'>
        <div className='col-md-4 d-flex justify-content-evenly gap-3'>
        {
          historyData.length > 0 ?
          <>
          {
            historyData.map(item => (
              <Box component="section" className='mt-5 border shadow' sx={{ p: 3}}>
                <div className='d-flex justify-content-evenly'>
                  <h6 className='text-center'>
                  Review at: <br/>
                  {item?.timestamp}
                  </h6>
                  <button className='btn'>
                    <MdDelete className='text-danger' onClick={()=>{handleDeleteData(item.id)}} style={{fontSize:'30px'}} />
                  </button>
                </div>
                <div className='w-100'>
                  <img src={item?.imgUrl} width={'100%'} height={'80rem'} alt="" />
                </div>
              </Box>

            ))
          }
          </>
          :
          <h2 className='text-center text-danger my-4'>No History!</h2>
        }

        </div>
      </div>
    </div>
    </>
  )
}

export default History