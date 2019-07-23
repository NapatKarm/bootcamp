import React, {Component} from 'react';
import "./Folder.css"

class Folder extends Component{
    constructor(props){
        super(props);
        this.state={
            status: true
        }
    };
    showFolder=()=>{
        this.setState({status: true})
    }
    hideFolder=()=>{
        this.setState({status: false})
    }
    render(){ 
        return (
            <div>
                <p>HOME</p>
                {this.state.status ? (
                <div>
                <button onClick={()=>this.hideFolder()}>Toggle</button>
                <p>     >Folder1</p>
                <p>     >Folder2</p>
                <p>     >Folder3</p>
                </div>
            )
            :
            (
                <div>
                    <button onClick={()=>this.showFolder()}>Toggle</button>
                </div>
            )}

            </div>
            
        );
    }
};

export default Folder