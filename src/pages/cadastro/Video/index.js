import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

const CadastroVideo = () => {
  const history = useHistory();

  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };

  const { handleChange, values } = useForm(valoresIniciais);

  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const titulosCategoria = categorias.map((categoria) => categoria.titulo);

  useEffect(() => {
    videosRepository.getAll().then((allVideos) => {
      setVideos([
        ...allVideos,
      ]);
    });

    categoriasRepository.getAll().then((allCategorias) => {
      setCategorias([
        ...allCategorias,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          setVideos([
            ...videos,
            values,
          ]);

          history.push('/');
        });
      }}
      >
        <FormField value={values.titulo} onChange={handleChange} name="titulo" label="Titulo" type="text" />
        <FormField value={values.url} onChange={handleChange} name="url" label="URL" type="text" />
        <FormField value={values.categoria} onChange={handleChange} name="categoria" label="Categoria" type="text" suggestions={titulosCategoria} />
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {videos.map((video) => (
          <li key={video.id}>{video.titulo}</li>
        ))}
      </ul>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
};

export default CadastroVideo;
