import "./App.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

function App() {
    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        Sidebar / >
        <
        Card className = "card" / >
        <
        /div>
    );
}

export default App;