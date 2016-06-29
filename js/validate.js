 // var form = document.querySelector('#contactForm')

function validate(form) {
    var name = form.querySelector('#name').value.trim(),
        email = form.querySelector('#email').value.trim(),
        phone = form.querySelector('#phone').value.trim(),
        comment = form.querySelector('#comment').value.trim()
        //if name field does not equal 0 and is greater than 2
    if (name.length === 0 || name.length < 2) {
        return false;
    } else {
      //checks is email field has an @ sign
      //need to add regex for pattern
        if (email.includes('@') === false) {
            return false;
        } else {
          //checks if phone field has 10 digits
          //need to add regex for number pattern
            if (phone.length < 10) {
                return false;
            }
            else {
              //checks if comment field is not empty at least 1 char and more than 5
                if (comment.length > 1 && comment.length < 5) {
                    return false
                }
                else {
                    return true
                }
            }
        }
    }
}
