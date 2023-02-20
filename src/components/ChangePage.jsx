import "../Css/ChangePage.css"

const ChangePage = ({ page, prevPage, nextPage }) => {

  return (
    <div className="button-container">
      {page > 1 ? (<button className="button-page" onClick={() => prevPage()}>{`Page ${page - 1}`}</button>) : <button className="button-none"></button>}

      <p>{`Page: ${page}`}</p>

      {page < 42 ? (<button className="button-page" onClick={() => nextPage()}>{`Page ${page + 1}`}</button>) : <button className="button-none"></button>}

    </div>
  )
}

export { ChangePage }
