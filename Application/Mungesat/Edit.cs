using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Mungesat
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Mungesa mungesa { get; set; }
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
                var mungesa = await _context.Mungesat.FindAsync(request.mungesa.Id);

                _mapper.Map(request.mungesa, mungesa);

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}