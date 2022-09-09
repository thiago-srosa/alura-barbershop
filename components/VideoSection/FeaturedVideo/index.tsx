import Image from "next/image";

import banner from "assets/img/banner_1.png";
import bannerMobile from "assets/img/banner-mobile_1.png";

import style from "components/VideoSection/FeaturedVideo/style.module.css";

export const FeatureVideo = () => {
  return (
    <article className="cartao cartao--destaque destaque-video">
      <picture className={style["visible-mobile"]}>
        <Image
          src={bannerMobile}
          alt="Banner do cartao"
          className="cartao__imagem cartao__imagem--mobile"
          layout="responsive"
        />
      </picture>
      <picture
        className={`cartao__imagem cartao__imagem--mobile ${style["visible-desktop"]}`}
      >
        <Image src={banner} alt="Banner do cartao" layout="responsive" />
      </picture>

      <div className="cartao__conteudo">
        <p className="cartao__destaque"> Vídeo em destaque</p>
        <h3 className="cartao__titulo"> HZC - Título</h3>
        <p className="cartao__profile">Thiago Rosa</p>
        <p className="cartao__info cartao__info--tempo"> 33 minutos</p>
        <p className="cartao__info cartao__info--visualizacao">
          33 visualizações
        </p>
        <button
          type="button"
          className="cartao__botao cartao__botao--play cartao__botao--destaque"
        >
          Assistir agora
        </button>
      </div>
    </article>
  );
};
