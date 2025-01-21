import React, { useState } from 'react';
import {View,FlatList, TextInput,Alert} from 'react-native';
import UserCard from './UserCard';

function ListContainer(){
    
      
      
      const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          address:'Gurgaon',
          socialMedia: 'Instagram',
          socialCount:'250K',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          address:'Bikaner',
          socialMedia: 'Facebook',
          socialCount:'1M',

        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          address:'New Delhi',
          socialMedia: 'Twitter',
          socialCount:'500',

        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d73',
          title: 'Fourth Item',
          address:'Jaipur',
          socialMedia: 'Youtube',
          socialCount:'100M',

        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d74',
          title: 'Fifth Item',
          address:'Chandigarh',
          socialMedia: 'Snapchat',
          socialCount:'500K',

        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d75',
          title: 'Sixth Item',
          address:'Chennai',
          socialMedia: 'Linked In',
          socialCount:'5000',

        },
      ];
      
      type ItemProps = {title: string,
        address:string,
        socialMedia: string,
        socialCount:string,
      };
      
      const Item = ({title, address, socialMedia, socialCount}: ItemProps) => (
        <UserCard title={title} address={address} socialMedia={socialMedia} socialCount={socialCount}/>
      );

    

    return(
       <View>
        
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} address={item.address} socialMedia={item.socialMedia} socialCount={item.socialCount}/>}
        keyExtractor={item => item.id}
        
      />
       </View>
       
       
       
       
        
         

    

    )
}

export default ListContainer