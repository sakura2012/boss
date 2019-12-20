import React, { Component } from 'react';
import axios from 'axios'
import './all.scss'
import Page from './page'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list_data:''
        }
    }
    componentDidMount(){
        this.getdata()
    }
    getdata(){
        axios.get('/sky/zhaopin/latestPosition/doLatestPosition.json', {
            }).then(response=>{
                console.log(response.data.returnValue)
                this.setState({
                    list_data:response.data.returnValue
                })
        })
    }
    render() { 
        return ( 
            <div className="newPosition">
                <div className="newPosition-content">
                    <div className="newPosition-list">
                    <div className="more-positon">
				        最新职位
				        <a className="clickMorePosition">更多</a>
			        </div>
                        <Page data={this.state.list_data}></Page>
                    </div>
                    <div className="newPosition-img">
                            <a href="" className="first">
                                <img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" alt=""/>
                            </a>
                            <a href="">
                                <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
                            </a>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Index;