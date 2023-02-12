using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Raportet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Raporti raportet { get; set; }
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
                var raportet = await _context.Raportet.FindAsync(request.raportet.Id);

                _mapper.Map(request.raportet, raportet);

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}