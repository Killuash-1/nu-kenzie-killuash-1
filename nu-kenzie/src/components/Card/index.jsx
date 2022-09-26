import "./style.css"
import { BiTrash } from 'react-icons/bi'


export default function Card({ transaction, removeTransaction }) {
   
        return (
            <li className={`box_in  ${transaction.type ==='Despesa' ? "box_out":"" }`} >
                <div>
                    <h3>{transaction.description}</h3>
                    <p>R$ {transaction.value}</p>
                    <button
                        className="trash_button"
                        onClick={() => removeTransaction(transaction)}
                    >
                        <BiTrash />
                    </button>
                </div>
                <span className="card_text">{transaction.type}</span>
            </li>
        )

}
