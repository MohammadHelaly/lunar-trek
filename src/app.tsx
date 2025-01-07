import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "@/lib/store";
import router from "@/lib/router";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
