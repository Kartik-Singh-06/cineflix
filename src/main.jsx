
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UpdateNotification from "./UpdateNotification.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/Store.jsx";


const isMobile = window.innerWidth < 900; // Assuming 768px is the threshold for mobile screens

const rootComponent = isMobile ? <UpdateNotification /> : <App />;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
     {rootComponent}
    </BrowserRouter>
  </Provider>
);
