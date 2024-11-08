import React from 'react'
import { useRef } from 'react'
const App = () => {
    const inputRef = useRef(null);
    const errorRef = useRef(null)
    const changeInputHandler=()=>{
        // console.log(inputRef.current);
        if(inputRef.current.value.length<4){
            console.log("less then 4")
        }
        else {
            console.log("grater then 4")
        }
        // console.log(errorRef.current);
    }
    return (
        <div className='w-[80%] rounded-md p-10 mt-10 bg-zinc-100 mx-auto'>
            <form action="">
                <input ref={inputRef} 
                onChange={changeInputHandler}
                    className=
                    'py-2 px-2 rounded-md outline-none border-blue-300  border-2' type="text" placeholder='username' />
                <p ref={errorRef} className='mt-4 text-red-500 font-medium'>username must required and must have 4 character</p>
            </form>
        </div>
    )
}

export default App