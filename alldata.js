// function AllData() {
//   const ctx = React.useContext(UserContext);

//   // console.log(`table head:` + Object.keys(ctx.users[0]));

//   //{"users":
//   //   [
//   //      {
//   //       "name":"abel",
//   //       "email":"abel@mit.edu",
//   //       "password":"secret",
//   //       "balance":100
//   //      },
//   //      {
//   //       "name":"barry",
//   //       "email":"barry@mit.edu",
//   //       "password":"secret2",
//   //       "balance":200
//   //      }
//   //   ]
//   // }

//   function generateTableData() {
//     let tbodyTag = document.querySelector("tbody");

//     for (let j = 0; j < ctx.users.length; j++) {
//       let data = Object.values(ctx.users[j]);
//       let tags = "<tr>";
//       for (let i = 0; i < data.length; i++) {
//         tags += `<td>${data[i]}</td>`;
//       }
//       tags += "</tr>";
//     }

//     tbodyTag.innerHTML = tags;
//   }

//   function generateTable() {
//     // generating Table Headers
//     let dataHeaders = Object.keys(ctx.users[0]);
//     let theadTag = document.querySelector("thead");

//     let tags = "<tr>";
//     for (let i = 0; i < dataHeaders.length; i++) {
//       tags += `<th scope="col">${dataHeaders[i]}</th>`;
//     }
//     tags += "</tr>";

//     theadTag.innerHTML = tags;
//     generateTableData();
//   }
//   function findThead() {
//     let theadTag = document.querySelector("thead");
//     let data = Object.values(ctx.users[0]);
//     console.log(data);
//     return String(theadTag);
//   }

//   return (
//     <>
//       <h5>All Data in Store</h5>
//       {JSON.stringify(ctx)}
//       <br />
//       <MyTable></MyTable>
//       {findThead()}
//     </>
//   );
// }

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
