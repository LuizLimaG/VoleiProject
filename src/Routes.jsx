import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Detalhes from "./Pages/Detalhes/Detalhes"
import Jogadoras from "./Pages/Jogadoras/Jogadoras"

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/detalhes/:paisId" element={ <Detalhes /> } />
                <Route path="/jogadoras/:paisId" element={ <Jogadoras /> } />
            </Routes>
        </Router>
    )
}