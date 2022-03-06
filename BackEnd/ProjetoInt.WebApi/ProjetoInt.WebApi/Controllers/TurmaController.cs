using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoInt.WebApi.Domains;
using ProjetoInt.WebApi.Interfaces;
using ProjetoInt.WebApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurmaController : ControllerBase
    {

        private ITurmaRepository _TurmaRepository { get; set; }

        public TurmaController()
        {

            _TurmaRepository = new TurmaRepository();
        }


        [HttpGet("Turma/{idTurma}")]
        public IActionResult ListarPorTurma(int idTurma)
        {
            //Aluno AlunoPesquisado = _AlunoRepository.BuscarPorTurma(idTurma);

            //if (AlunoPesquisado == null)
            //{
            //    return NotFound("Nenhum Aluno encontrado!");
            //}

            //return Ok(AlunoPesquisado);

            List<Aluno> AlunosFiltrados = _TurmaRepository.BuscarPorTurma(idTurma);

            if (AlunosFiltrados == null)
            {
                return NotFound("Nenhum Aluno encontrado!");
            }

            return Ok(AlunosFiltrados);


        }

        [HttpGet]
        public IActionResult get()
        {
            List<Turma> ListaTurmas = _TurmaRepository.Listar();

            return Ok(ListaTurmas);
        }
    }
}
