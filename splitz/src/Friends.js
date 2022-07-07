import React from 'react';
import { useState } from 'react';
// Importing material UI components
import List from '@mui/material/List';
import {useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import AddIcon from '@mui/icons-material/Add';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import FriendsListItem from './FriendsListItem'
import Button from '@mui/material/Button';
import AddFriendDialog from './AddFriendDialog';
// Importing material UI icons

function Friends(props){
    const [backdropOpen, setBackdropOpen] = React.useState(false);
    const handleClose = () => {
        setBackdropOpen(false);
    };
    const handleToggle = () => {
        setBackdropOpen(!backdropOpen);
    };
    useEffect(() => {
        console.log("Friends List "+props.friends);
      }, [props.friends]);
    return(
        <div className="flex flex-col justify-center flex-wrap">
            <List className="w-full justify-self-center" style={{maxHeight: 260, overflow: 'auto'}}>
                {props.friends.map((friend,index)=>{
                    console.log(index)
                    return(<FriendsListItem name={friend["name"]} amount={friend["amount"]} key={index} itemIndex={index} removeFriend={props.removeFriend}/>)
                })}
            </List>
            <div className="flex flex-row w-full justify-center">
                <Button sx={{border: 3,  borderRadius: 2, color:"#000000"}} startIcon={<AddIcon />} onClick={handleToggle}>Add Friend</Button>
            </div>
            <Backdrop sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdropOpen}>
                    <AddFriendDialog handleToggle={handleToggle} setFriends={props.setFriends} friends={props.friends}/>
            </Backdrop>
        </div>

    );
}

export default Friends;