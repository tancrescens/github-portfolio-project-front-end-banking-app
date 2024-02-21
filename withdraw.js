function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [balanceState, setBalanceState] = React.useState(ctx.users[0].balance);
  console.log(`balanceState: ${balanceState}`);

  // function updateBalance() {
  //   console.log("button activated");
  //   const input = document.getElementById("withdrawInput1");

  //   if (
  //     (0 >= input.value > ctx.users[0].balance) |
  //     (input.value === String(NaN))
  //   ) {
  //     input.value = "";
  //     alert("transaction failed");
  //     return;
  //   }

  //   ctx.users[0].balance += -Number(input.value);
  //   setBalanceState(ctx.users[0].balance);
  //   document.getElementById("withdrawInput1").value = "";
  //   alert("Withdrawal success!");
  //   return;
  // }
  function updateBalance() {
    console.log("button activated");
    const input = document.getElementById("withdrawInput1");

    // Check if the input is a valid positive number with up to 2 decimal places
    if (
      input.value.trim() === "" ||
      isNaN(Number(input.value)) ||
      Number(input.value) <= 0 ||
      Number(input.value) > ctx.users[0].balance ||
      !/^\d+(\.\d{1,2})?$/.test(input.value)
    ) {
      input.value = "";
      alert(
        "Invalid input. Please enter a positive number that doesn't exceed your stated balance"
      );
      return;
    }

    ctx.users[0].balance -= Number(input.value);
    setBalanceState(ctx.users[0].balance);
    input.value = "";
    alert("Withdrawal success!");
    return;
  }

  function emptyInputCheck(e) {
    let inputValue = e.currentTarget.value;
    const disabled = document.querySelector(".disabled");

    if (!inputValue) {
      if (disabled.hasAttribute("disabled"))
        disabled.removeAttribute("disabled");
    } else {
      disabled.setAttribute("disabled", true);
    }
  }

  return (
    <>
      <Card
        txtcolor="black"
        header="Withdrawal Form"
        title="Withdraw"
        text=""
        body={
          <form>
            <br />
            <div className="mb-3">
              <label className="form-label">Balance:</label>
              <p>{balanceState}</p>
            </div>
            {/*  */}
            <br />
            <div className="mb-3">
              <label for="withdrawInput1" className="form-label">
                Withdraw Amount:
              </label>
              <input
                className="form-control"
                id="withdrawInput1"
                aria-describedby="withdrawHelp"
                min="1"
                onInput={(e) => {
                  e.currentTarget.value = Math.abs(e.currentTarget.value);
                }}
                onChange={(e) => {
                  // emptyInputCheck(e);
                }}
              />
              <div id="withdrawHelp" className="form-text">
                Please input <strong>positive numbers</strong> only e.g 50
              </div>
            </div>
            {/*  */}
            <button
              id="submit"
              type="submit"
              className="btn btn-primary"
              onClick={updateBalance}
            >
              Submit
            </button>
            {/*  */}
          </form>
        }
      ></Card>
    </>
  );
}
