function formResponse(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('message').value;

    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "<-- Back to site",
      });
    // const success = document.getElementById('success');
    // const danger = document.getElementById('danger');

    // if(Name.value === '' || email.value === '' || msg.value === ''){
    //     danger.style.display = 'block';
    // }
    // else{
    //     setTimeout(() => {
    //         Name.value = '';
    //         email.value = '';
    //         msg.value = '';
    //     }, 2000);

    //     success.style.display = 'block';
    // }


    // setTimeout(() => {
    //     danger.style.display = 'none';
    //     success.style.display = 'none';
    // }, 4000);

}