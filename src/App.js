import { Provider } from "react-redux";
import Home from "./pages/Home";
import store from "./redux/store";
import Users from "./pages/Users";
import FormA from "./components/form/FormA";

function App() {
  return (
    <Provider store={store}>
      <Home />
      {/* <Users /> */}
      {/* <FormA /> */}
    </Provider>
  );
}

export default App;
