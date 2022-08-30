import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alura Barbershop</title>
      </Head>
      <h1>About Alura Barbershop</h1>
      <p>
        Located in the heart of the city, <strong>Barbearia Alura</strong>{" "}
        brings to the market the best for your hair and beard.Founded in 2019,
        Barbearia Alura is already a highlight in the city and conquers new
        customers every day.
      </p>

      <p className="h6">
        <em>
          Our mission is:{" "}
          <strong>
            &quot; To provide self-esteem and quality of life to customers&quot;
          </strong>
          .
        </em>
      </p>

      <p>
        We offer experienced professionals who are attuned to changes in the
        fashion world.The service has a standard of excellence and agility,
        ensuring quality and satisfaction of our customers.
      </p>
    </>
  );
};

export default Home;
