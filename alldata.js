function AllData() {
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    generateTable();
  }, [ctx.users]); // Trigger the effect when ctx.users changes

  function generateTableData() {
    let tbodyTag = document.querySelector("tbody");
    tbodyTag.innerHTML = ctx.users
      .map((user) => {
        return `<tr>${Object.values(user)
          .map((value) => `<td>${value}</td>`)
          .join("")}</tr>`;
      })
      .join("");
  }

  function generateTable() {
    let dataHeaders = Object.keys(ctx.users[0]);
    let theadTag = document.querySelector("thead");
    let tbodyTag = document.querySelector("tbody");

    if (theadTag && tbodyTag) {
      let tags = `<tr>${dataHeaders
        .map((header) => `<th scope="col">${header}</th>`)
        .join("")}</tr>`;
      theadTag.innerHTML = tags;
      generateTableData();
    }
  }

  return (
    <>
      <h5>All Data in Store</h5>
      <br />
      <table className="table">
        <thead></thead>
        <tbody></tbody>
      </table>
    </>
  );
}
