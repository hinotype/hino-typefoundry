import { Fragment } from "react";
import { AppProps } from "next/app";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Component {...pageProps} />

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: "Helvetica Neue", sans-serif;
        }
      `}</style>
    </Fragment>
  );
};
