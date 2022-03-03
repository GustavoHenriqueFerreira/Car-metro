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
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        private IAlunoRepository _AlunoRepository { get; set; }

        public AlunosController()
        {

            _AlunoRepository = new AlunoRepository();
        }

        [HttpGet]
        public IActionResult get()
        {
            List<Aluno> ListaAlunos = _AlunoRepository.Listar();

            return Ok(ListaAlunos);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            Aluno AlunoPesquisado = _AlunoRepository.BuscarPorId(id);

            if (AlunoPesquisado == null)
            {
                return NotFound("Nenhum Aluno encontrado!");
            }

            return Ok(AlunoPesquisado);
        }

        [HttpGet("Turma/{id}")]
        public IActionResult ListarPorTurma(int idTurma)
        {
            Aluno AlunoPesquisado = _AlunoRepository.BuscarPorTurma(idTurma);

            if (AlunoPesquisado == null)
            {
                return NotFound("Nenhum Aluno encontrado!");
            }

            return Ok(AlunoPesquisado);
        }

        [HttpPost]
        public IActionResult Post(Aluno novoAluno)
        {
            _AlunoRepository.Cadastrar(novoAluno);

            return StatusCode(201);
        }

        [HttpPut("{id}")]
        public IActionResult PutUrl(int id, Aluno AlunoAtualizado)
        {
            Aluno AlunoBuscado = _AlunoRepository.BuscarPorId(id);

            if (AlunoBuscado == null)
            {
                return NotFound
                    (new
                    {
                        mensagem = "Aluno não encontrado!",
                        erro = true
                    });
            }

            try
            {
                _AlunoRepository.Atualizar(id, AlunoAtualizado);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpDelete("excluir/{id}")]
        public IActionResult Delete(int id)
        {
            _AlunoRepository.Deletar(id);

            return StatusCode(204);
        }
    }
}
