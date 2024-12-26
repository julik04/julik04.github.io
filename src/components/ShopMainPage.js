import React, { useState, useEffect } from "react";
import productSRC from "../assets/product-image.jpg";

//expandable with a list https://hlstore.ru/catalog/
//tempalte for one good
//путь с ресетом
//css на категории и подкатегории
//useEffect

const subCategories = {
  Аксессуары: ["subacc1", "subacc2"],
  "Тату машинки": ["subtatu1", "subtatu2"],
};

const Products = [
  {
    Название: "Опал",
    Цена: "1500",
    Изображение: productSRC,
  },
  { Название: "Опал 2", Цена: "1900", Изображение: productSRC },
];

function CardProduct({ title, price, productSRC }) {
  return (
    <div className="card">
      <img src={productSRC} className="gallery__img" alt="1" />
      <div class="content">
        <h2 class="title">{title}</h2>
        <p class="price">{price}</p>
      </div>
    </div>
  );
}

const ExpandableItem = ({ title, contentArr, setCategory }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-element ${expanded ? "expanded" : ""}`}>
      <div onClick={handleToggle}>
        <h3 className="expandable">{title}</h3>
      </div>
      {expanded
        ? contentArr?.map((item) => {
            return (
              <>
                <p
                  className="catalogue-list-expandable"
                  onClick={() => {
                    setCategory(item);
                  }}
                >{`${item}`}</p>
              </>
            );
          })
        : ""}
    </div>
  );
};

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
  console.log("entries", Object.entries(subCategories));
  console.log("values", Object.values(subCategories));
  console.log("keys", Object.keys(subCategories));

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
            {category
              ? (() => {
                  if (Object.keys(subCategories).includes(category))
                    return subCategories[category].map((item) => {
                      return <>{item}</>;
                    });
                })()
              : ""}
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
            />
            <ExpandableItem
              setCategory={setCategory}
              title="Всё для пирсинга"
              contentArr={[
                "Инструменты для пирсинга",
                "Подставки под украшения",
                "Украшения",
              ]}
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

// import React, { useState } from "react";

// function ExpandableItem({ setCategory, title, contentArr }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleExpand = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="expandable-item">
//         <div className="expandable-header" onClick={toggleExpand}>
//           <h3>{title}</h3>
//           <span className={`expandable-icon ${isOpen ? "open" : ""}`}>▼</span>
//         </div>
//         <div className={`expandable-content ${isOpen ? "open" : ""}`}>
//           {contentArr.map((item) => (
//             <div key={item} onClick={() => setCategory(item)}>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ExpandableItem;
