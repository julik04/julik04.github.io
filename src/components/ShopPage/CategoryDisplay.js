function CategoryDisplay({ category, subCategories }) {
  if (subCategories && typeof subCategories === "object" && category) {
    const items = subCategories[category];

    if (items && items.length > 0) {
      return (
        <div>
          {items.map((item, index) => (
            <p key={index}>{item}</p> // Используем индекс как ключ
          ))}
        </div>
      );
    }
  }

  return null; // Если нет подкатегорий или категория не выбрана, ничего не отображаем
}
export default CategoryDisplay;
