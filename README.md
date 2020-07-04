# Recuperação de senha

**RF** [comment]: <> (Requisitos Funcionais - Quais funcionalidades teremos)

- O usuário deve poder recuperar sua senha informando seu e-mail.
- O usuário deve receber um e-mail com instruções de recuperação de senha.
- o usuário deve poder resetar sua senha. 

**RNF** [comment]: <> (Requisitos não funcionais - Não estão ligadas com a RN, voltado para parte técnica)

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento.
- Utilizar o Amazon SES para envios em produção.
- O envio de e-mails deve acontecer em segundo plano.

**RN** [comment]: <> (Regra de Negócio - Deve estar relacionada a um requisito funcional)

- O link enviado por email para resetar a senha deve expirar em 2 horas.
- O usuário precisa confirmar a nova senha ao resetar sua senha.

# Atualização do perfil

**RF**

- O uasuário deeve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado por outro usuário.
- Para atualizar sua senha o usuário deve informar a senha antiga.
- Para atualizar sua senha o usuário deve confimar a nova senha.

# Painnel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico.
- O prestador deve receber uma notificação sempre que houver um novo agendamento.
- O prestador deve poder vizualizar as notificações não lidas.

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real, utilizando socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar.


# Agendamento de Serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador.
- O usuário deve poder realizar um novo agendamento com um prestador.

**RNF**

- A listagem de prestadores deve ser armazenada em cache.

**RN**

- Cada agendamento deve durar 1 hora exatamente.
- Os agendamentos devem estar disponíveis entre 8 ás 18h (Primeiro ás 8h, último ás 17h).
- O usuário não pode agendar em um horário já ocupado.
- O usuário não pode agendar em um horário que já passou.
- O usuário não pode agentar serviços para ele próprio. 