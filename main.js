var colors=["aliceblue",	"antiquewhite",	"aqua",	"aquamarine",	"azure",	"beige",	"bisque",	"black",	"blanchedalmond",	"blue",	"blueviolet",	"brown",	"burlywood",	"cadetblue",	"chartreuse",	"chocolate",	"coral",	"cornflowerblue",	"cornsilk",	"crimson",	"cyan",	"darkblue",	"darkcyan",	"darkgoldenrod",	"darkgray",	"darkgreen",	"darkkhaki",	"darkmagenta",	"darkolivegreen",	"darkorange",	"darkorchid",	"darkred",	"darksalmon",	"darkseagreen",	"darkslateblue",	"darkslategray",	"darkturquoise",	"darkviolet",	"deeppink",	"deepskyblue",	"dimgray",	"dodgerblue",	"firebrick",	"floralwhite",	"forestgreen",	"fuchsia",	"gainsboro",	"ghostwhite",	"gold",	"goldenrod",	"gray",	"green",	"greenyellow",	"honeydew",	"hotpink",	"indianred",	"indigo",	"ivory",	"khaki",	"lavender",	"lavenderblush",	"lawngreen",	"lemonchiffon",	"lightblue",	"lightcoral",	"lightcyan",	"lightgoldenrodyellow",	"lightgreen",	"lightgrey",	"lightpink",	"lightsalmon",	"lightseagreen",	"lightskyblue",	"lightslategray",	"lightsteelblue",	"lightyellow",	"lime",	"limegreen",	"linen",	"magenta",	"maroon",	"mediumaquamarine",	"mediumblue",	"mediumorchid",	"mediumpurple",	"mediumseagreen",	"mediumslateblue",	"mediumspringgreen",	"mediumturquoise",	"mediumvioletred",	"midnightblue",	"mintcream",	"mistyrose",	"moccasin",	"navajowhite",	"navy",	"oldlace",	"olive",	"olivedrab",	"orange",	"orangered",	"orchid",	"palegoldenrod",	"palegreen",	"paleturquoise",	"palevioletred",	"papayawhip",	"peachpuff",	"peru",	"pink",	"plum",	"powderblue",	"purple",	"red",	"rosybrown",	"royalblue",	"saddlebrown",	"salmon",	"sandybrown",	"seagreen",	"seashell",	"sienna",	"silver",	"skyblue",	"slateblue",	"slategray",	"snow",	"springgreen",	"steelblue",	"tan",	"teal",	"thistle",	"tomato",	"turquoise",	"violet",	"wheat",	"white",	"whitesmoke",	"yellow",	"yellowgreen"]

function changeColor(){
    color = prompt('color?').split(' ').join('')
    if (colors.indexOf(color) < 1) {
        alert(color+' is not a color!')
        changeColor()
    }
    else {
    $('body').css('background',color)
    $('.content').html('<h1>Color changed to '+color.toUpperCase()+'</h1>')
}}

function reset() {
    $('body').css('background','white')
    $('.content').html('<h1 style="color: green">Reset Complete!</h1>')
}


