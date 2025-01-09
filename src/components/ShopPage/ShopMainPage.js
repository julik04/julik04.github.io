import React, { useState, useEffect } from "react";
import productSRC from "../../assets/product-image.jpg";
import CategoryDisplay from "./CategoryDisplay";
import ExpandableItem from "./ExpandableItem";
import CardProduct from "./CardProduct";

//expandable with a list https://hlstore.ru/catalog/

const subCategories = {
  Популярное: [""],
  Аксессуары: ["111", "1221"],
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

const Products = {
  Популярное: [
    {
      Название: "Популярное1",
      Цена: "1500",
      Изображение: productSRC,
    },
  ],
  "Allegory Ink": [
    {
      Название: "Краска1 из подкатегории 1",
      Цена: "1500",
      Изображение: productSRC,
    },
    {
      Название: "Краска2 из подкатегории 1",
      Цена: "1900",
      Изображение: productSRC,
    },
  ],
  "Eternal Ink": [
    {
      Название: "Краска1 из подкатегории 2",
      Цена: "1500",
      Изображение: productSRC,
    },
    {
      Название: "Краска2 из подкатегории 2",
      Цена: "1900",
      Изображение: productSRC,
    },
  ],
  Intenze: [
    {
      Название: "Краска1 из подкатегории 3",
      Цена: "1500",
      Изображение: productSRC,
    },
    {
      Название: "Краска2 из подкатегории 3",
      Цена: "1900",
      Изображение: productSRC,
    },
  ],
  Nocturnal: [
    {
      Название: "Краска1 из подкатегории 4",
      Цена: "1500",
      Изображение: productSRC,
    },
    {
      Название: "Краска2 из подкатегории 4",
      Цена: "1900",
      Изображение: productSRC,
    },
  ],
  "World Famous": [
    {
      Название: "Краска1 из подкатегории 5",
      Цена: "1500",
      Изображение: productSRC,
    },
    {
      Название: "Краска2 из подкатегории 5",
      Цена: "1900",
      Изображение: productSRC,
    },
  ],
};

function ShopMain() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [path, setPath] = useState("Главная");
  const [subcategory, setSubcategory] = useState("Популярное");
  const [isSubcategory, setIsSubcategory] = useState(false);

  // console.log(selectedCategories, "selectedCategories");
  // console.log(`${category} category`);
  // console.log("subcategory", subcategory);

  useEffect(() => {
    // check
    if (category) {
      setSelectedCategories((prev) => {
        if (!prev.includes(category)) {
          return [...prev, category];
        } else {
          // return [

          //   ...prev.slice(0, prev.indexOf(category)),
          //   ...prev.slice(prev.indexOf(category) + 1, prev.length),
          // ];
          return prev.filter((cat) => cat !== category);
        }
      });
      setPath(`Главная > ${category} `);
    } else {
      setPath("Главная"); // Если категория не выбрана, возвращаемся к главной
    }
  }, [category]);

  useEffect(() => {
    if (!isSubcategory) {
      setPath((prev) => prev + ` > ${subcategory}`);
      setIsSubcategory(true);
    } else {
      setPath(
        (prev) => prev.split(">").slice(0, 2).join(">") + ` > ${subcategory}`
      );
    }
  }, [subcategory]);
  // Получаем товары по выбранной подкатегории
  const selectedProducts = Products[subcategory] || [];
  return (
    <>
      <div className="sub-header-container">
        <h1 className="sub-header">Каталог товаров</h1>
        <p className="sub-header-path">{path}</p>
      </div>
      <div className="shop-container">
        <div className="catalogue">
          <div className="list">
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
              selectedCategories={selectedCategories}
              setSubcategory={setSubcategory}
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
              selectedCategories={selectedCategories}
            />
            <ExpandableItem
              setCategory={setCategory}
              title="Всё для студии"
              contentArr={["Дезинфекция и стерилизация", "Лампы", "Расходники"]}
            />
          </div>

          <div className="goods">
            {selectedProducts
              ? selectedProducts.map((item) => {
                  return (
                    <CardProduct
                      title={item.Название}
                      price={item.Цена}
                      productSRC={item.Изображение}
                    />
                  );
                })
              : "НЕТ ТОВАРОВ"}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopMain;
