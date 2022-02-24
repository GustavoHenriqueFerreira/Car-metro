using System;
using System.Collections.Generic;

#nullable disable

namespace ProjetoInt.WebApi.Domains
{
    public partial class FotoAluno
    {
        public int IdFotoAluno { get; set; }
        public short IdAluno { get; set; }
        public byte[] Binario { get; set; }
        public string MimeType { get; set; }
        public string NomeArquivo { get; set; }
        public DateTime? DataInclusao { get; set; }

        public virtual Aluno IdAlunoNavigation { get; set; }
    }
}
