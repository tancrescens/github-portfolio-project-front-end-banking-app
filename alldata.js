function AllData() {
  const ctx = React.useContext(UserContext);

  // console.log(`table head:` + Object.keys(ctx.users[0]));

  //{"users":
  //   [
  //      {
  //       "name":"abel",
  //       "email":"abel@mit.edu",
  //       "password":"secret",
  //       "balance":100
  //      },
  //      {
  //       "name":"barry",
  //       "email":"barry@mit.edu",
  //       "password":"secret2",
  //       "balance":200
  //      }
  //   ]
  // }

  function generateTableData() {
    let data = Object.values(ctx.users[0]);
    const tbodyTag = document.querySelector(".tbody");

    for (let j = 0; j < ctx.users.length; j++) {
      let tags = "<tr>";
      for (let i = 0; i < data; i++) {
        tags += `<td>${data[i]}</td>`;
      }
      tags += "</tr>";
    }

    tbodyTag.innerHTML = tags;
  }

  function generateTable() {
    // generating Table Headers
    let dataHeaders = Object.keys(ctx.users[0]);
    const theadTag = document.querySelector(".thead");

    let tags = "<tr>";
    for (let i = 0; i < dataHeaders.length; i++) {
      tags += `<th scope="col">${dataHeaders[i]}</th>`;
    }
    tags += "</tr>";

    theadTag.innerHTML = tags;
    generateTableData();
  }

  return (
    <>
      <h5>All Data in Store</h5>
      {JSON.stringify(ctx)}
      <br />
      {/* table */}
      <table class="table">
        <thead class="thead">
          <tr>
            <th>Head</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr>
            <td>Body</td>
          </tr>
        </tbody>
      </table>
      {/* {generateTable()} */}
    </>
  );
}
