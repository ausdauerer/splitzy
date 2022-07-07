import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useRef,useState} from 'react';

function AddFriendDialog(props){

    const [name,setName]=useState("Unknown")
    const [amount,setAmount]=useState("0")
    const handleOnClick=()=>{

        props.setFriends([...props.friends, {"name":name,"amount":amount}]);
        props.handleToggle()
    }

    return(
        <div className="flex flex-col bg-white p-5 flex-wrap rounded-md">
            <div className="w-full flex flex-col flex-wrap text-black align-center">
                <div className="flex flex-row align-center justify-center">
                    <p className="font-mono text-md font-bold text-center m-2">Enter Friends name</p>
                </div>
                <TextField onChange={(event) => {setName(event.target.value)}} className="m-0" label="Name" />
            </div>
            <div className="w-full flex flex-col">
                <p className="font-mono text-md font-bold text-center m-2">Enter Amount</p>
                <TextField onChange={(event) => {setAmount(event.target.value)}} className="justify-self-end" label="Amount" />
            </div>
            <Button sx={{border: 3,  borderRadius: 2, color:"#000000", margin:2}} onClick={handleOnClick}>Add Friend</Button>
            <Button sx={{color:"#000000"}} onClick={props.handleToggle}>Cancel</Button>
        </div>
    );
}

export default AddFriendDialog;