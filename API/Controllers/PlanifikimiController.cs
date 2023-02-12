using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Planifikimet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
 
    public class PlanifikimetController : BaseApiController
    {
       
        [HttpPost("{LendaId},{KlasaId}")]
        public async Task<IActionResult> CreatePlanifikimet(PlanifikimiShkollor planifikimi, Guid LendaId, Guid KlasaId)
        {
            return Ok(await Mediator.Send(new Create.Command {planifikimi = planifikimi, lendaId=LendaId, KlasaId=KlasaId}));
        }



      [HttpGet]
        public async Task<ActionResult<List<PlanifikimiShkollor>>>GetPlanifikimet(){
            return await Mediator.Send(new List.Query());
        }   

      
        [HttpGet("{id}")]
        public async Task<ActionResult<PlanifikimiShkollor>> GetPlanifikimin(Guid id)
        {
            return await Mediator.Send(new Details.Query{PlanifikimetID = id});
        }

    
        [HttpPut("{id}")]


            public async Task<IActionResult> EditPlanifikimin(Guid id,PlanifikimiShkollor planifikimi){

            planifikimi.Id=id;
            return Ok(await Mediator.Send(new Edit.Command{planifikimi = planifikimi}));
        }

     
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlanifikimin(Guid id){
            return Ok(await Mediator.Send(new Delete.Command{PlanifikimetID = id}));
        }

        

    
     
    }
}