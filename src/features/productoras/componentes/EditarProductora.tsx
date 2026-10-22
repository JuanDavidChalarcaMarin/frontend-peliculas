import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type ProductoraCreacion from "../modelos/ProductoraCreacion.model";
import FormularioProductora from "./FormularioProductora";
import Cargando from "../../../componentes/Cargando";
export default function EditarProductora() {
    const { id } = useParams();
    const [modelo, setModelo] = useState<ProductoraCreacion>();
    useEffect(() => {
        const temporizador = setTimeout(() => {
            setModelo({
                nombre: 'Productora ' + id,
                fechaFundacion: '1995-06-15',
                sitioWeb: 'https://www.ejemplo.com'
            });
        }, 1000);
        return () => clearTimeout(temporizador);
    }, [id]);
    const onSubmit = async (valores: ProductoraCreacion) => {
        console.log('editando productora...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(valores);
    }
    return (
        <>
            <h3>Editar Productora</h3>
            {modelo ? <FormularioProductora modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>
    )
}
