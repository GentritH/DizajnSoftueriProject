using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Nxenesit;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace API.Controllers
{

    public class NxenesiController : BaseApiController
    {
        

        [HttpGet]
        public async Task<IActionResult> GetNxenesit()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        

        [HttpGet("{id}")]
        public async Task<IActionResult> GetNxenesiSipasId(string id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }
        

        [HttpPost]
        public async Task<IActionResult> CreateNxenesi(Nxenesi nxenesi)
        {
            return HandleResult(await Mediator.Send(new Create.Command{Nxenesi = nxenesi}));
        }

            

         [HttpPut("{id}")]
        public async Task<IActionResult> EditNxenesi(string id, Nxenesi nxenesi)
        {
            nxenesi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Nxenesi = nxenesi}));
        }

   

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNxenesi(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }



    }
}

