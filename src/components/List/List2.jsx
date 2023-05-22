import Li from "../Li/Li"
function List2(){

    let ulstyle = {display: "flex", justifyContent: "flex-end"};
    let listyle ={listStyle: "none"};
    let astyle = {textDecoration: "none", color: "white", fontSize: 20, padding: 10};
    let namelist = ["Home", "About", "Service", "Contact"];

    return(
        // <ul style={ulstyle}>
        //     <Li ab={listyle} abc={astyle} name ="Home"/>
        //     <Li ab={listyle} abc={astyle} name ="About"/>
        //     <Li ab={listyle} abc={astyle} name ="Service"/>
        // </ul>

        <ul style={ulstyle}>
            {
                namelist.map((val)=>{
                    return(
                        <Li ab={listyle} abc={astyle} name ={val}/>
                    )
                })
            }
        </ul>
    )

}
export default List2