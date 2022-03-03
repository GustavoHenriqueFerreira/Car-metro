using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoInt.WebApi.Domains;
using ProjetoInt.WebApi.Interfaces;
using ProjetoInt.WebApi.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class FotoAlunosController : ControllerBase
    {
        private IFotoAlunoRepository _FotoAlunoRepository { get; set; }

        public FotoAlunosController()
        {
            _FotoAlunoRepository = new FotoAlunoRepository();
        }


        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_FotoAlunoRepository.Listar());
        }


        [HttpGet("{idFotoAluno}")]
        public IActionResult BuscarPorId(int idFotoAluno)
        {
            return Ok(_FotoAlunoRepository.BuscarPorId(idFotoAluno));
        }

        //[Authorize(Roles = "1")]
        [HttpPost("{id}")]
        public IActionResult Cadastrar(IFormFile novaFotoAluno, short id)
        {
            try
            {
                if (novaFotoAluno.Length > 500000000)
                    return BadRequest(new { mensagem = "O tamanho máximo da imagem foi atingido." });

                string extensao = novaFotoAluno.FileName.Split('.').Last();

                if (extensao != "png")
                    return BadRequest(new { mensagem = "Apenas arquivos .png são obrigatórios." });

                _FotoAlunoRepository.Cadastrar(novaFotoAluno, id);

                return StatusCode(201);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize(Roles = "1,3")]
        [HttpPut("{idFotoAluno}")]
        public IActionResult Atualizar(int idFotoAluno, FotoAluno FotoAlunoAtualizada)
        {
            _FotoAlunoRepository.Atualizar(idFotoAluno, FotoAlunoAtualizada);

            return StatusCode(204);
        }

        [Authorize(Roles = "1")]
        [HttpDelete("{idFotoAluno}")]
        public IActionResult Deletar(int idFotoAluno)
        {
            _FotoAlunoRepository.Deletar(idFotoAluno);

            return StatusCode(204);
        }
    }
}
