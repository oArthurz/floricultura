$(document).ready(function()
{
    $('#imgCarrosel').slick(
        {
            autoplay:true,
            arrows:false
        })

    $('.menuHamburguer').click(function()
    {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate(
        {
            rules:
            {
                nome:
                {
                    required: true
                },
                telefone:
                {
                    required:true
                },
                floresInteresse:
                {
                    required:true
                }
            },
            messages:
                {
                    nome:'Insira seu nome',
                    telefone: 'Insira seu número',
                    floresInteresse:'Flor desejada'
                },
                submitHandler: function(form)
                {
                    alert(`Enviado com sucesso!`)
                },
                invalidHandler: function(evento, validador)
                {
                    let camposInvalidos = validador.numberOfInvalids()
                    if(camposInvalidos)
                        {
                            alert(`Exitem ${camposInvalidos} campos vazios`)
                        }
                }
        })

        $('.lista-flores button').click(function()
        {
            const destino = $('#faleConosco')
            const nomeFlor = ($(this).parent().find('h3').text())

            $('#flores').val(nomeFlor)

            $('html').animate(
                {
                    scrollTop: destino.offset().top
                }, 1000)    
        })
})