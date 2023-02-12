using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Planifikimet
{
    public class Details
    {
        public class Query : IRequest<PlanifikimiShkollor>
        {
            public Guid PlanifikimetID { get; set; }
        }
        public class Handler : IRequestHandler<Query, PlanifikimiShkollor>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            
            {
                _context = context;
            }

            public async Task<PlanifikimiShkollor> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Planifikimet.FindAsync(request.PlanifikimetID);
            }
        }
    }
}