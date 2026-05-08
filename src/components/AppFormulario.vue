<template>
  <div class="container-lg py-5 bg-secondary-03">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <!-- Header -->
        <div class="mb-4">
          <h1 class="h2 fw-bold mb-2">Formulário de Cadastro</h1>
          <p class="text-muted">
            Preencha os dados abaixo para completar seu cadastro. Todos os campos são obrigatórios.
          </p>
        </div>

        <!-- Mensagem de informação LGPD -->
        <br-message has-icon class="mb-4">
          <br-icon slot="icon" icon-name="fa-solid:lock"></br-icon>
          <p class="m-0">
            Seus dados serão protegidos conforme a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </br-message>

        <form @submit.prevent="enviarFormulario" novalidate>
          <!-- Grupo 1: Dados Pessoais -->
          <fieldset class="mb-5">
            <legend class="h5 fw-bold text-primary border-bottom pb-2 mb-3">Dados Pessoais</legend>

            <div class="mb-3">
              <br-input
                id="nome-input"
                v-model="formulario.nome"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                required
                @blur="validarCampo('nome')"
              ></br-input>
              <small v-if="erros.nome" class="text-danger d-block mt-1">{{ erros.nome }}</small>
            </div>

            <div class="mb-3">
              <br-input
                id="email-input"
                v-model="formulario.email"
                label="Email"
                type="email"
                placeholder="seu.email@example.com"
                required
                @blur="validarCampo('email')"
              ></br-input>
              <small v-if="erros.email" class="text-danger d-block mt-1">{{ erros.email }}</small>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <br-input
                    id="telefone-input"
                    v-model="formulario.telefone"
                    label="Telefone"
                    placeholder="(00) 99999-9999"
                    @blur="validarCampo('telefone')"
                  ></br-input>
                  <small v-if="erros.telefone" class="text-danger d-block mt-1">{{
                    erros.telefone
                  }}</small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <br-input
                    id="data-nascimento-input"
                    v-model="formulario.dataNascimento"
                    label="Data de nascimento"
                    type="date"
                    required
                    @blur="validarCampo('dataNascimento')"
                  ></br-input>
                  <small v-if="erros.dataNascimento" class="text-danger d-block mt-1">{{
                    erros.dataNascimento
                  }}</small>
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="genero-select" class="form-label">Gênero (opcional)</label>
              <br-select
                id="genero-select"
                v-model="formulario.genero"
                :options="opcoesGenero"
              ></br-select>
            </div>
          </fieldset>

          <!-- Grupo 2: Endereço -->
          <fieldset class="mb-5">
            <legend class="h5 fw-bold text-primary border-bottom pb-2 mb-3">Endereço</legend>

            <div class="mb-3">
              <br-input
                id="rua-input"
                v-model="formulario.rua"
                label="Rua"
                placeholder="Digite o nome da rua"
                required
                @blur="validarCampo('rua')"
              ></br-input>
              <small v-if="erros.rua" class="text-danger d-block mt-1">{{ erros.rua }}</small>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <br-input
                    id="numero-input"
                    v-model="formulario.numero"
                    label="Número"
                    placeholder="123"
                    required
                    @blur="validarCampo('numero')"
                  ></br-input>
                  <small v-if="erros.numero" class="text-danger d-block mt-1">{{
                    erros.numero
                  }}</small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <br-input
                    id="complemento-input"
                    v-model="formulario.complemento"
                    label="Complemento (opcional)"
                    placeholder="Apto 42"
                  ></br-input>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <br-input
                    id="cidade-input"
                    v-model="formulario.cidade"
                    label="Cidade"
                    placeholder="Digite o nome da cidade"
                    required
                    @blur="validarCampo('cidade')"
                  ></br-input>
                  <small v-if="erros.cidade" class="text-danger d-block mt-1">{{
                    erros.cidade
                  }}</small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <br-input
                    id="estado-input"
                    v-model="formulario.estado"
                    label="Estado (UF)"
                    placeholder="SP"
                    maxlength="2"
                    required
                    @blur="validarCampo('estado')"
                  ></br-input>
                  <small v-if="erros.estado" class="text-danger d-block mt-1">{{
                    erros.estado
                  }}</small>
                </div>
              </div>
            </div>
          </fieldset>

          <!-- Grupo 3: Informações Adicionais -->
          <fieldset class="mb-5">
            <legend class="h5 fw-bold text-primary border-bottom pb-2 mb-3">
              Informações Adicionais
            </legend>

            <div class="mb-3">
              <br-textarea
                id="descricao-input"
                v-model="formulario.descricao"
                label="Descreva brevemente seus interesses (opcional)"
                placeholder="Compartilhe seus interesses e preferências..."
                rows="4"
              ></br-textarea>
            </div>

            <div class="mb-3">
              <fieldset>
                <legend class="form-label">Tipo de perfil</legend>
                <div class="form-check">
                  <br-radio
                    id="radio-pessoa-fisica"
                    v-model="formulario.tipoPerfil"
                    name="tipoPerfil"
                    value="fisica"
                    label="Pessoa Física"
                    class="my-2"
                  ></br-radio>
                </div>
                <div class="form-check">
                  <br-radio
                    id="radio-pessoa-juridica"
                    v-model="formulario.tipoPerfil"
                    name="tipoPerfil"
                    value="juridica"
                    label="Pessoa Jurídica"
                  ></br-radio>
                </div>
              </fieldset>
            </div>

            <div class="mb-3">
              <br-checkbox
                id="checkbox-newsletter"
                v-model="formulario.newsletter"
                label="Desejo receber informações por email"
              ></br-checkbox>
            </div>

            <div class="mb-3">
              <br-checkbox
                id="checkbox-privacidade"
                v-model="formulario.privacidade"
                label="Concordo com os termos de privacidade e proteção de dados"
                required
              ></br-checkbox>
              <small v-if="erros.privacidade" class="text-danger d-block mt-1">{{
                erros.privacidade
              }}</small>
            </div>
          </fieldset>

          <!-- Mensagem de sucesso -->
          <br-message
            v-if="mostrarSucesso"
            type="success"
            has-icon
            dismissible
            @close="mostrarSucesso = false"
            class="mb-4"
          >
            <p class="m-0">Formulário enviado com sucesso!</p>
          </br-message>

          <!-- Botões -->
          <ContainerBotoes>
            <br-button type="button" emphasis="secondary" @click="limparFormulario">
              Cancelar
            </br-button>
            <br-button type="submit" emphasis="primary"> Enviar </br-button>
          </ContainerBotoes>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContainerBotoes from './ContainerBotoes.vue'

interface FormularioData {
  nome: string
  email: string
  telefone: string
  dataNascimento: string
  genero: string
  rua: string
  numero: string
  complemento: string
  cidade: string
  estado: string
  descricao: string
  tipoPerfil: string
  newsletter: boolean
  privacidade: boolean
}

interface Erros {
  [key: string]: string
}

const formulario = ref<FormularioData>({
  nome: '',
  email: '',
  telefone: '',
  dataNascimento: '',
  genero: '',
  rua: '',
  numero: '',
  complemento: '',
  cidade: '',
  estado: '',
  descricao: '',
  tipoPerfil: 'fisica',
  newsletter: false,
  privacidade: false,
})

const erros = ref<Erros>({})
const mostrarSucesso = ref(false)

const opcoesGenero = [
  { label: 'Selecione...', value: '' },
  { label: 'Masculino', value: 'masculino' },
  { label: 'Feminino', value: 'feminino' },
  { label: 'Outro', value: 'outro' },
  { label: 'Prefiro não informar', value: 'nao-informar' },
]

const validarCampo = (campo: string): void => {
  const valor = formulario.value[campo as keyof FormularioData]

  // Limpar erro anterior
  delete erros.value[campo]

  // Validações específicas
  switch (campo) {
    case 'nome':
      if (!valor || valor.toString().trim().length < 3) {
        erros.value[campo] = 'Nome deve ter pelo menos 3 caracteres'
      }
      break

    case 'email':
      if (!valor || !validarEmail(valor.toString())) {
        erros.value[campo] = 'Email inválido'
      }
      break

    case 'telefone':
      if (valor && valor.toString().length < 10) {
        erros.value[campo] = 'Telefone deve ter pelo menos 10 dígitos'
      }
      break

    case 'dataNascimento':
      if (!valor) {
        erros.value[campo] = 'Data de nascimento é obrigatória'
      }
      break

    case 'rua':
      if (!valor || valor.toString().trim().length < 3) {
        erros.value[campo] = 'Rua é obrigatória'
      }
      break

    case 'numero':
      if (!valor) {
        erros.value[campo] = 'Número é obrigatório'
      }
      break

    case 'cidade':
      if (!valor || valor.toString().trim().length < 2) {
        erros.value[campo] = 'Cidade é obrigatória'
      }
      break

    case 'estado':
      if (!valor || valor.toString().trim().length !== 2) {
        erros.value[campo] = 'Estado deve ter 2 caracteres'
      }
      break

    case 'privacidade':
      if (!formulario.value.privacidade) {
        erros.value[campo] = 'Você deve concordar com os termos de privacidade'
      }
      break
  }
}

const validarEmail = (email: string): boolean => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regexEmail.test(email)
}

const validarFormulario = (): boolean => {
  const camposObrigatorios = [
    'nome',
    'email',
    'dataNascimento',
    'rua',
    'numero',
    'cidade',
    'estado',
    'privacidade',
  ]
  let valido = true

  camposObrigatorios.forEach((campo) => {
    validarCampo(campo)
    if (erros.value[campo]) {
      valido = false
    }
  })

  return valido
}

const enviarFormulario = (): void => {
  if (validarFormulario()) {
    console.log('Formulário válido! Dados:', formulario.value)
    mostrarSucesso.value = true

    // Simular envio ao servidor
    setTimeout(() => {
      mostrarSucesso.value = false
    }, 5000)
  }
}

const limparFormulario = (): void => {
  formulario.value = {
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    genero: '',
    rua: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
    descricao: '',
    tipoPerfil: 'fisica',
    newsletter: false,
    privacidade: false,
  }
  erros.value = {}
  mostrarSucesso.value = false
}
</script>

<style scoped>
fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
