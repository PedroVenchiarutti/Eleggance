import './index.scss'
export default ({ message, shouldShowBottomMessage = true }) =>
    <div className='no-results-container'>
        <img src="/icons/iconmonstr-search-thin.svg" />
        <h2>{message ?? "Não encontramos resultados para a sua solicitação."}</h2>
        <p>{shouldShowBottomMessage ? "Navegue em nosso site para conhecer mais!" : ""}</p>
    </div>