export const categoryPath = (category) => {
  let modifiedCategory = category.name
    .replaceAll(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase();
  let urlPath = `/category/${modifiedCategory.replaceAll(" ", "-")}`;

  return urlPath;
};

export const postPath = (id, title, date) => {
  let publishDate = new Date(date);
  let modifiedTitle = title.replaceAll(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
  let urlPath = `/${publishDate.getFullYear()}/${publishDate.getMonth()}/${publishDate.getDate()}/${id}/${modifiedTitle.replaceAll(
    " ",
    "-"
  )}`;

  return urlPath;
};
