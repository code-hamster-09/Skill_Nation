import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import store from "./store/store.js";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
