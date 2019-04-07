// Main App file
import React from 'react';


class CalculatorApp extends React.Component{
    constructor(props){
        super(props);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleSubtraction = this.handleSubtraction.bind(this);
        this.handleMultiply = this.handleMultiply.bind(this);
        this.handleDivision = this.handleDivision.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleNumberSelect = this.handleNumberSelect.bind(this);
        this.starterNumber = this.starterNumber.bind(this);
        this.operators = this.operators.bind(this);
        this.state = {
            currentValue: 0,
            chosenNumber: [],
            equation: [],
            operator: []
        };
    }


    starterNumber () {
        this.setState(() => {
            return {
            currentValue: this.state.chosenNumber,
            chosenNumber: []
            }
        });
    }


    // Operators
    operators() {
    if (this.state.operator[this.state.operator.length - 2] == "+")   {
            this.setState((prevState) => {
                return {
                currentValue: parseInt(prevState.currentValue) + parseInt(this.state.chosenNumber),
                chosenNumber: []
                }
            });
        } else if (this.state.operator[this.state.operator.length - 2] == "-")   {
            this.setState((prevState) => {
                return {
                currentValue: parseInt(prevState.currentValue) - parseInt(this.state.chosenNumber),
                chosenNumber: []
                }
            });
        } else if (this.state.operator[this.state.operator.length - 2] == "*")   {
            this.setState((prevState) => {
                return {
                currentValue: parseInt(prevState.currentValue) * parseInt(this.state.chosenNumber),
                chosenNumber: []
                }
            });
        } else if (this.state.operator[this.state.operator.length - 2] == "/")   {
            this.setState((prevState) => {
                return {
                currentValue: parseInt(prevState.currentValue) / parseInt(this.state.chosenNumber),
                chosenNumber: []
                }
            });
        }  
    };
    handleAddition() {
        this.state.operator.push('+');
        if(this.state.operator.length == 1) {
                this.starterNumber();
                console.log(this.state.operator);
        } else {
               this.operators();
               console.log(this.state.operator);
        }
    };
    handleSubtraction() {
        this.state.operator.push('-');
        if(this.state.operator.length == 1) {
            this.starterNumber();
            console.log(this.state.operator);
        } else {
            this.operators();
            console.log(this.state.operator);
        }
    }
    handleMultiply() {
        this.state.operator.push('*');
        if(this.state.operator.length == 1) {
            this.starterNumber();
            console.log(this.state.operator);
        } else {
            this.operators();
            console.log(this.state.operator);
        }
    }
    handleDivision() {
        this.state.operator.push('/');
        if(this.state.operator.length == 1) {
            this.starterNumber();
            console.log(this.state.operator);
        } else {
            this.operators();
            console.log(this.state.operator);
        }
    }
    handleClear() {
        this.setState(() => {
            return {
                currentValue: 0,
                chosenNumber: [],
                operator: []
            }
        });
    };
    handleEquals(){
        if (this.state.operator[this.state.operator.length - 1] == "+")   {
            this.setState((prevState) => {
                return {
                currentValue: parseInt(prevState.currentValue) + parseInt(this.state.chosenNumber),
                chosenNumber: this.state.currentValue
                }
            });
        } else if (this.state.operator[this.state.operator.length - 1] == "-")   {
            this.setState((prevState) => {
                return {
                currentValue: parseInt(prevState.currentValue) - parseInt(this.state.chosenNumber),
                chosenNumber: this.state.currentValue
                }
            });
        } else if (this.state.operator[this.state.operator.length - 1] == "*")   {
            this.setState((prevState) => {
                return {
                currentValue: parseInt(prevState.currentValue) * parseInt(this.state.chosenNumber),
                chosenNumber: this.state.currentValue
                }
            });
        } else if (this.state.operator[this.state.operator.length - 1] == "/")   {
            this.setState((prevState) => {
                return {
                currentValue: parseInt(prevState.currentValue) / parseInt(this.state.chosenNumber),
                chosenNumber: this.state.currentValue
                }
            });
        } 
    };

    //Number Selection
    handleNumberSelect(e) {
        // e.persist();\
            this.state.chosenNumber.push(e.target.value);
            const value = this.state.chosenNumber.join('');
            console.log(this.state.chosenNumber);
            this.setState(() => {
                return {
                    chosenNumber: [value]
                }
            })
    }

    render(){
        return(
            // <p>{this.state.chosenNumber}</p> 
            // <p>Kannah's Calculator App</p>
                <div id="grid">
                    <p id="mainValue">{this.state.currentValue}</p>
                    <button className="operators" onClick={this.handleSubtraction}>-</button> 
                    <button className="operators" onClick={this.handleAddition}>+</button> 
                    <button className="operators" onClick={this.handleMultiply}>*</button> 
                    <button className="operators" onClick={this.handleDivision}>/</button>    
                    <button className="operators" id="equals" onClick={this.handleEquals}>=</button>     
                    <button className="number" value="1" onClick={this.handleNumberSelect}> 1 </button>
                    <button className="number" value="2" onClick={this.handleNumberSelect}> 2 </button>
                    <button className="number" value="3" onClick={this.handleNumberSelect}> 3 </button>
                    <button className="number" value="4" onClick={this.handleNumberSelect}> 4 </button>
                    <button className="number" value="5" onClick={this.handleNumberSelect}> 5 </button>
                    <button className="number" value="6" onClick={this.handleNumberSelect}> 6 </button>
                    <button className="number" value="7" onClick={this.handleNumberSelect}> 7 </button>
                    <button className="number" value="8" onClick={this.handleNumberSelect}> 8 </button>
                    <button className="number" value="9" onClick={this.handleNumberSelect}> 9 </button>
                    <button className="operators" id="clear" onClick={this.handleClear}>c</button>         
                    <button className="number" value="0" onClick={this.handleNumberSelect}> 0 </button>         
                    <button className="number" value="." onClick={this.handleNumberSelect}> . </button>          
                </div>
        );
    }
}

export default CalculatorApp;
