import Card from "../Card"
import NoCard from "/src/assets/img/NoCard.svg"
import "./style.css"

export default function List({ listTransactions, removeCard, transactionsFilter, filterButton }) {
    const cardRender = filterButton !== "todos" ? transactionsFilter : listTransactions
    return (
        <>
        <ul className="list_container" >
            {cardRender.length
                ? (

                    cardRender.map((element) => {
                        console.log(element.id);
                        return (
                            <>
                                <Card
                                    key={element.id}
                                    transaction={element}
                                    removeTransaction={removeCard}
                                />
                            </>
                        )
                    }))
                : (
                    <>
                        <h2>Você ainda nao possui nenhum lançamento </h2>

                        <img src={NoCard} className="noCard " />
                        <img src={NoCard} className="noCard " />
                        <img src={NoCard} className="noCard " />
                    </>
                )}


        </ul>
        </>
    )


};