import Image from "next/image";

import video1Img from "assets/img/video_1.png";

export const ProductsSection = () => {
  return (
    <section className="secao secao-produtos">
      <h3 className="titulo-secao"> Vídeos mais vistos</h3>
      <article className="cartao">
        <Image
          src={video1Img}
          alt="Vídeo"
          className="cartao__imagem"
          layout="responsive"
        />
        <div className="cartao__conteudo">
          <p className="cartao__profile">Thiago Rosa</p>
          <h3 className="cartao__titulo"> HZC - Título</h3>
          <p className="cartao__info cartao__info--tempo"> 33 minutos</p>
          <button
            type="button"
            className="cartao__botao cartao__botao--play"
            aria-label="Assistir agora"
          />
        </div>
      </article>
      <article className="cartao">
        <Image
          src={video1Img}
          alt="Vídeo"
          className="cartao__imagem"
          layout="responsive"
        />
        <div className="cartao__conteudo">
          <p className="cartao__profile">Thiago Rosa</p>
          <h3 className="cartao__titulo"> HZC - Título</h3>
          <p className="cartao__info cartao__info--tempo"> 33 minutos</p>
          <button
            type="button"
            className="cartao__botao cartao__botao--play"
            aria-label="Assistir agora"
          />
        </div>
      </article>
      <article className="cartao">
        <Image
          src={video1Img}
          alt="Vídeo"
          className="cartao__imagem"
          layout="responsive"
        />
        <div className="cartao__conteudo">
          <p className="cartao__profile">Thiago Rosa</p>
          <h3 className="cartao__titulo"> HZC - Título</h3>
          <p className="cartao__info cartao__info--tempo"> 33 minutos</p>
          <button
            type="button"
            className="cartao__botao cartao__botao--play"
            aria-label="Assistir agora"
          />
        </div>
      </article>
      <article className="cartao">
        <Image
          src={video1Img}
          alt="Vídeo"
          className="cartao__imagem"
          layout="responsive"
        />
        <div className="cartao__conteudo">
          <p className="cartao__profile">Thiago Rosa</p>
          <h3 className="cartao__titulo"> HZC - Título</h3>
          <p className="cartao__info cartao__info--tempo"> 33 minutos</p>
          <button
            type="button"
            className="cartao__botao cartao__botao--play"
            aria-label="Assistir agora"
          />
        </div>
      </article>
    </section>
  );
};
