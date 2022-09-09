/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { Header } from "components/Header";

import logoImg from "assets/img/logo.svg";

import banner from "assets/img/banner_1.png";
import bannerMobile from "assets/img/banner-mobile_1.png";

import bannerMobile2 from "assets/img/banner-mobile_2.png";
import video1Img from "assets/img/video_1.png";
import miniature1 from "assets/img/miniatura_1.png";
import banner2 from "assets/img/banner_2.png";

import { VideoSection } from "components/VideoSection";
import { ProductsSection } from "components/ProductsSection";
import { SideMenu } from "components/SideMenu";

import { breakpointWidth } from "constants/index";

import { changeWidth } from "redux/slices/auxSlice";
import { useAppDispatch } from "redux/hooks";

import { FeatureVideo } from "components/VideoSection/FeaturedVideo";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const [isSideMenuVisible, setIsSideMenuVisible] = useState<boolean>(false);

  const windowSize = 0;

  const updateWindowSize = () => {
    window.addEventListener("resize", () => {
      dispatch(changeWidth(window.innerWidth));
      console.log(window.innerWidth);
    });
  };

  const [width, setWidth] = useState<number>(windowSize);

  const handleClickOpenCloseSideMenu = () => {
    setIsSideMenuVisible(!isSideMenuVisible);
  };

  const handleClassNameSideMenuActive = () => {
    if (isSideMenuVisible) {
      return "side-menu--ativo";
    }
    return "";
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(changeWidth(window.innerWidth));
    });
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Alura Barbershop</title>
      </Head>

      <Header />

      <SideMenu />

      <main className="principal">
        <h2 className="titulo-pagina"> Início</h2>

        <FeatureVideo />

        <article className="cartao cartao--recentes videos-recentes">
          <h3 className="cartao__titulo"> Vídeos recentes</h3>
          <a href="#" className="cartao__link">
            Ver todos
          </a>
          <ul className="cartao__lista">
            <li className="cartao__item">
              <figure>
                <Image
                  className="cartao__item-thumbnail"
                  src={miniature1}
                  alt="Thumbnail"
                  layout="responsive"
                />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile">Thiago Rosa</p>
            </li>
            <li className="cartao__item">
              <figure className="cartao__item-thumbnail">
                <Image src={miniature1} alt="Thumbnail" />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile">Thiago Rosa</p>
            </li>
            <li className="cartao__item">
              <figure className="cartao__item-thumbnail">
                <Image src={miniature1} alt="Thumbnail" />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile">Thiago Rosa</p>
            </li>
            <li className="cartao__item">
              <figure className="cartao__item-thumbnail">
                <Image src={miniature1} alt="Thumbnail" />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile">Thiago Rosa</p>
            </li>
            <li className="cartao__item">
              <figure className="cartao__item-thumbnail">
                <Image src={miniature1} alt="Thumbnail" />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile">Thiago Rosa</p>
            </li>
          </ul>
        </article>

        <VideoSection />

        <article className="cartao cartao--recentes produtos-recentes">
          <h3 className="cartao__titulo"> Vídeos recentes</h3>
          <a href="#" className="cartao__link">
            Ver todos
          </a>
          <ul className="cartao__lista">
            <li className="cartao__item">
              <figure className="cartao__item-thumbnail">
                <Image src={miniature1} alt="Thumbnail" />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile"> Bruno Lopez</p>
            </li>
            <li className="cartao__item">
              <figure className="cartao__item-thumbnail">
                <Image src={miniature1} alt="Thumbnail" />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile"> Bruno Lopez</p>
            </li>
            <li className="cartao__item">
              <figure className="cartao__item-thumbnail">
                <Image src={miniature1} alt="Thumbnail" />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile"> Bruno Lopez</p>
            </li>
            <li className="cartao__item">
              <figure className="cartao__item-thumbnail">
                <Image src={miniature1} alt="Thumbnail" />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile"> Bruno Lopez</p>
            </li>
            <li className="cartao__item">
              <figure className="cartao__item-thumbnail">
                <Image src={miniature1} alt="Thumbnail" />
              </figure>
              <h4 className="cartao__item-titulo"> HZC - Love machine</h4>
              <p className="cartao__item-profile">Thiago Rosa</p>
            </li>
          </ul>
        </article>

        <article className="cartao cartao--destaque destaque-produtos">
          <Image
            src={bannerMobile2}
            alt="Banner do cartao"
            className="cartao__imagem cartao__imagem--mobile"
            layout="responsive"
          />
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

        <ProductsSection />
      </main>
    </div>
  );
};

export default Home;
