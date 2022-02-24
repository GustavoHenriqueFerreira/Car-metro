using System;
using System.Collections.Generic;

#nullable disable

namespace ProjetoInt.WebApi.Domains
{
    public partial class Grade
    {
        public Grade()
        {
            Turmas = new HashSet<Turma>();
        }

        public short IdGrade { get; set; }
        public string NomeGrade { get; set; }

        public virtual ICollection<Turma> Turmas { get; set; }
    }
}
