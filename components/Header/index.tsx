import Image from "next/image";

import logoImg from "assets/img/logo.svg";

export const Header = () => {
  return (
    <section id="header">
      <header className="header">
        <button type="button" className="header__menu" aria-label="Menu">
          <i />
        </button>
        <figure className="header__logo">
          <Image src={logoImg as string} alt="Logotipo da HZC" />
        </figure>
        <p className="header__profile">Thiago Rosa</p>
        <button
          type="button"
          className="header__notification"
          aria-label="Notification"
        >
          <i />
        </button>
      </header>
    </section>
  );
};
