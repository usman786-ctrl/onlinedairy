import React from 'react';
import {AccessAlarmRounded,LanguageRounded,HttpsRounded,InsertEmoticonRounded} from '@material-ui/icons';
const Features = () => {
    const data=[
        {heading:'24/7 available', para:'our servies are available 24/7 clock you can use our services at time'},
        {heading:'global services', para:'we provide our services whole out the world'},
        {heading:'secure data', para:'your every comment is end to end save and secure'},
        {heading:'easy to use', para:'it is very easy to use for any one either he is expart or not'}

    ]
    return (
        <div>

            <h1 className='heading-primary  secondry'><span>why peoples join us</span></h1>
       

        <div className='features'>
            {
                data.map((data,index)=>{
                  return  <div key={index} className='feature'>
                   {index===0 ?  <div className='feature__icon'>{<AccessAlarmRounded/>}</div>:null}
                   {index ===1?   <div className='feature__icon'>{<LanguageRounded/>}</div>:null}
                   {index===2 ?   <div className='feature__icon'>{<HttpsRounded/>}</div>:null}
                   { index===3 ?  <div className='feature__icon'>{<InsertEmoticonRounded/>}</div>:null}

                <div className='feature__heading'><h3>{data.heading}</h3></div>
                    <div className='feature__detail'><p>{data.para}</p></div>
                    </div>
                 

                })
            }
         
         

            
        </div>
        </div>
    );
}

export default Features;
