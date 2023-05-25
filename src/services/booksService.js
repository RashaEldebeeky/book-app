const bookApi = "https://reactnd-books-api.udacity.com";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (bookId) =>
  fetch(`${bookApi}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const getAll = () =>
  fetch(`${bookApi}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books);

export const update = (book, shelf) =>
  fetch(`${bookApi}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const search = (query, maxResults) =>
  fetch(`${bookApi}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data.books);
