using System;
using System.Collections.Generic;

#nullable disable

namespace ProjetoInt.WebApi.Domains
{
    public partial class Aluno
    {
        public int IdAluno { get; set; }
        public short? IdTurma { get; set; }
        public string NomeAluno { get; set; }
        public string RgAluno { get; set; }
        public string TelefoneAluno { get; set; }
        public DateTime DataMatricula { get; set; }
        public string Comorbidade { get; set; }
        public string Comentario { get; set; }
        public bool? Aprovado { get; set; }

        public virtual Turma IdTurmaNavigation { get; set; }
        public virtual FotoAluno FotoAluno { get; set; }
    }
}
