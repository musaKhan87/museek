import React, { useEffect, useState } from 'react'
import Player from '../components/Player'
import { IoSearch } from 'react-icons/io5'
import Card from '../components/Card'
import { songsData } from "../songs";

function Search() {
  let[input,setInput]=useState("")
  let[newList,setNewList]=useState([])

  useEffect(()=>{
    let filterData=songsData.filter((song)=>song.name.toLowerCase().includes(input) || song.singer.toLowerCase().includes(input) ||  song.singer.includes(input) || song.name.includes(input) || song.name.toUpperCase().includes(input) || song.singer.toUpperCase().includes(input)  )
    setNewList(filterData)
  },[input])


  return (
    <div className='w-full h-screen bg-black flex justify-start items-center flex-col pt-[20px] md:pt-[100px] gap-[30px] '>
      <Player/>
      <form className='w-[90%] h-[60px] md:max-w-[60%] p-[15px] md:p-0 bg-gray-800 flex justify-center items-center gap-5 rounded-lg overflow-hidden' 
      onSubmit={(e)=>e.preventDefault()}>
      <IoSearch className='text-[18px] text-gray-200 '/>
      <input type="text" className='w-[90%] h-[100%]  bg-gray-800  outline-none border-0 text-white p-[10px] text-[18px] ' 
      placeholder='Search songs... ' 
      onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
     
    {
      input?
      <div className='w-[100%] h-[65%] md:h-[100%] flex flex-col justify-start p-[10px] items-center gap-5 overflow-auto '>
      {newList.map((song) => (
                    <Card
                      key={song.id}
                      name={song.name}
                      image={song.image}
                      singer={song.singer}
                      songIndex={song.id - 1}
                    />
                  ))}
      </div>
      :
      <div className='text-gray-700 text-[30px] font-semibold '>Search Songs</div>
    }
    </div>

    
  )
}

export default Search
