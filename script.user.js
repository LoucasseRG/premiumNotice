// ==UserScript==
// @name         NoticePremium
// @namespace    https://realitygaming.fr/
// @include      https://realitygaming.fr/
// @include      https://realitygaming.fr/chatbox
// @version      1
// @description  Un notice exclusive aux premiums, géré par la GTP !
// @author       Loucasse
// @match        https://realitygaming.fr/
// @grant        none
// ==/UserScript==

$(document).ready(function(){
    $.getScript('https://github.com/LoucasseRG/premiumNotice/blob/master/script.js');
});