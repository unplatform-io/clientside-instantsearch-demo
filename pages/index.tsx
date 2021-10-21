import type { NextPage } from "next";
import "instantsearch.css/themes/satellite.css";
import SearchGrid from "../components/SearchGrid";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Product = {};

export async function getStaticProps({}: GetStaticProps) {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  console.log("run");
  return {
    props: {
      products,
    },
    revalidate: 10, // In seconds
  };
}

function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SearchGrid products={products} />
    </>
  );
}

export default Home;
