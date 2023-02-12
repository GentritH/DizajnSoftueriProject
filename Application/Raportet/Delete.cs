using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Raportet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid RaportetId { get; set; }
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
                var raportet = await _context.Raportet.FindAsync(request.RaportetId);
                _context.Remove(raportet);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}