import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Detalhes from "./Pages/Detalhes/Detalhes";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/detalhes/:paisId" element={ <Detalhes /> } />
            </Routes>
        </Router>
    )
}