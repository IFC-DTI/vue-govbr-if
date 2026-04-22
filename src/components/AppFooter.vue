<template>
  <br-footer>
    <br-footer-logo
      slot="logo"
      src="assets/images/govbr.svg"
      description="Logo do Site"
    ></br-footer-logo>
    <br-footer-category label="Categoria">
      <br-footer-item>Texto pequeno</br-footer-item>
      <br-footer-item>Texto longo com quebra de linha</br-footer-item>
    </br-footer-category>
    <br-footer-category label="Categoria">
      <br-footer-item>Texto pequeno</br-footer-item>
      <br-footer-item>Texto longo com quebra de linha</br-footer-item>
    </br-footer-category>

    <br-footer-social
      slot="social-network"
      icon="facebook-f"
      description="Facebook"
    ></br-footer-social>
    <br-footer-social
      slot="social-network"
      icon="linkedin-in"
      description="Linkedin"
    ></br-footer-social>
    <br-footer-social
      slot="social-network"
      icon="whatsapp"
      description="Whatsapp"
    ></br-footer-social>

    <br-footer-legal slot="legal">
      <p>
        Texto destinado a exibição das informações relacionadas à
        <a><strong>licença de uso</strong></a>
      </p>
    </br-footer-legal>
  </br-footer>
</template>
