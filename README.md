<h1 align="center">MailToDo++ :heavy_check_mark: :envelope: </h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Spring-Boot&message=2&color=green&style=for-the-badge&logo=Spring"/>
  <img src="https://img.shields.io/static/v1?label=Angular&message=11&color=red&style=for-the-badge&logo=Angular"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=informational&style=for-the-badge"/>
</p>

## Descrição do projeto :page_with_curl:
Este é um projeto fullstack, para ver mais sobre o backend da aplicação confira o repositório [MailToDo_2.0-Spring](https://github.com/vrfvitor/MailToDo_2.0-Spring).

MailToDo++ é um gerenciador de tarefas que de tempos em tempos te notifica da existencia de tarefas de alta prioridade ainda não concluídas, via email.

O usuário deve realizar login para ter acesso as suas tarefas e caso ainda não pussua conta, poderá se registrar utilizando seu nome, email e senha. Uma vez logado, o usuário poderá ver, criar, editar e excluir suas tarefas.

As tarefas devem conter um título, uma prioridade e uma descrição. Além disso podem estar completas ou não. Periodicamente, o sistema verificará e irá gerar um email personalizado contendo tarefas de alta prioridade que estão pendentes, notificando o usuário no endereço de email informado em seu cadastro.

Ele a continuação do [MailToDo](https://github.com/vrfvitor/MailToDo-JEE_Angular) porém com o backend todo reformulado, deixando de ser em Java EE (JAX-RS) para se tornar um projeto Spring Boot, onde fiz também a implementação de toda a parte de segurança, registro e autenticação com o Spring Security e utilização de JWT, pela natureza stateless da API REST.

## Layout da Aplicação :art:
<div>
<p align="center">
  <img  src="/media/mtd_auth.gif" alt="MailToDo++ Preview Auth">
  <img  src="/media/mtd_main.gif"  alt="MailToDo++ Preview em Computador">
  <img  src="/media/email.png" width="600" height="328" alt="MailToDo++ Preview Sent Email">
</p>
<p align="center">
  <img  src="/media/mtd_mobile.gif"  alt="MailToDo++ Preview em Smartphone">
</p>

## Funcionalidades :gear:

:heavy_check_mark: Registro, Autenticação e Autorização

:heavy_check_mark: CRUD de Tarefas

:heavy_check_mark: Notificação periódica via email

## Techs & Tools utilizadas :books:
- Codando em Typescript e utilizando Angular
  - Arquitetura de código e de organização do projeto seguindo as boas práticas da comunidade
  - Formulários controlados via Component com o ReactiveForms, em telas e modais
  - Uso extensivo do RXJS
  - JWTDecode para handling dos JWT's e Interceptor para anexação do JWT às requisições ao backend
  - Rotas filhas e navegação protegida com AuthGuard
  
- Estilização
  - Inteface reativa, se adapta à variados tamanhos de tela
  - Bootstrap
  - Material Design

- [Backend](https://github.com/vrfvitor/MailToDo_2.0-Spring)

## Desenvolvedor :computer:

<img src="https://avatars.githubusercontent.com/vrfvitor" width=115 align="left"/>
<h4>Vitor Rodrigues Ferreira</h4>

<h5>Conecte-se pelo <a href="https://www.linkedin.com/in/vrfvitor" target="_blank">LinkedIn</a></h4>

<h5>Siga pelo <a href="https://github.com/vrfvitor" target="_blank">GitHub</a>

## Licença :balance_scale:

<p align="center">
          <a href="https://opensource.org/licenses/MIT">The MIT License</a>
</p>

<p align="center">Copyright :copyright: 2021 - MailToDo++</p>

