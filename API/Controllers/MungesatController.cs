using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Mungesat;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace API.Controllers
{
 
    public class MungesatController : BaseApiController
    {
       
        [HttpPost("{NxenesiId}")]
        public async Task<IActionResult> CreateMungesa(Mungesa mungesa,string NxenesiId)
        {
            return Ok(await Mediator.Send(new Create.Command {mungesa = mungesa, NxenesiId=NxenesiId}));
        }



      [HttpGet]
        public async Task<ActionResult<List<Mungesa>>>GetMungesat(){
            return await Mediator.Send(new List.Query());
        }   

      
        [HttpGet("{id}")]
        public async Task<ActionResult<Mungesa>> GetMungesa(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id= id});
        }

        
        [HttpPut("{id}")]


            public async Task<IActionResult> EditMungesa(Guid id,Mungesa mungesa){

            mungesa.Id=id;
            return Ok(await Mediator.Send(new Edit.Command{mungesa = mungesa }));
        }

         
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMungesat(Guid id){
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }

        

    }
     
    }
