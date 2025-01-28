import React from 'react'
import {Image, Text,View} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import UserDetails from '../components/UserDetails';
import {DATA} from '../const/data'

function UserDetailsScreen({route}){
    const targetId=route.params;
    // console.log(targetId);
    const filteredData= DATA.filter((item)=> item.id===targetId.id)
    // console.log(filteredData);
    const user=filteredData[0];
    // console.log(user)





    return(
        
        
        <UserDetails imgUrl={user.imgUrl} name={user.title} address={user.address} aboutUs={user.aboutUs}/>
    )

}

export default UserDetailsScreen