import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(e.target.getAttribute('name'), value);
  };

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField value={values.nome} onChange={handleChange} name="nome" label="Nome" type="text" />
        <FormField value={values.descricao} onChange={handleChange} name="descricao" label="Descrição" type="textarea" />
        <FormField value={values.cor} onChange={handleChange} name="cor" label="Cor" type="color" />
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria.nome}${index}`}>
            {categoria.nome}
            <br />
            {categoria.descricao}
            <br />
            {categoria.cor}
            <br />
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
