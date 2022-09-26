import './style.css';


export default function Form({ handleSubmit, formData, setFormData }) {

 
  return (
    <div className='form_container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Description">Descricao</label>
        <section className='form_section'>
          <input
            type="text"
            placeholder='Digite sua descrição'
            value={formData.description}
            required
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <span className='span_text' >Ex: Restaurante</span>
        </section>

        <section className='form_value_section'>
          <div className='form_container_input'>
            <label htmlFor="Value">Valor</label>
            <input
              type="number"
              placeholder='Insira um valor'
              value={formData.value}
              required
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
            />
          </div>
          <div className='form_container_select'>
            <label htmlFor="type">Tipo de valor</label>
            <select
             
              value={formData.type}
              onChange={(e,) => setFormData({...formData, type: e.target.value})}
              >
             <option value="Selecione">Selecione</option>
              <option  value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </section>

        <button className='button_form'>Inserir Valor</button>
      </form>
    </div>
  )
}

Form