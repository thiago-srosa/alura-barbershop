import "styles/reset.css";
import "styles/styles.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default MyApp;
