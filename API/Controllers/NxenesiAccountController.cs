using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class NxenesiAccountController : ControllerBase
    {
        private readonly UserManager<Nxenesi> _userManager;
        private readonly SignInManager<Nxenesi> _signInManager;
        private readonly TokenService _tokenService;

        public NxenesiAccountController(
          UserManager<Nxenesi> userManager, SignInManager<Nxenesi> signInManager, TokenService tokenService
        )
        {
             _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager; 

        }
        
        [AllowAnonymous]
         [HttpPost("loginNxenesi")]
        public async Task<ActionResult<NxenesiDto>> LoginNxenesi(LoginDto loginDto)
        {
            var nxenesi = await _userManager.FindByEmailAsync(loginDto.Email);

            if(nxenesi == null) return Unauthorized();
            var result = await _signInManager.CheckPasswordSignInAsync(nxenesi, loginDto.password, false);

            if(result.Succeeded)
            {
               return CreateUserNxenesi(nxenesi);
            }
            return Unauthorized();
        }      
    
        [HttpPost("registerNxenesi")]
        public async Task<ActionResult<NxenesiDto>> Register(RegisterNxenesiDto registerDto)
        {
            if(await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Email taken");
                return ValidationProblem();
            }
            if(await _userManager.Users.AnyAsync(x => x.UserName == registerDto.Username))
            {
                 ModelState.AddModelError("username", "Username taken");
                return ValidationProblem();
            }

            var nxenesi = new Nxenesi
            {
                Emri = registerDto.Emri,
                Mbiemri =  registerDto.Mbiemri,
                Email = registerDto.Email,
                UserName = registerDto.Username,
                EmriPrindit = registerDto.EmriPrindit,
                DataLindjes = registerDto.DataLindjes,
                Klasa = registerDto.Klasa,
                VitiRegjistrimit = registerDto.VitiRegjistrimit
            };

            var result = await _userManager.CreateAsync(nxenesi, registerDto.Password);

            if(result.Succeeded)
            {
                return CreateUserNxenesi(nxenesi);
            }
            return BadRequest("Problem registering student!");
        }        

        [Authorize]
         [HttpGet("currentNxenesi")]
           public async Task<ActionResult<NxenesiDto>> GetCurrentNxenesi()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return CreateUserNxenesi(user);
        }
         
            private NxenesiDto CreateUserNxenesi(Nxenesi nxenesi)
        {
            return new NxenesiDto
            {
                Id =  nxenesi.Id,
                Emri =  nxenesi.Emri,
                Mbiemri = nxenesi.Mbiemri,
                Token = _tokenService.CreateTokenNxenesi(nxenesi),
                EmriPrindit = nxenesi.EmriPrindit,
                DataLindjes = nxenesi.DataLindjes,
                Klasa = nxenesi.Klasa,
                VitiRegjistrimit = nxenesi.VitiRegjistrimit,
            };
        }

    }
}