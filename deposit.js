function Deposit() {
  const ctx = React.useContext(UserContext);
  const [balanceState, setBalanceState] = React.useState(ctx.users[0].balance);
  const [inputEmpty, setInputEmpty] = React.useState(true);

  React.useEffect(() => {
    document.getElementById("submit").disabled = true;
  }, [inputEmpty]);

  async function updateBalance() {
    const input = document.getElementById("depositInput1");

    // Check input for 1.empty, 2.non-number, 3.input<=0, 4.2 decimals & below
    // if is above, reject input
    if (
      input.value.trim() === "" ||
      isNaN(Number(input.value)) ||
      Number(input.value) <= 0 ||
      !/^\d+(\.\d{1,2})?$/.test(input.value)
    ) {
      input.value = "";
      await setInputEmpty(true);

      alert(
        `Invalid input.\n Please enter a positive number that has lesser than 2 decimal places`
      );
      return;
    }
    // accepted input
    ctx.users[0].balance += Number(input.value);

    setBalanceState(ctx.users[0].balance);
    document.getElementById("depositInput1").value = "";
    await setInputEmpty(true);

    alert("Deposit success!");
    return;
  }

  async function emptyInputCheck(e) {
    let inputValue = e.currentTarget.value;

    if ((inputValue == undefined) | (inputValue == 0)) {
      await setInputEmpty(true);
      document.getElementById("submit").disabled = true;
    } else {
      await setInputEmpty(false);
      document.getElementById("submit").disabled = false;
    }
  }

  return (
    <>
      <Card
        txtcolor="black"
        header="Deposit Form"
        title="Deposit"
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
              <label for="depositInput1" className="form-label">
                Deposit Amount:
              </label>
              <input
                className="form-control"
                id="depositInput1"
                aria-describedby="depositHelp"
                onInput={(e) => {
                  e.currentTarget.value = Math.abs(e.currentTarget.value);
                }}
                onChange={(e) => {
                  emptyInputCheck(e);
                }}
              />
              <div id="depositHelp" className="form-text">
                Please input <strong>positive numbers</strong> only e.g 50
              </div>
            </div>
            {/*  */}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={updateBalance}
              id="submit"
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
