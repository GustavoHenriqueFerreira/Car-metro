using System;
using System.Collections.Generic;

#nullable disable

namespace ProjetoInt.WebApi.Domains
{
    public partial class Turma
    {
        public Turma()
        {
            Alunos = new HashSet<Aluno>();
        }

        public int IdTurma { get; set; }
        public int? IdGrade { get; set; }
        public string NomeTurma { get; set; }
        public string TurnoTurma { get; set; }

        public virtual Grade IdGradeNavigation { get; set; }
        public virtual ICollection<Aluno> Alunos { get; set; }
    }
}
