import React from "react";
import BannerSale from "../../components/MainPageComponents/BannerSale";
import BannerNewSeason from "../../components/MainPageComponents/BannerNewSeason";
import ContainerCatalog from "../../components/MainPageComponents/ContainerCategories";
import DiscountSale from "../../components/MainPageComponents/DiscountSale";




export default function MainPage() {
  return (
    <main>
      <BannerNewSeason />
      <ContainerCatalog />
      <BannerSale />
      <DiscountSale />
    </main>
  );
}
