/**
 * Create a Book object, populate some HTML to display its properties.
 */
const updateBook = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(book);
  console.info(update);
};

const book = {
  name: "Everyday Book",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBook(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBook(`Strap lengths updated.`);
  },
};

const markup = (book) => {
  return `
  <div>
    <h3>${book.name}</h3>
    <ul>
      <li>Volume: ${book.volume}</li>
      <li>Color: ${book.color}</li>
      <li>Number of pockets: ${book.pocketNum}</li>
      <li>Strap lengths: L: ${book.strapLength.left}, R: ${
    book.strapLength.right
  } </li>
      <li>Top lid: ${book.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(book);
document.body.appendChild(main);
