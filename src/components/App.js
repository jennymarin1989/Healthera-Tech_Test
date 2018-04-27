import React, { Component } from 'react';
import Header from './Header';

class App extends Component {

    render(){
        return(
            <div>
               <Header header={"Healthera"}/> 
							 <SubmitButton />
            </div>
        ) 
    }
}
export default App;