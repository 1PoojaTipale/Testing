import {Component} from "react";
class ByClass extends Component{
    state=
    {
    my_info:"Pooja",
    my_mobile:"6666666666"
    }
    myFunction = () =>
     {
    this.setState(
        {
            my_info:"Darshan"
            // my_info:"harshada"
        }
    )
    }
    render()
    {
    return(
        <div>
       <h1> My Name is {this.state.my_info} </h1>
       <h1> My Mobile is {this.state.my_mobile} </h1>
       <button onClick={this.myFunction}> Click </button>
       </div>
    );

        
    }
}
export default ByClass;