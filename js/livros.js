function trocarLivro(id) {
  const books = document.querySelectorAll(".livro");
  books.forEach((book) => book.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
