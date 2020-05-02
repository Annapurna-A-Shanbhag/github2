import {Images1,Images2,aata,fortunetata}  from './Images'
let initial={
    img:[],
        title:[],
        cost:[],
        width:null,
        dummy:null
}
let Reducer=(state=initial,action)=>{
  switch(action.type)
  {
      
    case('spices'):
    return{
    img:[Images1[0],Images1[0]],
    title:["Royal spices, 1Kg Pouch","Royal spices, 0.5Kg Pouch"],
    cost:[350,175],
    w:520,
    dummy:3,
    quan:["1kg","0.5kg"],
     }
case('aata'): 
  return{
  img:[aata[0],aata[1]],
  title:["ashirvaad atta, 10Kg Pouch","ashirvaad atta, 5Kg Pouch"],
  cost:[399,205],
  w:400,
  dummy:3,
  quan:["10kg","5kg"],
  }
case('rice'):
  return{
   img:[Images1[2],Images1[2]],
   title:["Royal rice, 1Kg Pouch","Royal rice, 0.5Kg Pouch"],
   cost:[100,50],
   w:400,
   dummy:3,
   quan:["1kg","0.5kg"],
  }
case('tata'):
    return{
   img:[fortunetata[0],Images2[0]],
   title:["Tatat toordaal, 1Kg Pouch","Tatat toordaal, 0.5Kg Pouch"],
   cost:[225,65],
   w:400,
   dummy:3,
   quan:["1kg","0.5kg"],
    }
case('fortune'):
return{
img:[fortunetata[1],Images2[1]],
title:["Fortune cooking oil 1 ltr Pouch","Fortune cooking oil 0.5ltr Pouch"],
cost:[100,50],
w:400,
dummy:3,
quan:["1ltr","0.5ltr"],
}
default:
    return{
        ...state,
        dummy:0
    }
  }


}
export default Reducer;
