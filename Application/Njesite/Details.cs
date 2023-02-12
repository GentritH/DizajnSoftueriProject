using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Njesite
{
    public class Details
    {
        public class Query : IRequest<Njesia>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, Njesia>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Njesia> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Njesite.FindAsync(request.Id);
            }
        }
    }
}