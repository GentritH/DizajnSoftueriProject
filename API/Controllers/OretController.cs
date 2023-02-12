using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Oret;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
 
    public class OretController : BaseApiController
    {
       
        [HttpPost("{LendaId},{NjesiaId}")]
        public async Task<IActionResult> CreateOra(Ora ora, Guid LendaId, Guid NjesiaId)
        {
            return Ok(await Mediator.Send(new Create.Command {ora = ora, lendaId=LendaId, njesiaId=NjesiaId}));
        }



      [HttpGet]
        public async Task<ActionResult<List<Ora>>>GetOret(){
            return await Mediator.Send(new List.Query());
        }   

      
        [HttpGet("{id}")]
        public async Task<ActionResult<Ora>> GetOra(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id= id});
        }

     
        [HttpPut("{id}")]


            public async Task<IActionResult> EditOra(Guid id,Ora ora){

            ora.Id=id;
            return Ok(await Mediator.Send(new Edit.Command{ora = ora }));
        }

      
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOret(Guid id){
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }

        

    }
     
    }
