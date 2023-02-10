const AuthorsControllers = require("../controllers/authors.controllers")

module.exports = app => {
    // Nuevo Producto
    app.post("/api/new", AuthorsControllers.createAuthors);

    //Mostrar Todos los Productos
    app.get("/api/all", AuthorsControllers.allAuthors);

    //Mostrar solo un Producto
    app.get("/api/view/:id", AuthorsControllers.oneAuthors);

    //Modificar un producto
    app.put("/api/edit/:id", AuthorsControllers.updateAuthors);

    //Eliminar un Producto
    app.delete("/api/delete/:id", AuthorsControllers.deleteAuthors);
}