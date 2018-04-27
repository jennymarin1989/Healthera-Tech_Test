import React, { Component } from 'react';
import Header from './Header';
import SubmitButton from './SubmitButton';

class App extends Component {

    render(){
        return(
            <div>
               <Header header={"Healthera"}/> 
							 <SubmitButton 
								 name={"Patient Portal"}
								 handleDataSubmitted = {this.handleClick}
							 />
            </div>
        ) 
    }
}
export default App;