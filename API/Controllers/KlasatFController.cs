using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Application.KlasatF;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{


    public class KlasatFController : BaseApiController
    {
        
      
        [HttpGet]

        public async Task<ActionResult<List<Klasat>>> GetKlasatF() 
        {
             return await Mediator.Send(new List.Query());// marrim response nga Mediator Handler
        }    
    
        [HttpGet("{id}")]

        public async Task<ActionResult<Klasat>> GetKlasat(Guid id)
        {
              return  await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult>CreateKlasat([FromBody]Klasat klasat)
        {
            return Ok(await Mediator.Send(new Create.Command {Klasat = klasat}));
        }

             [HttpPut("{id}")]

        public async Task<IActionResult>EditKlasat(Guid id,Klasat klasat)
        {
            klasat.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Klasat=klasat}));
        }

         [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteKlasat(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }


    } 
}