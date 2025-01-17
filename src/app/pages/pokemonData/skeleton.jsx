"use client"
import useCaptureImageStore from "@/app/store/captureImageStore"
import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export default function A() {
   

    return (
        <div>
            <div className="flex h-52 gap-2 m-2">

                <div className="w-[30%] bg-gray-200 border grid grid-cols-1 ">
                    <div className='border bg-red-500 m-2'>
                        
                    </div>

                    <div className='border bg-blue-500 m-2'>

                    </div>
                </div>
                
                <div className="w-[70%] bg-green-500 border">
                
                </div>
            </div>

           
          
          

            <div className='grid grid-cols-2 border h-52'>
                <div className='border bg-red-500 m-1'>

                </div>

                <div className='border bg-blue-500 m-1'>

                </div>
            </div>

        

            <div className='container  border h-32 bg-green-500 w-96 m-auto '>

            </div>

            <div className='container  border h-52 bg-blue-500 w-96 m-auto '>

            </div>


            <div className='container  border h-14 bg-gray-500 w-96 m-auto mb-3'>

            </div>

        </div>
    )
}
