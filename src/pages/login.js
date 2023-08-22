import Headerbelog from "../comp/headerbeflog";
import Footer from "../comp/footer";

const Login = () => {
  return (
    <>
      <Headerbelog />
      <div className="bud">
        <div className="box">
          <form action="">
            <h2 className="myfont">sign in</h2>
            <div className="inputBox">
              <input type="text" required />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" required />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <a href="#">Forget Password</a>
              <a href="/signup">Signup</a>
            </div>
            <input className="myfont" type="submit" value="login" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
