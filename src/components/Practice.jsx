import React from "react";
import Shine from "../assets/Img/Shine.webp";

function Practice () {
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="w-96 shadow-md">
             <div className="h-60 overflow-hidden">
            <img src={Shine} alt="" />
             </div>
             <div className="p-5">
             <div className="flex justify-between">
                <h3 className="font-bold capitalize">Pavilion</h3>
                <h6> GHC4500</h6>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam incidunt commodi consectetur inventore, beatae recusandae laboriosam facere velit nobis et.
                </p>
             </div>
          </div>
        </div>
    )
}

export default Practice;