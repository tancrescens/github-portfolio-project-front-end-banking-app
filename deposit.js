function Deposit() {
  return (
    <>
      <Card
        txtcolor="black"
        header="Deposit Form"
        title="Deposit"
        text='Please enter how much you would like to deposit and click "Submit"'
        body={
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Balance
              </label>
              <p type="email" class="form-control" id="exampleInputEmail1">
                Balance Amount state-context
              </p>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        }
      ></Card>
    </>
  );
}
