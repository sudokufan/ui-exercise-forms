// functionality for Back button
document.getElementById('backButton').onclick = function () {
  window.history.back()
}


// hide password helper box
let helperBox = document.getElementById('hiddenPasswordHelperBox')
document.getElementById('hiddenPasswordHelper').onclick = function () {
  if (helperBox.style.display === 'none') {
    helperBox.style.display === 'block'
  } else {
    helperBox.style.display === 'none'
  }
}


// post request for email filled in by user
document.querySelector('button').onclick = function () {
    let userEmail = document.getElementById('emailInput').value

    fetch('http://localhost:3005/customer/account/resetPassword', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail }),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    })
}
