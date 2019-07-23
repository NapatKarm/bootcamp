import React, {Component} from 'react';
import "./Form.css"

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            first: props.first,
            last: props.last,
            subfirst: "",
            sublast: "",
            status: false
        }
    };
    showForm=()=>{
        this.setState({status: true})
    }
    changeName=()=>{
        this.setState({first: this.state.subfirst, last: this.state.sublast})
        this.setState({status: false})
    }
    cancel=()=>{
        this.setState({status: false})
    }
    firstnameChange=(event)=>{
        this.setState({subfirst: event.target.value});
    }
    lastnameChange=(event)=>{
        this.setState({sublast: event.target.value});
    }
    submission=(event)=>{
        alert('Testing these outputnames: '+this.state.first+' '+this.state.last)
        event.preventDefault();
    }
    render(){ 
        return (
            <div>
                <p>First Name: {this.state.first} </p>
                <p>Last Name: {this.state.last}</p>
                <br></br>
                {this.state.status ? (
                <div>
                <form onSubmit={()=>this.submission} className = "form">
                    <label>
                        Firstname:
                        <input type="text" name="firstname" value={this.state.subfirst} onChange={this.firstnameChange}/>
                    </label>
                    <br></br>
                    <label>
                        Lastname:
                        <input type="text" name="lastname" value={this.state.sublast} onChange={this.lastnameChange} />
                    </label>
                    <br></br>
                </form>
                <button onClick={()=>this.changeName()}>Save</button>
                <button onClick={()=>this.cancel()}>Cancel</button>
                </div>
            )
            :
            (
                <div>
                    <button onClick={()=>this.showForm()}>Edit</button>
                </div>
            )}

            </div>
            
        );
    }
};

export default Form