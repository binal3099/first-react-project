import Navlist2 from "../../components/Navlist/Navlist2";
import ClassCom from "../../components/ClassCom";

function Header2(){

    let header ={marginTop: 20}

    return(
        <header style={header}>
            <div className="container">
                <div className="row">
                    <Navlist2 />
                </div>
            </div>
            {/* <ClassCom /> */}
        </header>
    )
}
export default Header2