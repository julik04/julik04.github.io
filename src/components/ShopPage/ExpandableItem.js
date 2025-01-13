import React, { useState, useEffect } from "react";
import CategoryDisplay from "./CategoryDisplay";

// Компонент для расширяемого элемента
const ExpandableItem = ({
  title,
  contentArr,
  setCategory,
  subCategories,
  selectedCategories,
  setSubcategory,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(selectedCategory);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`expandable-element ${expanded ? "expanded" : ""}`}>
        <div onClick={handleToggle}>
          <h3 className="expandable">{title}</h3>
        </div>
        {expanded &&
          contentArr?.map((item) => {
            return (
              <>
                <div key={item}>
                  <p
                    className="catalogue-list-expandable"
                    onClick={() => {
                      setCategory(item); // Устанавливаем выбранную категорию
                      setSelectedCategory(item); // Устанавливаем локально выбранную категорию
                    }}
                  >
                    {item}
                  </p>
                </div>
                {/* check */}
                {selectedCategories.includes(item)
                  ? subCategories[item].map((subcat) => (
                      <div
                        className="subcategories"
                        onClick={() => {
                          setSubcategory(subcat);
                        }}
                      >
                        {subcat}
                      </div>
                    ))
                  : ""}
              </>
            );
          })}
      </div>
    </>
  );
};
export default ExpandableItem;
