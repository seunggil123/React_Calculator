import React, { Component } from 'react';
import Keypad from './Keypad';
import PageTemplate from './PageTemplate';

class App extends Component {
    state = {
        input: '',
        //input 값(식)
        result:''
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input:value
        });
    }

    handleButtonClick = (button) => {
        const {input} = this.state;
        if(button === "C"){
            this.setState({
                input : input.substring(0,input.length-1)
            })
        }
        else{
            this.setState({
                input: input + button
            });
        }
    }
    

    handleResultClick = () => {
        const {input, result} = this.state;
        this.setState({
            result:eval(input),
            input : ''
        });
        console.log(result);

    }    

    render() {
        const {handleChange,handleResultClick,handleButtonClick} = this;
        const {input,result} = this.state;
        return (
            <PageTemplate>
                <Keypad onChange={handleChange} value={input}
                 handleResultClick={handleResultClick} 
                 handleButtonClick={handleButtonClick}
                 result={result}/>
            </PageTemplate>
        );
    }
}

export default App;