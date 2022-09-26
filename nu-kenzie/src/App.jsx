import { useEffect, useState } from 'react'
import "./styles/global.css"
import './App.css'
import Form from './components/Form'
import List from './components/List'
import TotalMoney from './components/TotalMoney'
import { nanoid } from 'nanoid'
import Filters from './components/Filters'
import Header from './components/Header'
import Login from './components/Login'


function App() {
  const [login, setLogin] = useState(false)

  const [formData, setFormData] = useState({  description: "", type: "entrada", value: "" })

  const [listTransactions, setListTransactions] = useState([])

  const [transactionsFilter, setTransactionsFilter] = useState([])

  const [totalMoney, setTotalMoney] = useState('')

  const [filterButton, setFilterButton] = useState("todos")

  const makeId = () => {
      

  } 

  const handleSubmit = (e) => {
    e.preventDefault()

   
    if(formData.type == "Selecione"){
      alert("Insira um tipo de valor")
    } else {
      const actualTransation = { id: nanoid(), description: formData.description, type: formData.type, value: formData.value }

      setListTransactions([...listTransactions, actualTransation])

    }

  }

  useEffect(() =>{
   const totalMoney = listTransactions.reduce((acc ,{type, value}) => {
     return (type == "Entrada" ? acc + Number(value) : acc - Number(value))
      },0
    )
    setTotalMoney(totalMoney)
    

  },[listTransactions])



  const removeCard = (card) => {
    const cardDelete = listTransactions.filter(({id}) => id !== card.id)

    setListTransactions(cardDelete)

    if (transactionsFilter.length > 0) {
      const cardFilter = transactionsFilter.filter(({id}) => id !== card.id)

      setTransactionsFilter(cardFilter)
    }

  }

  const handleFilter = (filter) => {
    const actualFilter = listTransactions.filter((transaction) => transaction.type === filter);

    setTransactionsFilter(actualFilter);
    setFilterButton(filter);

  }


  const filterAll = () => {

    setTransactionsFilter([])
    setFilterButton("todos")

  }

  return (
    <div>
      {login ? (
        <div>
          <Header setLogin={setLogin} />

          <main>

            <aside>

              <Form
                handleSubmit={handleSubmit}
                setFormData={setFormData}
                formData={formData}
              />
              <TotalMoney setMoney={totalMoney} />

            </aside>

            <section className='Section'>

              <Filters
                handleFilter={handleFilter}
                filterAll={filterAll}
                filterButton={filterButton}
              />

              <List
                listTransactions={listTransactions}
                removeCard={removeCard}
                transactionsFilter={transactionsFilter}
                filterButton={filterButton}
              />

            </section>
          </main>
        </div>
      ) : (
        <Login setLogin={setLogin} />
      )
      }

    </div>
  )
}

export default App
