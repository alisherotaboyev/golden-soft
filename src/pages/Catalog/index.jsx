import axios from "axios";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import Contact from "../../components/Contact";
import { Container } from "../../components/Container/style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PopularProducts from "../../components/PopularProducts";
import ProductCard from "../../components/ProductCard";
import * as Style from "./style";

const Catalog = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}`);

    if ((res.status = 200)) {
      setData(res.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Style.CatalogWrapper>
      <Header />
      <Container>
        <BreadCrumbs disableText={"Каталог"} />
        <Style.CatalogCardsWrapper>
          {data?.map((el) => (
            <ProductCard
              id={el.id}
              inCash={el.inCash}
              img={el.img}
              title={el.title}
              newPrice={el.newPrice}
              oldPrice={el.oldPrice}
            />
          ))}
        </Style.CatalogCardsWrapper>
      </Container>
      <PopularProducts />
      <Contact />
      <Footer />
    </Style.CatalogWrapper>
  );
};

export default Catalog;
