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
  if (subCategories[category]) {
    subCategories[category].forEach((subcategory) => {
      if (Products[subcategory]) {
        items.push(...Products[subcategory]);
      }
    });
  }
  return items;
}

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
        <div className="breadcrumbs">
          {path.map((item, index) => (
            <span
              key={index}
              className={`breadcrumb-item ${
                (index === 2 && item === selectedCategory) ||
                (index === 3 && item === selectedSubcategory)
                  ? "selected"
                  : ""
              }`}
              onClick={() => handlePathClick(index)}
            >
              {item}
              {index < path.length - 1 && " > "}
            </span>
          ))}
        </div>
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
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategorySelect={(category) =>
                handleCategorySelect(category, "Всё для татуировки")
              }
              onSubcategorySelect={handleSubcategorySelect}
              isExpanded={expandedCategory === "Всё для татуировки"}
              onToggle={() => handleCategoryExpand("Всё для татуировки")}
            />
            <ExpandableItem
              title="Всё для пирсинга"
              contentArr={[
                "Инструменты для пирсинга",
                "Подставки под украшения",
                "Украшения",
              ]}
              subCategories={subCategories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategorySelect={(category) =>
                handleCategorySelect(category, "Всё для пирсинга")
              }
              onSubcategorySelect={handleSubcategorySelect}
              isExpanded={expandedCategory === "Всё для пирсинга"}
              onToggle={() => handleCategoryExpand("Всё для пирсинга")}
            />
            <ExpandableItem
              title="Всё для студии"
              contentArr={["Дезинфекция и стерилизация", "Лампы", "Расходники"]}
              subCategories={subCategories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategorySelect={(category) =>
                handleCategorySelect(category, "Всё для студии")
              }
              onSubcategorySelect={handleSubcategorySelect}
              isExpanded={expandedCategory === "Всё для студии"}
              onToggle={() => handleCategoryExpand("Всё для студии")}
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
