import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [conteudo, setConteudo] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setConteudo(categoriasComVideos);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      { conteudo.length === 0 && <div>Loading...</div> }

      {conteudo.map((categoria, index) => {
        if (index === 0) {
          return (
            <>
              <BannerMain
                videoTitle={conteudo[0].videos[0].titulo}
                url={conteudo[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área"
              />
              <Carousel
                ignoreFirstVideo
                category={conteudo[0]}
              />
            </>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
