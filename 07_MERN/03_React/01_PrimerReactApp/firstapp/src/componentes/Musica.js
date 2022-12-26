import './Musica.css';

const GruposMusicales = (props) => {
    const {nombre, estilo} = props;

    return (
        <div>
            <h2 className="nombreGrupo">
                {nombre} {estilo}
            </h2>
        </div>
    );
}

export default GruposMusicales;