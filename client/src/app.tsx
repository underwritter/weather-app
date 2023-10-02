import {AppRouter} from "./components/app-router/app-router";
import { ToastContainer } from "react-toastify";
import {Provider} from "react-redux";
import {store} from "./store/store";
import React from "react";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>
    </Provider>
  );
}
export default App;
