<template>
  <br-footer>
    <br-footer-logo
      slot="logo"
      src="/assets/images/Logo_IFC_horizontal.png"
      description="Logo do Site"
    ></br-footer-logo>
    <!-- TODO: Substituir conteúdo placeholder do footer com dados reais -->
    <br-footer-category label="Sobre">
      <br-footer-item>Quem somos</br-footer-item>
      <br-footer-item>Contato e informações de suporte</br-footer-item>
    </br-footer-category>
    <br-footer-category label="Recursos">
      <br-footer-item>Documentação</br-footer-item>
      <br-footer-item>Políticas e Termos de Uso</br-footer-item>
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
