import React,{Component} from 'react'
import  {Images1,Images2} from './Images'
import {connect} from 'react-redux'
//import {Reducer} from 'redux'
//import  Display from './display'
import Display from './display'
import './seven.css'
import {Route,Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
class Seven extends Component{

  

render()
{
    let y=0;
   let imgid1=["spices","aata","rice"];
   let imgid2=["tata","fortune"];
   
    return(
        <React.Fragment>
     {y=this.props.dummy==3?<div style={{display:'block',
     width:500,
    height:500}
    } id="div1">
           <Display img={this.props.img} title={this.props.title} cost={this.props.cost}  w={this.props.w}
            quantity={this.props.quan}/>
            </div>:null}
        <table className="table">
            <tr>
            
                {
                    Images1.map((item,index)=>{
                       let row=1;
                        if(index==0)
                         row=2;
                        
                        return(<td rowSpan={row} key={index} id={imgid1[index]} 
                            onClick={()=>this.props.id(imgid1[index])}><a href="#div1"><img src={item} width={300}/></a></td>)
                    })
                }
            </tr>
            <tr>
                {
                    Images2.map((item,index)=>{
                       return(<td key={index}  id={imgid2[index]} 
                        onClick={()=>this.props.id(imgid2[index])}><a href="#div1"><img src={item} width={300}/></a></td>)
                    })
                }
            </tr>
        </table>      
         </React.Fragment>
        
    )
}
}
let mapstatetoprops=(state1)=>{
    return(
        {
            img:state1.img,
            title:state1.title,
            cost:state1.cost,
            w:state1.w,
            dummy:state1.dummy,
            quan:state1.quan,

        }
    )
   }
let mapdispatchtoprops=(dispatch,props)=>{
    return{
        id:(id1)=>{dispatch({type:(id1)})}
    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Seven);
