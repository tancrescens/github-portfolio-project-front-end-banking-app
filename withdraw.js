function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [balanceState, changeBalanceState] = React.useState(
    ctx.users[0].balance
  );
  console.log(`balanceState: ${balanceState}`);

  function updateBalance() {
    const input = document.getElementById("withdrawInput1");
    ctx.users[0].balance += -Number(input.value);
    changeBalanceState(ctx.users[0].balance);
    document.getElementById("withdrawInput1").value = "";
    alert("Withdrawal success!");
    return;
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
                type="numbers"
                className="form-control"
                id="withdrawInput1"
                aria-describedby="withdrawHelp"
              />
              <div id="withdrawHelp" className="form-text">
                Please input <strong>numbers</strong> with
                <strong> 2 decimals</strong> only e.g 50.10
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
