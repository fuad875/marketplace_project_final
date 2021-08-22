function Login()
{
    return(
        <div>
            <h1>Login page</h1>
            <input type="password"  className="form-control" placeholder="password"></input> <br></br>
            <input type="email"  className="form-control" placeholder="email"></input> <br></br>
            <button  className="btn btn-primary">Login</button>
        </div>
        )
}
export default Login;