using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.KlasatF
{
    public class Create
    {
        public class Command : IRequest
        {
             public Klasat Klasat { get; set; }
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
               context.KlasatF.Add(request.Klasat);// add klasat 

               await context.SaveChangesAsync();

               return Unit.Value;//njesoj si mos me kthy asgje
            }
        }
    }
}