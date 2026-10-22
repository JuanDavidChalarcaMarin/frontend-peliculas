import type ProductoraCreacion from "../modelos/ProductoraCreacion.model";
import FormularioProductora from "./FormularioProductora";
export default function CrearProductora() {
    const onSubmit = async (valores: ProductoraCreacion) => {
        console.log('creando productora...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(valores);
    }
    return (
        <>
            <h3>Crear Productora</h3>
            <FormularioProductora onSubmit={onSubmit} />
        </>
    )
}
