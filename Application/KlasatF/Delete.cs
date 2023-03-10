using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.KlasatF
{
    public class Delete
    {
            public class Command : IRequest
        {
            public Guid Id { get; set; }
        }
        
        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext context;

            public Handler(DataContext context)
            {
            this.context = context;

            }

            public  async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
               var klasat = await context.KlasatF.FindAsync(request.Id);

                context.Remove(klasat);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }         
}