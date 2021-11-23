export const tagName = "x-form";

export const template = () => {
  return /*html*/ `
    <h1>Formulario</h1>

    <div class="form-group">
      <label for="inputEmail">Email address</label>
      <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div class="form-group">
      <label for="inputPassword">Password</label>
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>

    <button class="btn">Submit</button>

    <div>
      <button class="btn">Submit</button>
    </div>
  `;
};
