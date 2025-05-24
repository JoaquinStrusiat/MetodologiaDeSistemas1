import MyGoogleMap from "../../../components/MyGoogleMap";

const context = {
    style: {
        width: '100%',
        height: '40vh',
        borderRadius: '20px',
    },
    center: {
        lat: -27.4509404,
        lng: -58.9793472
    },
    zoom: 18
};

function Location() {
    return (
        <div className="py-4" id="location" style={{ background: 'rgba(87, 184, 42, 0.2)' }}>
            <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <div className="row text-center mb-4">
                    <h2 style={{ fontFamily: 'Lato, sans-serif', fontSize: '3.25rem', fontWeight: "1000" }}
                        className="text-success">
                        Nuestra Ubicación
                    </h2>
                    <p className="fs-5 fw-bolder">
                        Fundado en 2010,
                        Spa Sentirse Bien nació con la visión de crear un espacio donde nuestros clientes puedan
                        reconectar con la naturaleza y encontrar un equilibrio perfecto entre cuerpo y mente.
                    </p>
                </div>
                <div className="row mt-lg-4 col-12 col-lg-10">
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start justify-content-between text-center text-lg-start">
                        <div className="mb-4 mb-lg-0">
                            <p className="fs-4 fw-bolder text-success mb-0"><i className="bi bi-tree-fill"></i> Dirección</p>
                            <p className="fw-medium mb-0">C. French 414, H3506 Resistencia, Chaco, Argentinas</p>
                            <p className="fw-medium mb-0">Código Postal: 3500</p>
                        </div>
                        <div className="mb-4 mb-lg-0">
                            <p className="fs-4 fw-bolder text-success mb-0"><i className="bi bi-heart-fill"></i> Hora de atención</p>
                            <p className="fw-medium mb-0">Lunes a Viernes: 9:00 hs - 20:00 hs</p>
                            <p className="fw-medium mb-0">Sávados: 9:00 hs - 12:00 hs</p>
                        </div>
                        <div className="mb-4 mb-lg-0">
                            <p className="fs-4 fw-bolder text-success mb-0"><i className="bi bi-droplet-half"></i> Cómo Llegar</p>
                            <p className="fw-medium mb-0">Frente a la plaza Belgrano de Resistencia</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                        <MyGoogleMap context={context} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Location;