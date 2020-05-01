const domain = 'http://35.225.243.133';
$(document).ready(function () {
    var card = document.getElementsByClassName("card");
    for (var i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function () {
            var card_body_parent = this.closest('.card');
            var card_img = card_body_parent.getElementsByClassName("shekil")[0];
            var card_img_src = card_img.getAttribute('src');
            var card_name = card_body_parent.getElementsByClassName("cardname")[0].innerHTML;
            var card_lb = card_body_parent.getElementsByClassName("cardlb")[0].innerHTML;
            var card_price = card_body_parent.getElementsByClassName("cardmoney")[0].innerHTML;
            card_price = parseInt(card_price.replace('$', ''));



            // document.getElementById('card-img').setAttribute('src',card_img_src) ;
            document.getElementById('card-img').innerHTML = `<img style="width:90px;height:90px;display:flex;margin:8px 0px;border:1px solid rgb(234, 234, 234);" src="${card_img_src}">`;
            document.getElementById('name-input').value = card_name;
            document.getElementById('unit-input').value = card_lb;
            document.getElementById('price-input').value = card_price;
        });
    };

    document.querySelector('body').addEventListener('click', function (event) {
        
        if(event.target.id === 'loqo'){
            document.querySelector('.settings').classList.toggle('show');
        }else{
            document.querySelector('.settings').classList.remove('show');
        }
    })
    
    document.querySelector('body').addEventListener('click', function (event) {
       
        if(event.target.id === 'notice'){
            document.querySelector('.notificationtable').classList.toggle('show');
        }else{
            document.querySelector('.notificationtable').classList.remove('show');
        }
    })
    
     document.querySelector('.buttonaddproducts').addEventListener('click', function () {
        document.querySelector('.full').classList.toggle('show3');
    })
   
    document.querySelector('.exit').addEventListener('click', function () {
        document.querySelector('.full').classList.toggle('show3');
    })
   
    document.querySelector('body').addEventListener('click', function (event) {
      
        if(event.target.id === 'hamburger'){
            document.querySelector('.full2').classList.toggle('show');
        }else{
            document.querySelector('.full2').classList.remove('show');
        }
    })

    //................................
    $('.drag').click(function () {
        $('.upload').click();
    })
    document.querySelector('#form-add-product').addEventListener('submit', function (event) {
        console.log('aa')
        event.preventDefault();
        let form_data = new Object();
        document.querySelectorAll('.form-add-product input,.form-add-product textarea,.form-add-product select').forEach((input) => {
            form_data[input.getAttribute('name')] = input.value;
        });
        document.querySelectorAll('.form-add-product small').forEach((small_tag) => {
            small_tag.innerHTML = '';
        })
        $.ajax({
            url: `${domain}/api/products/`,
            method: 'POST',
            data: form_data,
            success: function (response) {
                console.log(response);
            },
            error: function(error_response){
                console.log(error_response);
            }
        });
    });
});