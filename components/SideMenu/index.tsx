import Image from "next/image";
import Link from "next/link";

import logoImg from "assets/img/logo.svg";

export const SideMenu = () => {
  return (
    <nav className="side-menu">
      <figure className="side-menu__logo">
        <Image src={logoImg as string} alt="Logotipo da HZC" />
      </figure>

      <Link href="/">
        <a className="side-menu__link side-menu__link--inicio side-menu__link--ativo">
          Início
        </a>
      </Link>

      <Link href="/">
        <a className="side-menu__link side-menu__link--videos">Vídeos</a>
      </Link>

      <Link href="/">
        <a className="side-menu__link side-menu__link--picos">Picos</a>
      </Link>

      <Link href="/">
        <a className="side-menu__link side-menu__link--integrantes">
          Integrantes
        </a>
      </Link>

      <Link href="/">
        <a className="side-menu__link side-menu__link--camisas">Camisas</a>
      </Link>

      <Link href="/">
        <a className="side-menu__link side-menu__link--pinturas">Pinturas</a>
      </Link>
    </nav>
  );
};
