import Header from './Header.js'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Friends from './Friends'
import React, { useState } from 'react';
import {useEffect} from 'react';
import AddFriendDialog from './AddFriendDialog';
import Summary from './Summary';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from './Footer';

function Home() {
  
  const [amount,setAmount]=useState("0")
  //const [friends,setFriends]=useState([{"name":"Harsha","amount":"100"},{"name":"Hari","amount":"300"}]);
  const [friends,setFriends]=useState([]);

  const removeFriend=(index)=>{
    console.log("Removed friend "+index);

    var temp=[]
    for (var i = 0; i < friends.length; i++) {
      if(i!=index)
        temp.push(friends[i])
    }
    setFriends(temp)
  }
  return (
    <div className="App">
      <div className="flex flex-row flex-wrap justify-center align-content-center">
            <Header className="w-1/1"></Header>
            <h2 className="w-full max-width-fit m-5 font-mono text-xl font-bold text-center">Enter Amount to be Split</h2>
            <div>
                <FormControl fullWidth sx={{ }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start"><CurrencyRupeeIcon className="text-black"/></InputAdornment>}
                  label="Amount"
                  onChange={(event)=>{setAmount(event.target.value);console.log(event.target.value);}}
                />
                </FormControl>
            </div>
            <h2 className="w-full max-width-fit m-5 font-mono text-xl font-bold text-center">Add friends to calculate split</h2>
            <div className="w-full flex flex-row justify-center pl-10 pr-10 mt-0">
              <Friends friends={friends} setFriends={setFriends} removeFriend={removeFriend}/>
            </div>
            <div className="w-full flex flex-row justify-center m-10">
              <Summary friends={friends} amount={amount}/>
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default Home;
