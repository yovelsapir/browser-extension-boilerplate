import ReactDOM from "react-dom/client";
import App from "./App";
import Constants from "../../constants";
import '../styles/style.css';

const mountId = Constants.contentScript.mountId;
const Element = document.createElement("div");
Element.setAttribute("id", mountId);
document.body.appendChild(Element);

const root = ReactDOM.createRoot(document.getElementById(mountId));
root.render(<App />);