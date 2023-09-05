import { CategoriesType } from 'src/types';

function Categories({
  noFilterBtn,
  filterContainer,
  index,
  changeClassName,
  filterByCategory,
  category,
} : CategoriesType) {
  return (
    <li key={index}>
      <img
        src={category.icon}
        alt={category.alt}
        className={`categoryIconFilter ${category.name}`}
        data-name={category.name}
        onClick={(e) => {
          changeClassName(e, noFilterBtn, filterContainer, false);
          filterByCategory(e);
          // setSortByFavorite(false);
          // filterByCategory(e);
        }}
      />
    </li>
  );
}

export default Categories;
