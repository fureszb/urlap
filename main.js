import { TODOLIST2 } from "./adat.js";
import Megjelenit from "./Megjelenit.js";
$(function(){
    let szuloELem = $('.tarolo');
    new Megjelenit(TODOLIST2, szuloELem);
})