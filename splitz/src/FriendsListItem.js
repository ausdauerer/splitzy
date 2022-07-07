import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function FriendsListItem(props){
    const removeF=()=>{
        console.log(props.itemIndex)
        console.log("Friend removed");
        props.removeFriend(props.itemIndex);
    }
    return(
        <ListItem className="justify-self-center " sx={{border: 3,  borderRadius: 2, margin:1, width:"80vw", maxWidth:360}} secondaryAction={<div className="flex flex-row w-fit align-middle justify-center"><div className="flex flex-col justify-center"><CurrencyRupeeIcon fontSize='inherit' /></div><div className='flex flex-col justify-center mr-2'><p className="text-center align-self-middle justify-self-center w-fit h-fit">{props.amount}</p></div><IconButton className="p-1" onClick={removeF}><DeleteIcon className="text-black" /></IconButton></div>}>
                <ListItemText primary={props.name}  />
        </ListItem>
    );
}

export default FriendsListItem;