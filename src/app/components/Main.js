"use client"
import Spinner from './Spinner';
import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "../styles/main.module.css";

export default function Main() {

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products/", {
        cache: "no-cache",
      });

      const data = await response.json();

      setListProduct(data);
    }
    getProduct();
  }, []);

  const orderAz = () => {
    const listAux = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));

    setListProduct(listAux);
  }

  const orderZa = () => {
    let listAux = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));
    listAux = listAux.reverse();

    setListProduct(listAux);
  }

  const orderLowHigh = () => {
    const listAux = [...listProduct].sort((a, b) => a.price - b.price);
    setListProduct(listAux);
  }

  const orderHighLow = () => {
    let listAux = [...listProduct].sort((a, b) => a.price - b.price);
    listAux = listAux.reverse();

    setListProduct(listAux);
  }

  if (listProduct[0] == null){
    return <Spinner/>
  }

  return (
    <>
      <div className={styles.filters}>
        <div>
          <button onClick={orderAz}>A-z</button>
          <button onClick={orderZa}>z-A</button>
          <button onClick={orderLowHigh}>low-high </button>
          <button onClick={orderHighLow}>high-low</button>
        </div>
      </div>

      <main className={styles.main}>
        {listProduct.map((products) => (
          <div className={styles.card} key={products.id}>
            <p>{products.title.slice(0, 6)}...</p>

            <Image width={300} height={300} src={products.image} />

            <p>{products.category}</p>

            <p className={styles.description}>
              {products.description.slice(0, 250)}...
            </p>

            <p>US${products.price}</p>

            <p>{products.rating.count}</p>
          </div>
        ))}
      </main>
    </>
  );
}
