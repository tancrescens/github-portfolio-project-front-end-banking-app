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
            <div class="mb-3">
              <label class="form-label">Balance:</label>
              <p>{balanceState}</p>
            </div>
            {/*  */}
            <br />
            <div class="mb-3">
              <label for="withdrawInput1" class="form-label">
                Withdraw Amount:
              </label>
              <input
                type="numbers"
                class="form-control"
                id="withdrawInput1"
                aria-describedby="withdrawHelp"
              />
              <div id="withdrawHelp" class="form-text">
                Please input <strong>numbers</strong> with
                <strong> 2 decimals</strong> only e.g 50.10
              </div>
            </div>
            {/*  */}
            <button
              type="submit"
              class="btn btn-primary"
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
