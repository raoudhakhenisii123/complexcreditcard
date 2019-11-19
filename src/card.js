import React from 'react';
  

const convertName=(cardname)=>{
  if (cardname.length<=20)
  {
    return (cardname.toUpperCase())
  }}
  const validNumber=num=>{
    num=num.toString();
let result=''
for(let i=0; i< 16; i+=4){
 result+=num.slice(i,i+4) + ' '
  }
  return result.trim();
}
const convertirValidthru=(validthru)=>{
  validthru=validthru.toString();

  return validthru.slice(0, 2)+ '/' +validthru.slice(2);
}
const Card = ({name, num, valid}) => {
 return (
 <div className='credit-card'>
          <h1 className='class-nameCompany'>UIB</h1>
           <div className='chip'/>
           <h2 className='class-password' >{validNumber(num)}</h2> 
 <div className='class-text'>
     <div className='classnom'>
<h2>{name.toUpperCase()} </h2>
    </div>
      <div className='ValidThru'>{convertirValidthru(valid)}</div>
      <div className='logo'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0aamqx6_wJ9sRd_O5LaNfi9-Do6-BKvFt1zcg7Jb8SiioJ8E&s'/>
 </div>
 </div>
 </div>
);
}
export default Card;