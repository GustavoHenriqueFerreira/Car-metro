USE CAROMETRO;
GO

INSERT INTO tipoUsuario (nomeTipoUsuario)
VALUES
('Administrador'),
('professor');
GO

INSERT INTO usuario (idTipoUsuario, email, senha, nome)
VALUES
(1, 'adm@email.com', 'adm123', 'adm'),
(2, 'prof1@email.com', 'prof1abc', 'prof1'),
(2, 'prof2@email.com', 'prof2abc', 'prof2');
GO

INSERT INTO grade (nomeGrade) 
VALUES
('Ensino Fundamental I'),
('Ensino Fundamental II'),
('Ensino Médio');
GO

INSERT INTO turma (idGrade, nomeTurma, turnoTurma)
VALUES
(1, '2° Ano', 'Tarde'),
(2, '9° Ano', 'Tarde'),
(3, '3° Ano A', 'Manhã');
GO

INSERT INTO aluno (idTurma, nomeAluno, rgAluno, telefoneAluno, fotoAluno, dataMatricula, comorbidade, comentario, aprovado)
VALUES
(1, 'Carlos', '11.111.111-1', '11111-1111', 'foto1.png', '01/01/2001', 'Sem comorbidade', NULL, 1),
(2,	'João',	'22.222.222-2', '22222-2222', 'foto2.png', '02/02/2002', 'Sem comorbidade', NULL, 1),
(3, 'Jhonathan', '33.333.333-3', '33333-3333', 'foto3.png', '03/03/2003', 'Sem comorbidade', NULL, 1);
GO