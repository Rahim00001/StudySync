import { Outlet } from "react-router-dom";
import Footers from "../Pages/Shared/Footer/Footers";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;