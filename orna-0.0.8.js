//alert("TEST OK!");
//------------------reverse-background-----------------------------
//reversebackground('id', 'url1', 'url2');
//id = #id, .class, tag;
var backgroundstatus = 0;

function reversebackground(id, url1, url2) {
        if (backgroundstatus == 0) {
            $(id).css("background-image", 'url("' + url1 + '")');
            backgroundstatus = 1;
            return;
        }
        if (backgroundstatus == 1) {
            $(id).css("background-image", 'url("' + url2 + '")');
            backgroundstatus = 0;
        }
    }
    //--------------------reverseclass---------------------------
    //reverseclass('id', 'classname1', 'classname2', listen);
    //listen = true or false
    //id = #id, .class, tag;
var classstatus = 0;

function reverseclass(id, classname1, classname2, listen) {
        if (listen) {
            if (classstatus == 0) {
                $(id).removeClass(classname1);
                $(id).addClass(classname2);
                classstatus = 1;
                createatom();
            } else if (classstatus == 1) {
                $(id).removeClass(classname2);
                $(id).addClass(classname1);
                classstatus = 0;
                createatom();
            }
        } else {
            $(id).removeClass(classname1);
            $(id).addClass(classname2);
            createatom();
        }
    }
    //--------------------------height-adaptive-------------------------------------
    //heightadaptive('id', screenwidth, heightmain, heightnew);
    //id = #id, .class, tag;
function heightadaptive(id, screenwidth, heightmain, heightnew) {
        setInterval(function() {
            if (screen.width < screenwidth || document.body.clientWidth < screenwidth) {
                $(id).css('height', heightnew + 'px');
            } else {
                $(id).css('height', heightmain + 'px');
            }
        }, 0);
    }
    //--------------------------width-adaptive-------------------------------------
    //widthadaptive('id', screenwidth, widthmain, widthnew);
function widthadaptive(id, screenwidth, widthmain, widthnew) {
        setInterval(function() {
            if (screen.width < screenwidth || document.body.clientWidth < screenwidth) {
                $(id).css('width', widthnew + 'px');
            } else {
                $(id).css('width', widthmain + 'px');
            }
        }, 0);
    }
    //alert("TEST OK!");
    //--------------------------timer-in-title--------------------------------------
    //titletimer();
function titletimer() {
        var hour = 0;
        var minute = 0;
        var second = 0;
        setInterval(function() {
            second++;
            if (second == 60) {
                minute++;
                second = 0;
            }
            if (minute == 60) {
                hour++;
                minute = 0;
            }
            document.title = hour + ":" + minute + ":" + second;
        }, 1000);
    }
    //--------------------------time-in-field-------------------------------------
    //time('id');
    //id = #id, .class, tag;
function time(id) {
        setInterval(function() {
            var now = new Date();
            var sec = now.getSeconds();
            var min = now.getMinutes();
            var hr = now.getHours();
            var field = $(id);
            if (field) {
                field.val(hr + ":" + min + ":" + sec);
            }
        }, 1000);
    }
    //-----------------------------progress-y----------------------------------------------
    //progressy('id', limit, step, speed);
    //id = #id, .class, tag;
var yon = false;

function progressy(id, limit, step, speed) {
        if (yon == false) {
            yon = true;

            function progress(id, limit, step, speed) {
                createatom();
                var risebar = $(id);
                var currentheight = risebar.height();
                var i = 0;
                var moveup = setInterval(function() {
                    if (risebar) {
                        i += step;
                        risebar.height(currentheight + i);
                        if (i >= limit) {
                            clearInterval(moveup);
                            var movedown = setInterval(function() {
                                i -= step;
                                risebar.height(currentheight + i);
                                if (currentheight + i <= currentheight) {
                                    clearInterval(movedown);
                                    progress(id, limit, step, speed);
                                }
                            }, speed);
                        }
                    }
                }, speed);
            }
            progress(id, limit, step, speed);
        }
    }
    //alert("TEST OK!");
    //-----------------------------progress-x----------------------------------------------
    //progressx('id', limit, step, speed);
    //id = #id, .class, tag;
var xon = false;

function progressx(id, limit, step, speed) {
        if (xon == false) {
            xon = true;

            function progress(id, limit, step, speed) {
                createatom();
                var risebar = $(id);
                var currentwidth = risebar.width();
                var i = 0;
                var moveup = setInterval(function() {
                    if (risebar) {
                        i += step;
                        risebar.width(currentwidth + i);
                        if (i >= limit) {
                            clearInterval(moveup);
                            var movedown = setInterval(function() {
                                i -= step;
                                risebar.width(currentwidth + i);
                                if (currentwidth + i <= currentwidth) {
                                    clearInterval(movedown);
                                    progress(id, limit, step, speed);
                                }
                            }, speed);
                        }
                    }
                }, speed);
            }
            progress(id, limit, step, speed);
        }
    }
    //-----------------------livetext------------------------
    //livetext(['Hello World.', 'Live Text', 'Made with Love.'],'livetext',['tomato','rebeccapurple','lightblue']);
function livetext(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function() {
            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function() {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function() {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
    }
    //-----------------------------create-atom----------------------------------------------
    //createatom();
$(document).ready(function() {
    createatom();
});

function createatom() {
        var tag = ['div', 'body', 'p', 'form', 'button', 'img', 'input', 'a', 'ul', 'ol', 'li', 'select', 'option', 'span', 'table', 'main', 'nav', 'menu', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'textarea', 'fieldset', 'header', 'footer', 'code'];
        for (var i = 0; i !== tag.length; i++) {
            var tagsize = $(tag[i]).size();
            toall(tag[i], tagsize);
        }
        //------------------------------------  
        function toall(tag, tagsize) {
                for (var i = 0; i !== tagsize; i++) {
                    var istag = $(tag).is(tag);
                    //alert(istag);
                    if (istag == true) {
                        var current = tag + ":eq(" + i + ")";
                        stylefilter(current);
                    }

                }
            }
            //---------------------------------    
        function stylefilter(current) {
                var attr = $(current).attr('class');
                var style;
                //alert(attr);
                if (attr !== undefined) {
                    style = attr.split(' ');
                    for (var i = 0; i !== style.length; i++) {
                        var part = style[i].split('_');
                        //alert(part);
                        var prop = part[0];
                        var val = part[1];
                        if (part[0] == "hideatom") {
                            break;
                        } else if (part[0] == "rotate") {
                            if (val !== undefined) {
                                part[1] = part[0] + '(' + part[1] + ')';
                                part[0] = 'transform'
                                addstyle(part, val);
                                //alert(part[0]+part[1]);
                            }}
                            else if (part[0] == "scale") {
                            if (val !== undefined) {
                                part[1] = part[0] + '(' + part[1] + ')';
                                part[0] = 'transform'
                                addstyle(part, val);
                                //alert(part[0]+part[1]);
                            }
                            } else if (part[0] == "skew") {
                            if (val !== undefined) {
                                part[1] = part[0] + '(' + part[1] + ')';
                                part[0] = 'transform'
                                addstyle(part, val);
                                //alert(part[0]+part[1]);
                            }

                        } else if (part[0] == "box-shadow") {
                            if (val !== undefined) {
                                part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5];
                                addstyle(part, val);
                                alert(part[1]);
                            }
                        } else if (part[0] == "text-shadow") {
                            if (val !== undefined) {
                                part[1] = part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5];
                                addstyle(part, val);
                                //alert(part[1]);
                            }
                        } else if (part[0] == "border") {
                            if (val !== undefined) {
                                part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                                addstyle(part, val);
                                //alert(part[1]);
                            }
                        } else if (part[0] == "outline") {
                            if (val !== undefined) {
                                part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                                addstyle(part, val);
                                //alert(part[1]);
                            }
                        } else if (part[0] == "bg") {
                            if (val !== undefined) {
                                part[0] = 'background';
                                addstyle(part, val);
                            }
                        }
                            else if (part[0] == "bgc") {
                            if (val !== undefined) {
                                part[0] = 'background-color';
                                addstyle(part, val);
                            }
                            
                        } else if (part[0] == "transition") {
                            if (val !== undefined) {

                                part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4];

                                addstyle(part, val);
                            }
                        }



                        function addstyle(part, val) {
                            if (val !== undefined) {
                                //alert('atom class');
                                $(current).css(part[0], part[1]);
                            } else {
                                //alert('other class');
                            }
                        }

                        addstyle(part, val);




                    }
                }
            }
            //---------------------------------    
    }
    //alert("TEST OK!");