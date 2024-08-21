import Head from "next/head";

const BaseLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Nelfund Form " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container md:w-[1200px]  md:mt-20 mx-auto">
        {children}
      </main>
    </>
  );
};

export default BaseLayout;
