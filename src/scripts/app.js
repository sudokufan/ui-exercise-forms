// functionality for Back button
document.getElementById('backButton').onclick = function () {
  window.history.back()
}

// post request for email filled in by user
document.querySelector('button').onclick = function () {
    let userEmail = document.getElementsByClassName('emailInput').value
    
    fetch("http://localhost:3005/customer/account/resetPassword", {
      method: "post",
      body: JSON.stringify({ email: userEmail }),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    })
}
