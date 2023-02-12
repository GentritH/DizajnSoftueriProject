using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
namespace Application.Planifikimet
{
    public class Create
    {
        public class Command : IRequest 
        {
            public PlanifikimiShkollor planifikimi {get; set;}
            
             public Guid lendaId { get; set; }
              public Guid KlasaId { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
            this.context = context;
                
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)

            
            {
               
                var klasa = await context.KlasatF.FirstOrDefaultAsync(x => x.Id == request.lendaId);
                var lenda = await context.Lendet.FirstOrDefaultAsync(x => x.Id == request.KlasaId);
                request.planifikimi.Lenda=lenda;
                request.planifikimi.Klasa= klasa;
                context.Planifikimet.Add(request.planifikimi);
                await context.SaveChangesAsync();
                return Unit.Value;
               
            }
        }
    }
}