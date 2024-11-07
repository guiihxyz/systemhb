$(document).ready(function() {
    $('#user').on('input', function() {
        let username = $(this).val()
        $('#user_avatar').attr('src', 'http://www.habbo.com.br/habbo-imaging/avatarimage?&user=' + username + '&action=std&direction=2&head_direction=3&img_format=png&gesture=std&frame=1&headonly=0&size=l')
        $('#username').text(username)
    })
    
    $('.accordion-content').css('max-height', '0')

    $('.accordion-toggle').on('click', function() {
        const accordionItem = $(this).closest('.accordion')
        const content = accordionItem.find('.accordion-content')

        $('.accordion').not(accordionItem).removeClass('active').find('.accordion-content').css('max-height', '0')
        $('.accordion').not(accordionItem).find('svg').removeClass('rotate-180')

        accordionItem.toggleClass('active')

        if (accordionItem.hasClass('active')) {
            content.css('max-height', content.prop('scrollHeight') + 'px')
        } else {
            content.css('max-height', '0')
        }

        accordionItem.find('svg').toggleClass('rotate-180')
    })
})