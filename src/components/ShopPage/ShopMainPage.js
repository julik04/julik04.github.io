import React, { useState, useEffect } from "react";
import productSRC from "../../assets/product-image.jpg";
import productSRCAl1 from "../../assets/allegory1.jpg";
import productSRCAl2 from "../../assets/allegory2.jpg";
import productSRCEt1 from "../../assets/eternal1.jpg";
import productSRCEt2 from "../../assets/eternal2.jpg";
import productSRCEt3 from "../../assets/eternal3.jpg";
import productSRCEt4 from "../../assets/eternal4.jpg";
import productSRCEt5 from "../../assets/eternal5.jpg";
import productSRCEt6 from "../../assets/eternal6.jpg";
import productSRCEt7 from "../../assets/eternal7.jpg";
import productSRCEt8 from "../../assets/eternal8.jpg";
import productSRCEt9 from "../../assets/eternal9.jpg";
import productSRCEt10 from "../../assets/eternal10.jpg";
import productSRCIn from "../../assets/intenze.jpg";
import productSRCIn1 from "../../assets/intenze1.jpg";
import productSRCIn2 from "../../assets/intenze2.jpg";
import productSRCIn3 from "../../assets/intenze3.jpg";
import productSRCIn4 from "../../assets/intenze4.jpg";
import productSRCIn5 from "../../assets/intenze5.jpeg";
import productSRCIn6 from "../../assets/intenze6.jpeg";
import productSRCIn7 from "../../assets/intenze7.jpeg";
import productSRCNoc from "../../assets/nocturnal.jpg";
import productSRCNoc1 from "../../assets/nocturnal1.jpg";
import productSRCNoc2 from "../../assets/nocturnal2.jpg";
import productSRCW1 from "../../assets/world1.jpg";
import productSRCW2 from "../../assets/world2.jpg";
import productSRCW3 from "../../assets/world3.jpg";
import productSRCW4 from "../../assets/world4.jpg";
import productSRCW5 from "../../assets/world5.jpg";
import productSRCW6 from "../../assets/world6.jpg";
import productSRCW7 from "../../assets/world7.jpg";
import productSRCW8 from "../../assets/world8.jpg";
import productSRCW9 from "../../assets/world9.jpg";
import productSRCW10 from "../../assets/world10.jpg";
import productSRCW11 from "../../assets/world11.jpg";
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
      Название: "Краска для тату Allegory BLAK - Черный пигмент",
      Цена: "680",
      Изображение: productSRCAl1,
    },
    {
      Название: "Краска для тату Allegory WHITE - Белый пигмент",
      Цена: "680",
      Изображение: productSRCAl2,
    },
  ],
  "Eternal Ink": [
    {
      Название: "Краска для тату Eternal Pepto Pink",
      Цена: "525",
      Изображение: productSRCEt1,
    },
    {
      Название: "Краска для тату Eternal Neutral Gray 20",
      Цена: "480",
      Изображение: productSRCEt2,
    },
    {
      Название: "Краска для тату Eternal Ivory",
      Цена: "480",
      Изображение: productSRCEt3,
    },
    {
      Название: "Краска для тату Eternal Tibetan Red",
      Цена: "1500",
      Изображение: productSRCEt4,
    },
    {
      Название: "Краска для тату Eternal Rigor Mortis",
      Цена: "900",
      Изображение: productSRCEt5,
    },
    {
      Название: "Краска для тату Eternal Mississippi Mud",
      Цена: "525",
      Изображение: productSRCEt6,
    },
    {
      Название: "Краска для тату Eternal Neutral Gray 60",
      Цена: "480",
      Изображение: productSRCEt7,
    },
    {
      Название: "Краска для тату Eternal Plague Brown",
      Цена: "900",
      Изображение: productSRCEt8,
    },
    {
      Название: "Краска для тату Eternal Graveside Dark",
      Цена: "900",
      Изображение: productSRCEt9,
    },
    {
      Название: "Краска для тату Eternal Equinox",
      Цена: "900",
      Изображение: productSRCEt10,
    },
  ],
  Intenze: [
    {
      Название: "Набор красок для тату Intenze 19 Color Set - 19 шт",
      Цена: "9225",
      Изображение: productSRCIn,
    },
    {
      Название: "Краска для тату Intenze True Black",
      Цена: "525",
      Изображение: productSRCIn1,
    },
    {
      Название: "Краска для тату Intenze Snow White Opaque",
      Цена: "525",
      Изображение: productSRCIn2,
    },
    {
      Название: "Краска для тату Intenze Sangria",
      Цена: "1035",
      Изображение: productSRCIn3,
    },
    {
      Название: "Краска для тату Intenze Soft Orange",
      Цена: "525",
      Изображение: productSRCIn4,
    },
    {
      Название: "Краска для тату Intenze Pink Panther",
      Цена: "525",
      Изображение: productSRCIn5,
    },
    {
      Название: "Краска для тату Intenze Lime Green",
      Цена: "525",
      Изображение: productSRCIn6,
    },
    {
      Название: "Краска для тату Intenze Ocean Blue",
      Цена: "1035",
      Изображение: productSRCIn7,
    },
  ],
  Nocturnal: [
    {
      Название: "Набор красок для тату Nocturnal West Coast Blend - 3 шт",
      Цена: "2000",
      Изображение: productSRCNoc,
    },
    {
      Название: "Краска для тату Nocturnal Shine White",
      Цена: "890",
      Изображение: productSRCNoc1,
    },
    {
      Название: "Краска для тату Nocturnal Super Black",
      Цена: "890",
      Изображение: productSRCNoc2,
    },
  ],
  "World Famous": [
    {
      Название: "Краска для тату World Famous Jenna Kerr",
      Цена: "1600",
      Изображение: productSRCW1,
    },
    {
      Название: "Краска для тату World Famous Gorsky's Rotting Lust",
      Цена: "1600",
      Изображение: productSRCW2,
    },
    {
      Название: "Краска для тату World Famous SANDRA DAUKSHTA",
      Цена: "1600",
      Изображение: productSRCW3,
    },
    {
      Название: "Краска для тату World Famous Sandra Daukshta",
      Цена: "1600",
      Изображение: productSRCW4,
    },
    {
      Название: "Краска для тату World Famous Ilya Fom Gazelle",
      Цена: "1600",
      Изображение: productSRCW5,
    },
    {
      Название: "Краска для тату World Famous Jenna Kerr",
      Цена: "1600",
      Изображение: productSRCW6,
    },
    {
      Название: "Краска для тату World Famous Rembrandt Red",
      Цена: "1470",
      Изображение: productSRCW7,
    },
    {
      Название: "Краска для тату World Famous Sinatra Blue",
      Цена: "1470",
      Изображение: productSRCW8,
    },
    {
      Название: "Краска для тату World Famous Oleg Shepelenko",
      Цена: "1600",
      Изображение: productSRCW9,
    },
    {
      Название: "Краска для тату World Famous Maks Kornev's Mucus",
      Цена: "1600",
      Изображение: productSRCW10,
    },
    {
      Название: "Краска для тату World Famous Gorsky's Dark Blizzard",
      Цена: "1600",
      Изображение: productSRCW11,
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
