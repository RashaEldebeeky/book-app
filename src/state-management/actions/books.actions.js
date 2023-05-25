export const CHANGE_SHELF = "CHANGE_SHELF";
export const SET_BOOKS = "SET_BOOKS";

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: { books },
});

export const changeShelf = (data) => ({
  type: CHANGE_SHELF,
  payload: data,
});
