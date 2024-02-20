function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [validEmail, setValidEmail] = React.useState(false);
  const [password, setPassword] = React.useState("");
  // const [nameEmpty, setNameEmpty] = React.useState(true);
  // const [emailEmpty, setEmailEmpty] = React.useState(true);
  // const [passwordEmpty, setPasswordEmpty] = React.useState(true);

  React.useEffect(() => {
    checkEmptyFields();
  }, [name, email, password]); // Trigger the effect when ctx.users changes

  const ctx = React.useContext(UserContext);

  // if empty field detected, return false
  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    alert("Successfully Created Account");
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  function checkEmptyFields() {
    if ((name == false) | (validEmail == false) | (password == false)) {
      document.getElementById("submit").disabled = true;
    } else {
      document.getElementById("submit").disabled = false;
    }
  }

  function validateEmail(e) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.currentTarget.value.match(mailformat)) {
      document.getElementById("emailWarning").style.display = "none";
      setValidEmail(true);
    } else {
      document.getElementById("emailWarning").style.display = "block";
      setValidEmail(false);
    }
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
            <br />
            Email address
            <br />
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                validateEmail(e);
              }}
            />
            <p id="emailWarning">Please input a valid email address</p>
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <br />
            <button
              id="submit"
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
