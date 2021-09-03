import { Provider } from "react-redux";
<<<<<<< HEAD
import { PersistGate } from "redux-persist/lib/integration/react";

import { persistor, store } from "../redux/store";
import "../styles/antd.less";
import "../styles/styles.scss";
import Loading from "../components/other/Loading";
import withReduxStore from "../common/withReduxStore";
=======

import "../styles/antd.less";
import "../styles/styles.scss";
// import Loading from "../components/other/Loading";
import withReduxStore from "../common/withReduxStore";
import FetchInitData from "../components/other/FetchInitData";
>>>>>>> dev01

const App = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
<<<<<<< HEAD
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
=======
      <FetchInitData>
        <Component {...pageProps} />
      </FetchInitData>
>>>>>>> dev01
    </Provider>
  );
};

export default withReduxStore(App);
