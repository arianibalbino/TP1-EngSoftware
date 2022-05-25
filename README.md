# TP1-EngSoftware
 #### 💬 Integrantes: 

             ◾ Ariani Balbino 2020103235
             ◾ Eduardo Gabriel 2018020549            
             ◾ Frederico Marinho 2018072336             
             ◾ Daniel Coutinho 2018020484
             
             
## Plataforma de controle de estoque de papelaria
O Objetivo desta aplicação é digitalizar o processo de controle de esto que de uma papelaria, visando maior centralização de dados do prcesso logístico.

#### 📌 Histórias: 
◾ Cadastro de produtos (Nome do produto, quantidade, preço unitário)

◾ Cadastro de usuarios (Admin (Gerente), usuários (Vendedores))

◾ Consulta de produtos (Nome do produto, quantidade, preço unitário)

◾ Alteração de produtos (Alterar quantidades, alterar preços) 

◾ Cadastrar vendas (automaticamente pelo vendedor)




#### 💻 Possiveis tecnologias:
                 
 ◾  front: React.js 
 
 ◾  Backend: Node.js ( pivotado para .NET )
 
 ◾  BD: SQLite ( pivotrado para inMemory )
          
####  🤝 Commited

##### 1- Configuração (GRUPO)

◾ Dar init no projeto

◾ Definição das tecnologias a serem utilizadas

◾ Estruturação base do framework do frontend

◾ Estruturação base da API a ser consumida pelo frontend

◾ Autenticação: Admin (acesso a todas a funcionalidades) e Vendedor (Consulta de produtos e cadastrar vendas)


##### 2- Backend: (Daniel/Frederico)

◾ Funcionalidade de signin 

◾ Configurar banco de dados local SQLite (criar banco de dados e executar o script para inserir lista de produtos)


##### 3- Front (Ariani/Eduardo)

◾ Telas de signin

◾ Tela do admin (Nome, cargo, funcionalidades (todas))

◾ Tela de consulta de produtos

◾ Tela de cadastro de produtos


##### 4- Backend (Daniel/Frederico)

◾ Criar rotas para comunicar a tabela de produtos ao front

◾ Criar rotas para comunicar as permissoes de usuário

◾ Cadastrar produtos no banco (comunicar com front)



##### 5- Front (Ariani/Eduardo)

◾ Tela de alterar produtos

◾ Tela de cadastro de vendas

◾ Tela de criação de usuários (Admin)

◾ Tela dos vendedores (com suas respectivas funcionalidades)


##### 6- Backend (Daniel/Frederico)

◾ Criar rotas para comunicar a tabela de cadastro de vendas

◾ Criar rotas para comunicar as permissoes do admin

◾ Criar rotas para comunicar as permissoes do vendedor




#### 🔭 stretch:

◾ Criação e configuração do projeto no firebase para fornecer o CRUD de Frontend e signup
◾ Gerar PDFs de relatorio de produtos e vendas
