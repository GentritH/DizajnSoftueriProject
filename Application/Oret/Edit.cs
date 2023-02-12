using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Oret
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Ora ora { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var ora = await _context.Oret.FindAsync(request.ora.Id);

                _mapper.Map(request.ora, ora);

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}