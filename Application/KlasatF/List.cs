using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using Microsoft.Extensions.Logging;

namespace Application.KlasatF
{
    public class List
    {
        public class Query : IRequest<List<Klasat>>{}

        public class Handler : IRequestHandler<Query, List<Klasat>>
        {
        private readonly DataContext context;
        
            public Handler(DataContext context)
            {
            this.context = context;
            }

            public async Task<List<Klasat>> Handle(Query request, CancellationToken cancellationToken)
            {

                return await context.KlasatF.ToListAsync(cancellationToken);
            }

          
        }
    }
}