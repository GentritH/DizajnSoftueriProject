using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Planifikimet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid PlanifikimetID { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var planifikimet = await _context.Planifikimet.FindAsync(request.PlanifikimetID);
                _context.Remove(planifikimet);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}