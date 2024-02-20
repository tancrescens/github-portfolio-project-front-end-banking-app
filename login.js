function Login() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h1>Login</h1>
      {console.log(ctx)}
      <h2>Login with {JSON.stringify(ctx.users[0].name)} ?</h2>
    </>
  );
}
