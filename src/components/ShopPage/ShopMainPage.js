/* eslint-disable default-case */
import React, { useState, useEffect } from "react";

import ExpandableItem from "./ExpandableItem";
import CardProduct from "./CardProduct";
import { Products } from "../Constants/Products";

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

function getAllItemsByCategory(category) {
  const items = [];

  if (subCategories[category])
    subCategories[category].map((subcategory) => {
      return Products[subcategory].map((product) => {
        items.push(product);
      });
    });
  }
  return items;
}

export const Products = {
  Популярное: [
    {
      Название: "Пирсинг",
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
  const [expandedCategory, setExpandedCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Популярное");
  const [path, setPath] = useState(["Главная"]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  console.log("selectedCategory", selectedCategory);
  console.log("selectedSubcategory", selectedSubcategory);
  console.log("path", path);

  // Handle category expansion
  const handleCategoryExpand = (title) => {
    if (expandedCategory === title) {
      // If clicking the same expanded category, collapse it
      setExpandedCategory("");
      // Reset path to home if no category is selected
      if (!selectedCategory) {
        setPath(["Главная"]);
      }
    } else {
      // If expanding a different category, reset states and update path
      setExpandedCategory(title);
      setSelectedCategory("");
      setSelectedSubcategory("Популярное");
      setPath(["Главная", title]);
    }
  };

  // Handle category selection
  const handleCategorySelect = (category, parentTitle) => {
    if (category === selectedCategory) {
      // If clicking the same category again, deselect it
      setSelectedCategory("");
      setSelectedSubcategory("Популярное");
      setPath(["Главная", parentTitle]);
      setExpandedCategory(parentTitle);
    } else {
      setSelectedCategory(category);
      setSelectedSubcategory("Популярное");
      // Add both parent title and category to path immediately
      setPath(["Главная", parentTitle, category]);
      // Keep the section expanded
      setExpandedCategory(parentTitle);
    }
  };

  // Handle subcategory selection
  const handleSubcategorySelect = (subcategory) => {
    if (subcategory === selectedSubcategory) {
      // If clicking the same subcategory again, go back to category level
      setSelectedSubcategory("Популярное");
      // Keep parent and category in path
      const currentPath = path.slice(0, 3); // Keep Главная, parent, and category
      setPath(currentPath);
    } else {
      setSelectedSubcategory(subcategory);
      // Add subcategory while maintaining the existing path structure
      const currentPath = path.slice(0, 3); // Keep Главная, parent, and category
      setPath([...currentPath, subcategory]);
    }
  };

  // Handle breadcrumb navigation
  const handlePathClick = (index) => {
    const newPath = path.slice(0, index + 1);
    setPath(newPath);

    switch (index) {
      case 0: // Clicked "Главная"
        setSelectedCategory("");
        setSelectedSubcategory("Популярное");
        setExpandedCategory("");
        break;
      case 1: // Clicked Parent Category
        setExpandedCategory(newPath[1]);
        setSelectedCategory("");
        setSelectedSubcategory("Популярное");
        break;
      case 2: // Clicked Category
        setSelectedCategory(newPath[2]);
        setSelectedSubcategory("Популярное");
        break;
      case 3: // Clicked Subcategory
        setSelectedSubcategory(newPath[3]);
        break;
    }
  };

  // Update products when category or subcategory changes
  useEffect(() => {
    if (selectedSubcategory === "Популярное") {
      if (selectedCategory) {
        const categoryProducts = getAllItemsByCategory(selectedCategory);
        setSelectedProducts(categoryProducts);
      } else {
        setSelectedProducts(Products["Популярное"] || []);
      }
    } else {
      setSelectedProducts(Products[selectedSubcategory] || []);
    }
  }, [selectedCategory, selectedSubcategory]);

  return (
    <>
      <div className="sub-header-container">
        <h1 className="sub-header">Каталог товаров</h1>
        {/* <p className="sub-header-path">{path}</p> */}
        {path.split(">").map((path) => {
          return (
            <p
              onClick={() => {
                if (path.trim() !== "Популярное") {
                  console.log("path", path);
                  if (path === "Главная ") {
                    setSubcategory("Популярное");
                  } else {
                    // console.log("else", path === ` ${path} `);
                    // console.log(
                    //   "Object.keys(subCategories).includes(path)",
                    //   // Object.keys(subCategories).includes(" " + path + " ")
                    //   Object.keys(subCategories).some((key) => {
                    //     console.log("key === path", key === path.trim());
                    //     return key === path.trim();
                    //   })
                    // );
                    if (
                      Object.keys(subCategories).some((key) => {
                        console.log("key === path", key === path.trim());
                        return key === path.trim();
                      })
                    ) {
                      setSelectedProducts(getAllItemsByCategory(path.trim()));
                    }
                  }
                }
              }}
            >
              {path}
            </p>
          );
        })}
      </div>

      <div className="shop-container">
        <div className="catalogue">
          <div className="list">
            <ExpandableItem
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
              title="Всё для студии"
              contentArr={["Дезинфекция и стерилизация", "Лампы", "Расходники"]}
            />
          </div>

          <div className="goods">
            {selectedProducts.length > 0 ? (
              selectedProducts.map((item, index) => (
                <CardProduct
                  key={index}
                  productSubcategory={selectedSubcategory}
                  productIndex={index}
                  title={item.Название}
                  price={item.Цена}
                  productSRC={item.Изображение}
                />
              ))
            ) : (
              <div className="empty-state">Нет товаров в этой категории</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopMain;
