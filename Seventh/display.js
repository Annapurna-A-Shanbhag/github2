import React,{Component} from 'react'
import './seven.css'
class Display extends Component
{
    state={
        i:0,
        classes:['colors'],
        x:1,
    }
    
     fun2=(id)=>{
        let x=[...this.state.classes]
       if(id==='divfirst')
       {
       
       this.setState({i:0});
       x[0]='colors';
       x[1]='';
      // alert(this.state.i)
       }
       else
       {
       if(id==='divsecond');
       {
        
       this.setState({i:1});
       x[0]='';
       x[1]='colors';
       //alert(this.state.i);
       }
       }
       this.setState({classes:x})
    }
    fun1=(id)=>{
       let x1=this.state.x;
      if(id=="sign+")
      {
          x1++;
         
      }
      else
      {
          if(x1>1)
            x1--;
            
      }
      this.setState({x:x1});
     
    }
   // document.getElementById('divquantity')=x;
   render()
   {
      
    return(

       
    <div>
      <div id="top" >
                {/*alert(this.state.i)*/}
               <div><img src={this.props.img[this.state.i]} id="divimg" width={this.props.w} /></div> 
                      <div className="top1"><p id="divtitle">{this.props.title[this.state.i]}</p>
                              <p id="divcost2" >{this.props.cost[this.state.i]+"Rs"}</p>
                              <p>Pack sizes</p>
                              <div  id="divfirst"  onClick={this.fun2.bind(this,'divfirst')} 
                              className={this.state.classes[0]}>
                                 <center><p id="div10">{this.props.quantity[0]+"\n"+this.props.cost[0]+"Rs"}</p></center>
                </div>
              <div  id="divsecond" onClick={this.fun2.bind(this,'divsecond')} 
              className={this.state.classes[1]}>
                        <center> <p id="div5" >{this.props.quantity[1]+"\n"+this.props.cost[1]+"Rs"}</p></center>
              </div>
              <p  className="quantity">Quantity</p>
              <div  className="divquantity1">
                 <center>  <span id="sign-" onClick={this.fun1.bind(this,'sign-')}>-</span>
                 <span id="divquantity" >{this.state.x}</span>
                 <span id="sign+" onClick={this.fun1.bind(this,'sign+')} >+</span></center>
              </div><br/>
             <div  class="payable">Payable</div>
               <label id="divcost1" >{((this.state.x)*this.props.cost[this.state.i])+"Rs"}</label>
            </div>
    </div>
    </div>
    );
}
     }
export default Display;