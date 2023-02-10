using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Nxenesit
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Nxenesi Nxenesi { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context =  context;
            }
        
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Nxenesit.Add(request.Nxenesi);
                var result = await _context.SaveChangesAsync() > 0;
                if(!result) return Result<Unit>.Failure("Failed to create nxenesi");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}