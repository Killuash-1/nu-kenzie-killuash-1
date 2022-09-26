import "./style.css"

export default function TotalMoney({ setMoney }) {
  
    return (
        <div className="total__container fadeInUp">

            <div>
                <h3>Valor total:</h3>
                <span className="valor_total">R$ {setMoney}</span>
            </div>

            <span className="span_text"> O valor se refere ao saldo</span>
        </div>

    )

}