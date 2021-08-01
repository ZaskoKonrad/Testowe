import React from "react";
import json from './dane.json';

     
class Dane extends React.Component{        
   render(){
        var licz=0;
        var size=0
                
        {json.map((row)=>{size++})}    
        size = 100/size+'%'
             return(
                <div style={{gridTemplateColumns:`repeat(auto-fit,${size})`}} className="os">
                     {json.map((row)=>{
                        var randomColor = Math.floor(Math.random()*16777215).toString(16);
                        var rok = row.data.substring(4,0)
                        licz++
                       
                         if((licz % 2)!==0){
                            return  <div style={{background:`#${randomColor}`}} className="cg"key={row.id}>
                                        <div style={{color:`#${randomColor}`}} className="data">{rok}</div>
                                        <i style={{background:`#${randomColor}`, color:`${randomColor}`}}className={row.ikona}></i>
                                    </div>
                         }
                         else{
                            return  <div style={{background:`#${randomColor}`}} className="cd" key={row.id}>
                                        <div style={{color:`#${randomColor}`}} className="data">{rok}</div>
                                        <i style={{background:`#${randomColor}`, color:`${randomColor}`}} className={row.ikona}></i>
                                    </div>
                         }
                       
                         
                        
                     })}    
                      
                </div>
                    )
                 }
}
export default Dane;
  