import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import CakeShop from "./components/CakeShop";
import Hookcakeshop from "./components/Hookcakeshop";
import IcecreamShop from "./components/IcecreamShop";
import NewCake from "./components/NewCake";
import Users from "./components/users";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
        {/* <IcecreamShop />
        <Hookcakeshop />
        <CakeShop />
        <NewCake /> */}
      </div>
    </Provider>
  );
}

export default App;
