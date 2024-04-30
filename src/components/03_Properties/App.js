import React from "react";
class App extends React.Component{
    render(){
        return(
            <>
            <h1>React Props</h1>
            <StudentMarks student="Aaksah" marks="98" subject ="IT"/>
            <StudentMarks student="Priya" marks="95" subject ="React"/>
            </>
        )
    }
}

class StudentMarks extends React.Component{
    render(){
        return(
            <h3>{this.props.student} got {this.props.marks} Marks in {this.props.subject}</h3>
            
        )
    }
}
export default App;