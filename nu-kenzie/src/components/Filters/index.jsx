import "./style.css"

export default function Filters({ handleFilter, filterAll, filterButton }) {

    return (

        <div className="filters_container">
            <h3>Resumo financeiro</h3>
            <nav>
                <button
                    className="filter_button"
                    onClick={() => filterAll()}
                    disabled={filterButton == "todos"}
                >
                    Todos
                </button>

                <button
                    className="filter_button"
                    onClick={() => handleFilter("Entrada")}
                    disabled={filterButton == "Entrada"}
                >
                    Entrada
                </button>

                <button
                    className="filter_button"
                    onClick={() => handleFilter("Despesa")}
                    disabled={filterButton == "Despesa" }
                >
                    Despesas
                </button>
            </nav>
        </div>
    )
}