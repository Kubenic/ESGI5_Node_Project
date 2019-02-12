const term = require('terminal-kit').terminal;
const mongoose = require('mongoose');
const dummy = require('mongoose-dummy');
//const db = require('./application/libs/db');
const API_BASE_URL = "https://www.dealabs.com/rest_api/v2/";
const API_DEAL_HOTTEST = API_BASE_URL+"thread/hottest";
const fs = require('fs');
function doGenerate(){
    term('\n').green("Generating Users!");
    //const userModel = require('./application/models/user');
    //console.log(userModel);

   /* mongoose.connect(`mongodb://mongo`, {
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASS,
        dbName: process.env.MONGODB_NAME,
        useNewUrlParser: true,
    });*/

   /* const db = mongoose.connection;

    db.on('error', function () {
        throw new Error('Connection failed');
        terminate();
    });

    db.on('open', function () {
        console.log('OKAYYY');
        terminate();
    });*/

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
var items = ['generate','dump','update','cancel'];

term.gridMenu( items , function( error , response ) {
    switch (response.selectedText) {
        case "generate":
            doGenerate();
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