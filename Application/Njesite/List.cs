using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Njesite
{
    public class List
    {
        public class Query : IRequest<List<Njesia>>{}
        public class Handler : IRequestHandler<Query, List<Njesia>>
        {
        private readonly DataContext context;
            public Handler(DataContext context)
            {
            this.context = context;

            }

            public async Task<List<Njesia>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Njesite.ToListAsync(cancellationToken);
            }
        }
    }
}