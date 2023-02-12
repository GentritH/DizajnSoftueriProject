using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Lendet
{
    public class Details
    {
        public class Query : IRequest<Lenda>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, Lenda>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Lenda> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Lendet.FindAsync(request.Id);
            }
        }
    }
}