/*
File Name: main.js

Description: This is the main javascript file for the application.
*/

//electron setup
const electron = require("electron");

//Browser Window for the application
const BrowserWindow = electron.remote.BrowserWindow;
//Path handling of the App.
const path = require("path");
const url = require("url");

const patchnotesbtn = document.getElementById("Patch Notes");
patchnotesbtn.addEventListener('click', function(event){
    let patchnotes;
    patchnotes = new BrowserWindow({
        width: 600,
        height: 420,
        icon: __dirname + './img/RetroDEXlogo.png',
        webPreferences: {
            plugins: true
        }
    });

    patchnotes.$ = patchnotes.jQuery = require('jquery');   

    patchnotes.loadURL(url.format({
        pathname: path.join(__dirname, './patch_notes.html'),
        protocol: 'file',
        slashes: true
    }));
    
    //garbage collection for closed windows
    patchnotes.on('closed', () => {
        patchnotes = null;
    })

})
