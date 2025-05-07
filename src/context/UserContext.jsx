import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../songs'

export const datacontext=createContext()

function UserContext({children}) {
    let audioRef=useRef(new Audio())
    let [index,setIndex]=useState(0)
    let [playingsong,setPlayingsong]=useState(false)


    useEffect(()=>{
        audioRef.current.src=songsData[index].song
        audioRef.current.load()
        if(playingsong){
        audioRef.current.play()
        }
    },[index])

    const playsong=()=>{
        setPlayingsong(true)
        audioRef.current.play()
    }

    const pausesong=()=>{
        setPlayingsong(false)
        audioRef.current.pause()
    }

    const nextsong=()=>{
        setIndex((prev)=>(prev+1)%songsData.length)
    }

    const prevsong=()=>{
        setIndex((prev)=>{
            if (prev===0) {
                return songsData.length - 1 
            }else{
                return prev-1
            }
        })
    }

    let value={
        audioRef,playsong,pausesong,playingsong,setPlayingsong,nextsong,index,setIndex,prevsong
    }
   
  return (
    <div>
      <datacontext.Provider value={value}>
        {children}
      </datacontext.Provider>
    </div>
  )
}

export default UserContext
