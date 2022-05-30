function NavBar() {
    return (
        <>
            <div className="contenedor">
                <h1 style={{ border: "1px solid black", color: "blue" }}>Este es el Componente NavBar</h1>

            </div>

            <div className="navbar">
                <h2>Brand</h2>
                <div className="menu">
                    <a href="#">Home</a>
                    <a href="#">Producto</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Contacto</a>
                </div>
            </div>
        </>
    );
}

export default NavBar;