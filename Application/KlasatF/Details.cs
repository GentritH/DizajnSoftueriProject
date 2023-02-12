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
    public class Details  
    {
        public class Query : IRequest<Klasat>
          {
            public Guid Id { get; set; }
        }


        public class Handler : IRequestHandler<Query, Klasat>
        {
        private readonly DataContext context;
            public Handler(DataContext context)
            {
            this.context = context;
            }

            public async Task<Klasat> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.KlasatF.FindAsync(request.Id);
            }
        }
    }
}