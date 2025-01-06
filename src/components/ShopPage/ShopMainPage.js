import React, { useState, useEffect } from "react";
import productSRC from "../../assets/product-image.jpg";
import CategoryDisplay from "./CategoryDisplay";
import ExpandableItem from "./ExpandableItem";
import CardProduct from "./CardProduct";

//expandable with a list https://hlstore.ru/catalog/
//tempalte for one good
//путь с ресетом
//css на категории и подкатегории
//useEffect

const subCategories = {
  Аксессуары: [""],
  "Вазелин и масла": [""],
  "Всё для ухода и заживления": [""],
  "Иглы и типсы для татуировки": [""],
  "Краска для татуировки": [
    "Allegory Ink",
    "Eternal Ink",
    "Intenze",
    "Nocturnal",
    "World Famous",
  ],
  "Мыло и пенка": [""],
  "Тату машинки": [""],
};

const Products = [
  {
    Название: "Опал",
    Цена: "1500",
    Изображение: productSRC,
  },
  { Название: "Опал 2", Цена: "1900", Изображение: productSRC },
];

function ShopMain() {
  // const goodsArr = { accessories: ["acc1", "acc2"], oils: ["oils1", "oils2"] };
  const [category, setCategory] = useState("");
  const [path, setPath] = useState("Главная");
  useEffect(() => {
    // Сброс пути и установка новой категории
    if (category) {
      setPath(`Главная > ${category}`);
    } else {
      setPath("Главная"); // Если категория не выбрана, возвращаемся к главной
    }
  }, [category]);
  // console.log("entries", Object.entries(subCategories));
  // console.log("values", Object.values(subCategories));
  // console.log("keys", Object.keys(subCategories));

  return (
    <>
      <div className="sub-header-container">
        <h1 className="sub-header">Каталог товаров</h1>
        <p className="sub-header-path">{path}</p>
      </div>
      <div className="shop-container">
        <div className="catalogue">
          <div className="list">
            {/* <div className="catalogue-list-expandable"> */}
            {/* <ExpandableItem title="Всё для пирсинга" contentArr={} /> */}
            {/* {category &&
                goodsArr[
                  category === "Аксессуары" ? "accessories" : "oils"
                ].map((item) => <div key={item}>{item}</div>)} */}
            {/* </div> */}
            {/* <div className="catalogue-list-expandable"> */}

            <ExpandableItem
              setCategory={setCategory}
              title="Всё для татуировки"
              contentArr={[
                "Аксессуары",
                "Вазелин и масла",
                "Всё для ухода и заживления",
                "Иглы и типсы для татуировки",
                "Краска для татуировки",
                "Мыло и пенка",
                "Тату машинки",
              ]}
              subCategories={subCategories}
            />

            <ExpandableItem
              setCategory={setCategory}
              title="Всё для пирсинга"
              contentArr={[
                "Инструменты для пирсинга",
                "Подставки под украшения",
                "Украшения",
              ]}
              subCategories={subCategories}
            />
            <ExpandableItem
              setCategory={setCategory}
              title="Всё для студии"
              contentArr={["Дезинфекция и стерилизация", "Лампы", "Расходники"]}
            />
          </div>
          <div className="goods">
            {Products.map((item) => {
              return (
                <CardProduct
                  title={item.Название}
                  price={item.Цена}
                  productSRC={item.Изображение}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopMain;
