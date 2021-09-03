import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="title"
<<<<<<< HEAD
            content="Stora - React Ecommerce Template with NextJs, AntDesign, ReactHooks"
          />
          <meta
            name="description"
            content="Stora - React Ecommerce Template with NextJs, AntDesign, ReactHooks"
=======
            content="Ogami - Multipurpose Organic Store & Bakery React Templates"
          />
          <meta
            name="description"
            content="Ogami - Multipurpose Organic Store & Bakery React Templates"
>>>>>>> dev01
          />
          <link rel="icon" href="/fav.png" />
          <link
            href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css"
            rel="stylesheet"
          />
          <link
<<<<<<< HEAD
=======
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link
>>>>>>> dev01
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link href="/assets/css/elegant-icon.css" rel="stylesheet" />
<<<<<<< HEAD
          <link href="/assets/css/icomoon-icon.css" rel="stylesheet" />
=======
          <link href="/assets/css/slick.min.css" rel="stylesheet" />
>>>>>>> dev01
        </Head>
        <body>
          <Main />
          <div id="subpages-sidebar" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
