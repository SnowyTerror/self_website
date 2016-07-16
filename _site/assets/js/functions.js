$(document).ready(function() {
    
    // Mobile navigation toggle
    $('.menu').click(function(m) {
        m.stopPropagation();
        $('#main-nav').toggleClass('active');
    });
    
    // Hide To Top
    $(function () {
        var $win = $(window);
        
        $win.scroll(function () {
            if ($win.scrollTop() < 399)
              $('#to-top').addClass('hidden')
            else if ($win.height() + $win.scrollTop()
            >= 400) {
              $('#to-top').removeClass('hidden')
            }
        });
    });
    
    // Scroll animate
    $(function() {
       $('a[href^="#"]').on('click', function(event) {
           var target = $($(this).attr('href'));
           
           if (target.length) {
               event.preventDefault();
               
               $('#main-nav').removeClass('active');
               
               $('html, body').animate( {
                  scrollTop: target.offset().top 
               }, 400);
           }
       });
    });
    
    // Contact form jumping labels
    $('form .input-group input').focusout(function() {
        var text_val = $(this).val();
        
        if(text_val == "") {
            $(this).removeClass('has-value');
        }else {
            $(this).addClass('has-value');
        }
    });
    
    // Client Belt
    $(function() {
        $('.docs').click(function() {
            $('.clients-belt').css('left', '-100%');
            $('.client-wrap').show(400);
        });
        
        $('.back-btn').click(function() {
            $('.clients-belt').css('left', '0%');
            $('.client-wrap').hide(800);
        });
    });
    
    //Client Info Load
    $(function() {
        $.ajaxSetup({ cache: true });
        
        $('.docs').click(function() {
            var $this = $(this),
                newTitle = $this.parent().find('h4').text(),
                newfolder = $this.data('folder');
                spinner = '<div class="loader">Loading...</div>',
                newHTML = 'clients/' + newfolder + '.html';
            
            $('.client-load').html(spinner).load(newHTML);
            $('strong').text(newTitle);
        });
    });
    
    // Contact Form Submit Success Alert
    function successAlert() {
        sweetAlert('Success!', 'I will respond to your email within 48 hours. thank you!');
    }
    
    var $contact_form = $('#contact-form');
    
    $contact_form.submit(function(e) {
        e.preventDefault();
        
        $.ajax({
            url: 'https://formspree.io/jordanhinks0@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(data) {
                successAlert();
            }
        });
    });
    
});