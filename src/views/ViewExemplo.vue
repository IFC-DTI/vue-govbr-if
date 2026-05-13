<template>
  <main>
    <div class="text-center">
      <h1 class="text-primary-default text-weight-semi-bold">Olá, usuario!</h1>
      <h4 class="text-weight-regular">
        Aqui você encontrará alguns serviços disponíveis. Como criação de e-mail para estudantes e
        algumas novidades que virão em breve. Para conhecê-los, utilize o ícone
        <br-icon icon-name="fa7-solid:bars" height="25" width="25" /> na lateral esquerda.
      </h4>
    </div>
    <div>
      <h4 class="text-primary-default text-center my-5">Serviços para você</h4>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <AppSectionItemsServicos
          densidade="large"
          :items="itemsVidaAcademica"
          :nome-sessao="'Vida Acadêmica'"
        />
        <AppSectionItemsServicos
          densidade="large"
          :items="itemsServidores"
          :nome-sessao="'Servidores'"
        />
        <AppSectionItemsServicos
          densidade="large"
          :items="itemsMaisServicos"
          :nome-sessao="'Mais Serviços'"
        />
        <AppSectionItemsServicos
          densidade="large"
          :items="itemsExperimental"
          :nome-sessao="'Mais Serviços'"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppSectionItemsServicos from '@/components/AppSectionItemsServicos.vue'

const itemsVidaAcademica = [
  {
    id: 'portal-candidato',
    iconName: 'fa6-solid:school',
    link: 'https://candidato.ifc.edu.br/',
    title: 'Portal do Candidato',
    description: 'Seletivos e Matrícula',
  },
  {
    id: 'sigaa',
    iconName: 'fa6-solid:user-graduate',
    link: 'https://sig.ifc.edu.br/sigaa',
    title: 'SIGAA',
    description: 'Notas, disciplinas e rematrículas',
  },
  {
    id: 'ead',
    iconName: 'fa6-solid:display',
    link: 'https://ead.ifc.edu.br',
    title: 'EAD',
    description: 'Disciplinas on-line',
  },
]

const itemsServidores = [
  {
    id: 'manual-servidor',
    iconName: 'fa6-solid:book',
    link: 'https://manualdoservidor.ifc.edu.br/',
    title: 'Manual do Servidor',
    description: 'Manuais e rotinas da DGP',
  },
  {
    id: 'cronus',
    iconName: 'fa6-solid:clock',
    link: 'http://cronus.sig.ifc.edu.br/',
    title: 'Cronus',
    description: 'Ponto',
  },
  {
    id: 'polare',
    iconName: 'fa6-solid:file-contract',
    link: 'https://polare.sig.ifc.edu.br/polare/login',
    title: 'Polare',
    description: 'PGD',
  },
  {
    id: 'planus',
    iconName: 'fa6-solid:calendar-check',
    link: 'https://planus.sou.ifc.edu.br/',
    title: 'Planus',
    description: 'PTD e RTD',
  },
  {
    id: 'raiz',
    iconName: 'fa6-solid:database',
    link: 'https://raiz.sou.ifc.edu.br/',
    title: 'Raiz',
    description: 'Gestão de dados acadêmicos',
  },
  {
    id: 'sig',
    iconName: 'fa6-solid:envelope',
    link: 'https://sig.ifc.edu.br',
    title: 'SIG',
    description: 'Protocolo e acadêmico',
  },
]

const itemsMaisServicos = [
  {
    id: 'eduplay',
    iconName: 'fa6-solid:video',
    link: 'https://eduplay.rnp.br/app/home?contentType=all',
    title: 'Eduplay',
    description: 'Videoaulas e cursos',
  },
  {
    id: 'conferencia-web',
    iconName: 'fa6-solid:tv',
    link: 'https://conferenciaweb.rnp.br/',
    title: 'Conferência Web',
    description: 'Video conferência',
  },
  {
    id: 'manuais',
    iconName: 'fa6-solid:book',
    link: 'https://manuais.dti.ifc.edu.br/doku.php?id=wiki:suporte_tecnico:manuais_usuario',
    title: 'Manuais',
    description: 'Manuais de serviços digitais',
  },
]

const itemsExperimental = [
  {
    id: 'IARA',
    iconName: 'fa6-solid:message',
    link: 'https://m365.cloud.microsoft/chat/?titleId=T_a29c352c-d04f-87ce-d535-a0f851e3da31',
    title: 'IARA',
    description: 'IA da PROPESSOAS',
  },
  {
    id: 'TIA',
    iconName: 'fa6-solid:message',
    link: 'https://m365.cloud.microsoft/chat/?titleId=T_ebbbf522-468f-2dbe-02c5-df6fdce087ac',
    title: 'TIA',
    description: 'IA da TI',
  },
  {
    id: 'RAFAI',
    iconName: 'fa6-solid:message',
    link: 'https://m365.cloud.microsoft/chat/?titleId=T_697e2452-fb69-2316-72c6-b196e464e7fa',
    title: 'RAFAI',
    description: 'IA da PROAD',
  },
]
</script>
