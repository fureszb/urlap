import { TODOLIST2 } from "./adat.js";
import Megjelenit from "./Megjelenit.js";
import Urlap from "./urlap.js";
$(function(){
    let form = $(".urlap");
    const obj = {
        tevekenyseg: "",
        hatarido: "",
        kesz: ""
      };
    let szuloELem = $('.tarolo');
    new Megjelenit(TODOLIST2, szuloELem);
    new Urlap(obj, form);
    $(window).on("esemenyem", (event) => {
        
        TODOLIST2.push(event.detail);
        
        szuloELem.empty();
        new Megjelenit(TODOLIST2, szuloELem);
        //console.log(event.detail)
        //new MegjelenitSor(event.detail, elem);
      });
})