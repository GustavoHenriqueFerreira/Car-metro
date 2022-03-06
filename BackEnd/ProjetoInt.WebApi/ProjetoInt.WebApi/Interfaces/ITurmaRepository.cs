using ProjetoInt.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Interfaces
{
    public interface ITurmaRepository
    {
        public List<Aluno> BuscarPorTurma(int idTurma);

        List<Turma> Listar();
<<<<<<< HEAD

=======
>>>>>>> 9663c9e93e0ea28f8cdf33eac6449844b9073a83
    }
}
