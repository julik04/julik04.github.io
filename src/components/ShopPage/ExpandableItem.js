import React from "react";

// Компонент для расширяемого элемента
const ExpandableItem = ({
  title,
  contentArr,
  subCategories,
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
  isExpanded,
  onToggle
}) => {
  return (
    <div className={`expandable-element ${isExpanded ? "expanded" : ""}`}>
      <div onClick={onToggle}>
        <h3 className="expandable">{title}</h3>
      </div>
      {isExpanded && contentArr?.map((item) => (
        <div key={item}>
          <p
            className={`catalogue-list-expandable ${selectedCategory === item ? 'selected' : ''}`}
            onClick={() => onCategorySelect(item)}
          >
            {item}
          </p>
          {selectedCategory === item && subCategories[item]?.map((subcat) => (
            <div
              key={subcat}
              className={`subcategories ${selectedSubcategory === subcat ? 'selected' : ''}`}
              onClick={() => onSubcategorySelect(subcat)}
            >
              {subcat}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExpandableItem;
