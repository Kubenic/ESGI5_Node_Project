const term = require('terminal-kit').terminal;

function doImport(){
    term('\n').green("Do Import ! ");

    terminate();
}

function terminate() {
    term('\n\n');
    term.red.bold("PROCESS CANCELED !");
    term.grabInput( false ) ;
    setTimeout( function() { process.exit() } , 100 ) ;
}

term.on( 'key' , function( name , matches , data ) {
    if ( name === 'CTRL_C' ) { terminate() ; }
} ) ;


term.blue("What should i do ?");
var items = ['import','dump','update','cancel'];

term.gridMenu( items , function( error , response ) {
    switch (response.selectedText) {
        case "import":
            doImport();
            break;
        default:
            term('\n').eraseLineAfter.blue("Goodbye");
            terminate();
            break;
    }
    /*
    term( '\n' ).eraseLineAfter.green(
        "#%s selected: %s (%s,%s)\n" ,
        response.selectedIndex ,
        response.selectedText ,
        response.x ,
        response.y
    ) ;
    process.exit() ;
    */
} ) ;