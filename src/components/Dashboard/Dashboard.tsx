import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Dashboard.styles.css";
import SideBar from "../SideBar/SideBar";

const Dashboard = () => {

    return (
        <>  
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar />
                </div>
            </div>
        </>
    );
};

export default Dashboard;