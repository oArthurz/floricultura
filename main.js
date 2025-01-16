$(document).ready(function()
{
    $('#imagensCarrosel').slick(
        {
            autoplay: true,
            arrows:false,
        })

    $('.menuHamburguer').click(function()
    {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate(
        {
            telefone: 
            {
                required:true
            }
        })
})