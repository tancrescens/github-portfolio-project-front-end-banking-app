function Deposit() {
  const ctx = React.useContext(UserContext);
  const [balance, changeBalance] = React.useState(ctx.users[0].balance);

  function updateBalance() {
    const input = document.getElementById("depositInput1");
    ctx.users[0].balance += Number(input.value);
    changeBalance(ctx.users[0].balance);
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
            <div class="mb-3">
              <label class="form-label">Balance:</label>
              <p>{balance}</p>
            </div>
            {/*  */}
            <br />
            <div class="mb-3">
              <label for="depositInput1" class="form-label">
                Deposit Amount:
              </label>
              <input
                type="numbers"
                class="form-control"
                id="depositInput1"
                aria-describedby="depositHelp"
              />
              <div id="depositHelp" class="form-text">
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
