function Deposit() {
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
              <p>Balance Amount state-context</p>
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
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            {/*  */}
          </form>
        }
      ></Card>
    </>
  );
}
