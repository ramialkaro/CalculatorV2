import React, {Component} from 'react';

export default class KeyPad extends Component {
    constructor(props){
        super(props);
        
    this.state={
        valueVV:'',
        valueVV2:'',
    }
    
/*     this.updateVV = this.updateVV.bind(this);
    this.updateVV2 = this.updateVV2.bind(this); */
    this.submitVV = this.submitVV.bind(this);

    }
    
/* 
    updateVV (e){
        this.setState({valueVV:(this.state.valueVV + e.target.value)})
     
    }
    
    updateVV2 (e){
        this.setState({valueVV2:(this.state.valueVV2 + e.target.value)})
     
    } */

submitVV (e){
    console.log(Number(this.state.valueVV) + Number(this.state.valueVV2));
    this.setState({valueVV:'', valueVV2:''})
}

    render(){
        return(
            <div>
                <button name="1" onClick={e => console.log(e.target.name) }>1</button>
                <button name="2" onClick={e => console.log(e.target.name) }>2</button>
                <button name="+" onClick={e => console.log(e.target.name) }>+</button>
                <input type="button" value="=" onClick={this.submitVV}/>
                
            </div>
        );
    }
}