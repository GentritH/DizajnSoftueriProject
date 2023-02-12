using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
namespace Application.Mungesat
{
       public class Create
    {
        public class Command : IRequest 
        {
            public Mungesa mungesa {get; set;}
            public string NxenesiId { get; set; }
         
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
               
            var nxenesi = await context.Nxenesit.FirstOrDefaultAsync(x => x.Id == request.NxenesiId);
                 request.mungesa.Nxenesi= nxenesi;
                context.Mungesat.Add(request.mungesa);
                await context.SaveChangesAsync();
                return Unit.Value;
               
            }
        }
    }
}