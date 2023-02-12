using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Njesite;
using Microsoft.AspNetCore.Mvc;
using Domain;

namespace API.Controllers
{
    public class NjesiteController : BaseApiController
    {
        [HttpGet]

        public async Task<ActionResult<List<Njesia>>>GetNjesite(){
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Njesia>>GetNjesia(Guid id){
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateNjesia(Njesia njesia)
        {
            return Ok(await Mediator.Send(new Create.Command {Njesia = njesia}));
        }

          [HttpPut("{id}")]
        public async Task<IActionResult>EditNjesia(Guid id, Njesia njesia)
        {
            njesia.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Njesia = njesia}));
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteNjesite(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}