import React from 'react'
import Cards from './Cards'


function QuickTherapyMain() {
  return (
    <div>
            {/* <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">

                <h1 className=" bg-indigo-500 rounded-lg w-full text-center text-9xl h-3/5 flex items-center justify-center
         mt-[8%] pl-60 py-2 text-white">QuickTherapy</h1>
            </div> */}
            <div className="flex  mb-52 -mt-96 ">
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
  )
}

export default QuickTherapyMain