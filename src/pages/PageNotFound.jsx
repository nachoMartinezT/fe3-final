import image from '../assets/9d649f6f-34da-4c57-95bf-e96338961d2d.jpg';

const PageNotFound = () => {
  return (
    <div className='not-found'>
      <h1>Página no encontrada</h1>
      <h2>Esperamos no haberte causado</h2>
      <h2>un dolor de muelas</h2>
      <img src={image} alt="Imagen dolor de muela" />
      <h2>De haber sido así</h2>
      <h2>Te esperamos en nuesra clinica</h2>
    </div>
  )
}

export default PageNotFound