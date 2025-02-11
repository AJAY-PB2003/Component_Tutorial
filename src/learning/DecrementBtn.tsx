import React, { useContext } from 'react';
import {Button} from 'react-native';
import  {DataContext}  from './Temp';


function DecrementBtn({decrementFn}){

    const titleBtn= useContext(DataContext);
    // console.log(titleBtn);
    return(
        <Button title={`${titleBtn.data}`} onPress={decrementFn}/>
);
}
export default DecrementBtn;