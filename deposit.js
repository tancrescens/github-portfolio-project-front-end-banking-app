function Deposit() {
  const ctx = React.useContext(UserContext);
  const [balanceState, changeBalanceState] = React.useState(
    ctx.users[0].balance
  );

  function updateBalance() {
    const input = document.getElementById("depositInput1");
    ctx.users[0].balance += Number(input.value);
    changeBalanceState(ctx.users[0].balance);
    document.getElementById("depositInput1").value = "";
    alert("Deposit success!");
    return;
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
                type="numbers"
                className="form-control"
                id="depositInput1"
                aria-describedby="depositHelp"
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
