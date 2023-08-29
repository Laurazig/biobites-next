//taken from youtube tutorial 2
//to be implimented / studied

'use client'

import { useEffect } from "react"

const error = ({ error, reset }:any) => {

    useEffect(() => {
        console.log(error);
    }, [error]);
  return (
    <div>
      <h2>something went wrong</h2>
      <button onClick={
        () => reset()
      }
      >
        try again
      </button>
    </div>
  )
};

export default error;
