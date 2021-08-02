export const removeSpaces = (str) => {
  return str.replaceAll(" ", "");
};

export const getCurrentCategoryId = (catArray, catName) => {
  let catId = "";
  const currentCat = catArray.filter(
    (el, idx) =>
      el.name.replaceAll(" ", "-").toLowerCase() === catName.toLowerCase()
  );
  currentCat.map((category) => (catId = category._id));
  return catId;
};

export const getPostCategory = (postCategories, categoryId) => {
  const categories = postCategories.filter((el, idx) => el._id === categoryId);
  return categories;
};
