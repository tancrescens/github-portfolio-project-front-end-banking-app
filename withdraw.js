function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [balanceState, setBalanceState] = React.useState(ctx.users[0].balance);
  const [inputEmpty, setInputEmpty] = React.useState(true);

  React.useEffect(() => {
    document.getElementById("submit").disabled = true;
  }, [inputEmpty]);

  async function updateBalance() {
    const input = document.getElementById("withdrawInput1");

    // Check if the input is a valid positive number
    if (
      input.value.trim() === "" ||
      isNaN(Number(input.value)) ||
      Number(input.value) <= 0 ||
      Number(input.value) > ctx.users[0].balance ||
      !/^\d+(\.\d{1,2})?$/.test(input.value)
    ) {
      input.value = "";
      await setInputEmpty(true);

      alert(
        "Invalid input. Please enter a positive number that doesn't exceed your stated balance"
      );
      return;
    }

    ctx.users[0].balance -= Number(input.value);
    setBalanceState(ctx.users[0].balance);
    input.value = "";
    await setInputEmpty(true);
    alert("Withdrawal success!");
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
                  emptyInputCheck(e);
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
