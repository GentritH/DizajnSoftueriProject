using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Application.Oraret;


namespace API.Controllers
{
    public class OraretController : BaseApiController
    {
        
        [HttpGet]
        public async Task<ActionResult<List<Orari>>> GetOraret()
        {

            return await Mediator.Send(new List.Query());
        }
       
        [HttpGet("{id}")]
        public async Task<ActionResult<Orari>> GetOrari(Guid id)
        {
            return await Mediator.Send(new Details.Query{id = id});
        }
     
        [HttpPost("{KlasaId},{LendaId}")]
        public async Task<IActionResult> CreateOrari(Orari orari, Guid LendaId, Guid KlasaId){
            return Ok(await Mediator.Send(new Create.Command {Orari  = orari, lendaId=LendaId, KlasaId=KlasaId}));
        }
       
        [HttpPut("{id}")]

        public async Task<IActionResult> EditOrari(Guid id,Orari orari){
            orari.Id=id;
            return Ok(await Mediator.Send(new Edit.Command{Orari = orari}));
        }
       
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrari(Guid id){
            return Ok(await Mediator.Send(new Delete.Command{id = id}));
        }
    }
}