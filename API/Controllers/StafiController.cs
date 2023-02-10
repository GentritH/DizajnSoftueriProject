using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.UserStafiAkademik;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace API.Controllers
{
 
    public class Stafi: BaseApiController
    { 
        [HttpGet]
        public async Task<IActionResult> GetStafin()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStafinSipasId(string id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateStafi(StafiAkademik stafiAkademik)
        {
            return HandleResult(await Mediator.Send(new Create.Command {StafiAkademik = stafiAkademik}));
        }

         [HttpPut("{id}")]
        public async Task<IActionResult>EditStafi(string id, StafiAkademik stafi)
        {
            stafi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{stafi = stafi}));
        }

   
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStafi(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }

    }

}