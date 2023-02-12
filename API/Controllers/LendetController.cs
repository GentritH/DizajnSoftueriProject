using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Lendet;
using Microsoft.AspNetCore.Mvc;
using Domain;

namespace API.Controllers
{
    public class LendetController : BaseApiController
    {
        [HttpGet]

        public async Task<ActionResult<List<Lenda>>>GetLendet(){
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Lenda>>GetLenda(Guid id){
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateLenda(Lenda lenda)
        {
            return Ok(await Mediator.Send(new Create.Command {Lenda = lenda}));
        }

          [HttpPut("{id}")]
        public async Task<IActionResult>EditLenda(Guid id, Lenda lenda)
        {
            lenda.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Lenda = lenda}));
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteLendet(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}