const assert = require('assert'); 
const { suma } = require('../index'); 

try { 
    assert.strictEqual(suma(2, 3), 5); 
    assert.strictEqual(suma(-1, 1), 0); 
    assert.strictEqual(suma(0, 0), 0); 
    console.log("Todas las pruebas pasaron correctamente."); 
    process.exit(0);  
} catch (error) { 
    console.error("Una prueba falló:", error.message);
    process.exit(1);  
} 
