import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
/** Local Modules */
import useModels from "models";

const useStoreConfig = () => {
  /** Models */
  const { useReducers } = useModels();

  /** Variables */
  const reducers = useReducers(),
    persistConfig = {
      key: "root",
      storage,
    },
    persistReduce = persistReducer(persistConfig, reducers);

  const store = configureStore({
    reducer: persistReduce,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default useStoreConfig;
