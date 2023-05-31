import React from "react";
class ClassCom extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            name : ["Binal", "Princy", "Jeel"]

        }
            
    }

    time = () =>{
        setTimeout(() => {
            this.setState({
                count : this.state.count + 1
            })
        }, 3000);
    }

    componentWillMount(){
        console.log("hello will mount");
    }

    componentDidMount(){
        this.time();
        console.log("hello did mount");
    }

    componentDidUpdate(){
        console.log("component update");
    }

    componentWillUnmount(){
        console.log("un mount");
    }

    render(){
        console.log("I'm render");
        return(
            <div style={{textAlign : "center"}}>
                <p>{this.state.count}</p>
                {
                    this.state.name.map((name)=>{
                        return(
                            <h3>
                                {name}
                            </h3>
                        )
                    })
                }
            </div>
            
        )
    }
}
export default ClassCom;