import '../Styles/SignIn.css';
import React, {useState} from 'react';
function App() {
  const [show, setShow] = useState("login")
  const changetoSignup = () => setShow("signup");
  const changetoLogin = () => setShow("login");
  console.log(show);

  return (
    <>
      <div className="HeroContainer">
        <div className="imageContainer">
          <h2 className='imageHeading m-5'>Re-Medi</h2>
        </div>

        <div className="formContainer">
          {(show === "login") ? (
            <form action="" className='loginForm'>
              <span className='formHeading'>LOG-IN</span>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>
              <button type="button" className="loginBtn btn btn-primary my-3">Login</button>
              <hr />
              <button type="button" onClick={changetoSignup} className="Changelogin btn btn-primary my-3">Don't have an Account yet?</button>
            </form>)
            : (
              <form action="" className='signupForm'>
                <span className='formHeading'>SIGN-UP</span>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select User Type</option>
                  <option value="1">User</option>
                  <option value="2">NGO</option>
                </select>
                <hr />
                <div class="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                  <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Mobile No.</label>
                </div>
                <button type="button" className="loginBtn btn btn-primary my-3">Sign Up</button>
                <hr />
                <button type="button" onClick={changetoLogin} className="Changelogin btn btn-primary my-3">Already have an Account yet?</button>
              </form>
            )}





        </div>
      </div>

    </>
  );
}

export default App;
