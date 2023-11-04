import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./global/store";
import { Provider } from "react-redux";
import ProductScreen from "./pages/ProductScreen";
import { mainRouter } from "./router/mainRouter";
import { RouterProvider } from "react-router-dom";
import AddComp from "./pages/AddComp";
let persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <RouterProvider router={mainRouter} />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
