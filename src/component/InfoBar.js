import React from 'react';

const InfoBar = ({totalTasks}) => {
    
         if(totalTasks===0){
            return   <p className = "alert alert-info text-center">tidak ada tasks yang perlu dikerjakan</p>
         }else{
            return   <p className = "alert alert-info text-center">kamu memiliki <b>{totalTasks}</b> tasks </p>
        }
    }
    export default InfoBar;