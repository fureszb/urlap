class Urlap {
    #objektum = {
        tevekenyseg: "",
        hatarido: "",
        kesz: false,
    }
    constructor(objektum, szuloELem) {
        this.#objektum = objektum;
        this.szuloELem = szuloELem.append(`<form>
        <div class="form-group">
          <label for="tev">Tevékenység:</label>
          <input type="text" class="form-control" id="tev">
        </div>
        <div class="form-group">
        <label for="hat">Határidő:</label>
        <input type="date" id="hat" name="hat">
        </div>
        <button type="button" class="btn btn-success mentes">Mentés</button>
      </form>`);
        this.tevElem = $("#tev");
        this.hatElem = $("#hat");
        this.gomb = $('.mentes');
        this.gomb.on("click", ()=>{
            this.#objektum.tevekenyseg = this.tevElem.val();
            this.#objektum.hatarido = this.hatElem.val();
            this.#triggerEsemeny();
        })
    }
    #triggerEsemeny(){
        const esemeny = new CustomEvent("esemenyem", {detail:this.#objektum});
        window.dispatchEvent(esemeny);
    }
}
export default Urlap;