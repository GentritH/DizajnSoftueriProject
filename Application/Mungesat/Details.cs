using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Mungesat
{
     public class Details
    {
        public class Query : IRequest<Mungesa>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Mungesa>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            
            {
                _context = context;
            }

            public async Task<Mungesa> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Mungesat.FindAsync(request.Id);
            }
        }
    }
}