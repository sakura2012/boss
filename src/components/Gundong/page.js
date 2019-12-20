import React, { Component } from 'react';
import './page.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { time:'' ,value:''}
    }
    componentDidMount(){
        this.gun()
    }
    static getDerivedStateFromProps(props, state){
        return {
            data:props.data
        }
    }
    gun(){
        this.setState({
            time:setInterval(this.gun1,40)
        })
    }
    gun1(){
        var demo=document.getElementById("demo");
        var demo2=document.getElementById("demo2");
        var demo1=document.getElementById("demo1");
        demo2.innerHTML=demo1.innerHTML
        if(demo.scrollTop>=demo1.offsetHeight){
                demo.scrollTop=0;
        }
        else{
            demo.scrollTop=demo.scrollTop+1;
        }
    }
    gun2(){
        clearInterval(this.state.time)
        this.setState({
            time:null
        })
    }
    render() { 
        return ( 
            <div className="page-mean">
                <div ref='demo' className="demo" onMouseOut={this.gun.bind(this)} id="demo" onMouseOver={this.gun2.bind(this)}>
                <ul ref='demo1' id="demo1">
                    {this.state.data?this.state.data.map(item=>{
                        return (
                            <li className="scroll-3" key={item.code}>
						        <a  className="position" >{item.departmentName}</a>
                            <em className="time">{item.applyTimeDesc}</em>
                            <em className="city" title="杭州">{item.workLocation}</em>
                            </li>
                            )
                        }):'加载数据中'}
                </ul>
                <ul ref='demo2' id="demo2">

                </ul>
            </div>
            </div>
            
         );
    }
}

export default Index;