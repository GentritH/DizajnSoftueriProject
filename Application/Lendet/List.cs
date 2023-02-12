using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Lendet
{
    public class List
    {
        public class Query : IRequest<List<Lenda>>{}
        public class Handler : IRequestHandler<Query, List<Lenda>>
        {
        private readonly DataContext context;
            public Handler(DataContext context)
            {
            this.context = context;

            }

            public async Task<List<Lenda>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Lendet.ToListAsync(cancellationToken);
            }
        }
    }
}