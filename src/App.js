import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
/** Local Modules */
import useConfig from "./config";
import useRouter from "routes";
/** Styles */
import "./index.css";
// import { usePromiseTracker } from "react-promise-tracker";
import Loading from "./components/Loading";

const App = () => {
  /** Routes */
  const Router = useRouter();

  /** Config */
  const { useStoreConfig } = useConfig();
  const { store, persistor } = useStoreConfig();

  /** Promise */
  // const {promiseInProgress} = usePromiseTracker();

  return (
    <React.Suspense fallback={ <Loading/>}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {Router}
        </PersistGate>
      </Provider>
    </React.Suspense>
  );
}

export default App;
