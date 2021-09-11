let PALETTE = [
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'brown',
    'gray',
    'black'
]
/*Grid*/

function makeGrid() {

    

for (let index = 0; index < 64; index = index + 1) {
 $('.grid').append($("<div class ='cell'> </div>"))
}
}

makeGrid()

function onGridClick(){
    let currentColor = $('.palette .active').css('background-color')
    
    if ($(this).css('background-color') === currentColor) {
        $(this).css('background-color', "")
    } else {
        $(this).css('background-color', currentColor)
    }
}
$('.grid .cell').click(onGridClick)

/* Palette */


function makePalette() {
    

   
    for (let i = 0; i < PALETTE.length ; i++) {
        const nextColor = PALETTE[i]
        $('<button>').html('<button></button>')
        $('<button>').css('background-color', nextColor)
        $('.palette').append($('<button>').css('background-color', nextColor))
    }
    
    $('.palette button').first().addClass('active');
    
    }
    makePalette();
    
    function onPaletteClick() {
        
        $('.active').removeClass()
        $(this).addClass('active')
        
    }
    
    $('.palette button').click(onPaletteClick)


/*Controls*/

function onClearClick () {

    $('.grid .cell').css('background-color', "")

}

$('.controls .clear').click(onClearClick)

function onFillAllClick () {

   let currColor = $('.palette .active').css('background-color')
   $('.grid .cell').css('background-color', currColor )

}

$('.controls .fill-all').click(onFillAllClick)

function onFillEmptyClick () {
    let color = $('.palette .active').css('background-color')
    const elements = $('.grid .cell')
for (let index = 0; index < elements.length; index = index + 1) {
      let nextElement = $( elements[index] );
   console.log('before')
      if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
       $(elements[index]).css('background-color', color)
      }
    }
}


$('.controls .fill-empty').click(onFillEmptyClick)

/* New Color */

function newColor () {
    let value = $('.color-input input').val()
    let exist = false
    
    for (let i = 0; i < PALETTE.length ; i++) {
        
            if (PALETTE[i] === value) {
                exist = true
        }
    }
    if (!exist) {
        $('.palette').empty()
        PALETTE.unshift(value)
        makePalette();
        function newColorClick() {
        
            $('.active').removeClass()
            $(this).addClass('active')
            
        }
        
        $('.palette button').click(newColorClick)
    }
    
('.palette button').click(onPaletteClick)
}

$('.color-input button').click(newColor)
