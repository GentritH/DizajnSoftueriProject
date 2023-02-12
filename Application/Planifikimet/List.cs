using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Planifikimet
{
    public class List
    {
        public class Query : IRequest<List<PlanifikimiShkollor>> { }
        public class Handler : IRequestHandler<Query, List<PlanifikimiShkollor>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<PlanifikimiShkollor>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Planifikimet.ToListAsync();
            }
        }
    }
}