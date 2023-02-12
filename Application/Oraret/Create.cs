using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Oraret
{
    public class Create
    {
        public class Command : IRequest
        {
            public Orari Orari{ get; set; }
            public Guid lendaId { get; set; }
            public Guid KlasaId { get; set; }
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
                var klasa = await _context.KlasatF.FirstOrDefaultAsync(x => x.Id == request.KlasaId);
                var lenda = await _context.Lendet.FirstOrDefaultAsync(x => x.Id == request.lendaId);
                request.Orari.Lenda=lenda;
                request.Orari.Klasa= klasa;
                _context.Oraret.Add(request.Orari);
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}