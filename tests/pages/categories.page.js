export function getCategoriesHeading(page) {
  return page.getByRole("heading", {
    level: 2,
    name: "Categories",
    exact: true,
  });
}

export function getCategoryLink(page, categoryName) {
  return page.locator(".c-category-card-wrapper").getByRole("link", {
    name: categoryName,
    exact: true,
  });
}

export function getCategoryPageHeading(page, categoryName) {
  return page.getByRole("heading", {
    level: 1,
    name: categoryName,
    exact: true,
  });
}

export default {
  getCategoriesHeading,
  getCategoryLink,
  getCategoryPageHeading,
};
