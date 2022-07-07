import React from 'react';
import {useEffect,useState} from 'react';
import List from '@mui/material/List';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Summary(props){

    const [balance,setBalance]=useState("--");
    const [amount,setAmount]=useState("--");
    const [collected,setCollected]=useState("--");
    const [payments,setPayments]=useState([])

    useEffect(() => {
        if(props.amount=="")
            setAmount(0);
        else
            setAmount(props.amount);
        var arrayLength = props.friends.length;
        var collec=0
        for (var i = 0; i < arrayLength; i++) {
            var friend=props.friends[i]
            collec=collec+parseInt(friend["amount"])
        }
        var bal=parseInt(props.amount)-collec
        setBalance(bal)
        setCollected(collec)
        var perPerson=0;
        if(arrayLength!=0)
            perPerson=parseInt(amount/(arrayLength))
        var notExtra=[]
        var extra=[]
        for (var i = 0; i < arrayLength; i++) {
            var friend=props.friends[i]
            if(parseInt(friend.amount)<perPerson)
                notExtra.push({"name":friend["name"],"amount":perPerson-friend.amount})
            else if(parseInt(friend.amount)>perPerson)
                extra.push({"name":friend["name"],"amount":friend.amount-perPerson})
        }
        var pp=[]
        for (var i = 0; i < notExtra.length; i++) {
            var friend1=notExtra[i]
            for (var j = 0; j < extra.length ;j++) {
                var friend2=extra[j]
                if(friend1.amount<friend2.amount){
                    pp.push({"f1":friend1["name"],"f2":friend2["name"],"amount":friend1.amount})
                    friend1[i]={"name":friend1["name"],"amount":"0"}
                    friend2[j]={"name":friend2["name"],"amount":toString(friend2.amount-friend1.amount)}}
                else{
                    pp.push({"f1":friend1["name"],"f2":friend2["name"],"amount":friend2.amount})
                    friend1[i]={"name":friend1["name"],"amount":toString(friend1.amount-friend2.amount)}
                    friend2[j]={"name":friend2["name"],"amount":"0"}}
            }
        }
        setPayments(pp)

    }, [props.amount,props.friends]);

    return(
        <div className="flex flex-row border-4 rounded-md border-black max-w-[100vh] w-full flex-wrap">
            
            <div className="flex flex-col">
                <p className="font-mono text-2xl font-bold m-3">Summary</p>
                <div className="flex flex-col m-3">
                    <div className="flex flex-row w-fit h-fit align-center" ><p className="font-mono text-md font-bold">To be paid : </p><CurrencyRupeeIcon className="ml-2" fontSize='inherit'/><p className="font-mono text-md  font-bold ">{amount}</p></div>
                    <div className="flex flex-row w-fit h-fit align-center" ><p className="font-mono text-md font-bold">Total Collected : </p><CurrencyRupeeIcon className="ml-2" fontSize='inherit'/><p className="font-mono text-md  font-bold ">{collected}</p></div>
                    <div className="flex flex-row w-fit h-fit align-center" ><p className="font-mono text-md font-bold">Balance : </p><CurrencyRupeeIcon className="ml-2" fontSize='inherit'/><p className="font-mono text-md  font-bold ">{balance}</p></div>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="font-mono text-xl font-bold m-3">Distribution steps</p>
                <div className="flex flex-col ml-3 ">
                    <List className="w-full justify-self-center" style={{maxHeight: 260, overflow: 'auto'}}>
                    {payments.map((pay,index)=>{
                    return(<div className="flex flex-row" ><p className="font-mono text-sm  font-bold "> {(index+1)+".  "+pay["f1"]+"  >  "+pay["f2"]}</p><div className="flex flex-row w-fit" ><CurrencyRupeeIcon className="ml-10" fontSize='inherit'/><p className="font-mono text-sm  font-bold ">{pay["amount"]}</p></div></div>);
                })}
                    </List>
                </div>
            </div>
        </div>
    );
}

export default Summary;