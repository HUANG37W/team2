export default class Superscript{
  getLocalStorage() {
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    
    
    
    while ( i-- ) {
    values.push(JSON.parse(localStorage.getItem(keys[i])) );
    }
    
    
    
    return values.length;
  }
    addSuperscript() {
        
        const number = this.getLocalStorage()
        document.styleSheets[0].addRule(".cart::before", `content: '${number}';`);

    }
    
}