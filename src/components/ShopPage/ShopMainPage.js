import React, { useState, useEffect } from "react";
import productSRC from "../../assets/product-image.jpg";
import CategoryDisplay from "./CategoryDisplay";
import ExpandableItem from "./ExpandableItem";
import CardProduct from "./CardProduct";

//expandable with a list https://hlstore.ru/catalog/

const subCategories = {
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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [path, setPath] = useState("Главная");
  console.log(selectedCategories);
  console.log(`${category} category`);

  useEffect(() => {
    // check
    if (category) {
      setSelectedCategories((prev) => {
        if (!prev.includes(category)) {
          return [...prev, category];
        } else {
          return [
            ...prev.slice(0, prev.indexOf(category)),
            ...prev.slice(prev.indexOf(category) + 1, prev.length),
          ];
        }
      });
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
              selectedCategories={selectedCategories}
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

// 'import React, { useState } from "react";

// const Category = ({ name, children, isOpen, onToggle }) => {
//   return (
//     <div>
//       <div
//         onClick={onToggle}
//         style={{
//           cursor: "pointer",
//           padding: "10px",
//           border: "1px solid #ccc",
//           margin: "5px 0",
//         }}
//       >
//         {name}
//       </div>
//       {isOpen && <div style={{ paddingLeft: "20px" }}>{children}</div>}
//     </div>
//   );
// };

// const NestedCategories = ({ categories }) => {
//   const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenCategoryIndex(openCategoryIndex === index ? null : index);
//   };

//   return (
//     <div>
//       {categories.map((category, index) => (
//         <Category
//           key={index}
//           name={category.name}
//           isOpen={openCategoryIndex === index}
//           onToggle={() => handleToggle(index)}
//         >
//           {category.subcategories && category.subcategories.length > 0 && (
//             <NestedCategories categories={category.subcategories} />
//           )}
//         </Category>
//       ))}
//     </div>
//   );
// };

// const ShopMain = () => {
//   const categoriesData = [
//     {
//       name: "Категория 1",
//       subcategories: [
//         { name: "Подкатегория 1.1" },
//         {
//           name: "Подкатегория 1.2",
//           subcategories: [
//             { name: "Подкатегория 1.2.1" },
//             { name: "Подкатегория 1.2.2" },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Категория 2",
//       subcategories: [
//         { name: "Подкатегория 2.1" },
//         { name: "Подкатегория 2.2" },
//       ],
//     },
//     {
//       name: "Категория 3",
//       subcategories: [
//         { name: "Подкатегория 3.1" },
//         {
//           name: "Подкатегория 3.2",
//           subcategories: [
//             { name: "Подкатегория 3.2.1" },
//             { name: "Подкатегория 3.2.2" },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <h1>Список категорий</h1>
//       <NestedCategories categories={categoriesData} />
//     </div>
//   );
// };

// export default ShopMain;'
