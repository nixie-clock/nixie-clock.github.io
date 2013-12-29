$(function() {
    var clock = {
        el: {
            h1: $('#nc_h_1'),
            h2: $('#nc_h_2'),
            m1: $('#nc_m_1'),
            m2: $('#nc_m_2'),
            s1: $('#nc_s_1'),
            s2: $('#nc_s_2')
        },
        classes: ['s0', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9']
    }
    setInterval(function(){
        var today = {
            date: new Date()
        }
        today.hours = today.date.getHours();
        today.minutes = today.date.getMinutes();
        today.seconds = today.date.getSeconds();
        var allClasses = clock.classes.join(' ');

        var h1Class = 's0';
        if(String(today.hours).length > 1){
            h1Class = clock.classes[String(today.hours)[0]];
        }
        var h2Class = clock.classes[today.hours%10];

        var m1Class = 's0';
        if(String(today.minutes).length > 1){
            m1Class = clock.classes[String(today.minutes)[0]];
        }
        var m2Class = clock.classes[today.minutes%10];

        var s1Class = 's0';
        if(String(today.seconds).length > 1){
            s1Class = clock.classes[String(today.seconds)[0]];
        }
        var s2Class = clock.classes[today.seconds%10];

        clock.el.h1.removeClass(allClasses).addClass(h1Class);
        clock.el.h2.removeClass(allClasses).addClass(h2Class);
        clock.el.m1.removeClass(allClasses).addClass(m1Class);
        clock.el.m2.removeClass(allClasses).addClass(m2Class);
        clock.el.s1.removeClass(allClasses).addClass(s1Class);
        clock.el.s2.removeClass(allClasses).addClass(s2Class);
    }, 1000);
});