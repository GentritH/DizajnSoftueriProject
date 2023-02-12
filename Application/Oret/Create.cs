using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
namespace Application.Oret
{
    public class Create
    {
        public class Command : IRequest 
        {
            public Ora ora {get; set;}
            
            public Guid lendaId { get; set; }
            public Guid njesiaId { get; set; }
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
               
                var njesia = await context.Njesite.FirstOrDefaultAsync(x => x.Id == request.njesiaId);
                var lenda = await context.Lendet.FirstOrDefaultAsync(x => x.Id == request.lendaId);
                request.ora.Lenda=lenda;
                request.ora.Njesia= njesia;
                context.Oret.Add(request.ora);
                await context.SaveChangesAsync();
                return Unit.Value;
               
            }
        }
    }
}