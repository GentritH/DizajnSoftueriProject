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
    public class StafiAccountcontroller : ControllerBase
    {
        private readonly UserManager<StafiAkademik> _userManager;
        private readonly SignInManager<StafiAkademik> _signInManager;
        private readonly TokenService _tokenService;

        public StafiAccountcontroller(UserManager<StafiAkademik> userManager, SignInManager<StafiAkademik> signInManager, TokenService tokenService)
        {
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;

        }


         [AllowAnonymous]
         [HttpPost("loginstafi")]
        public async Task<ActionResult<StafiAkademikDto>> LoginStafi(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Unauthorized();

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.password, false);

            if (result.Succeeded)
            {
                return CreateUserStafi(user);
            }

            return Unauthorized();
        } 

        [HttpPost("registerstafi")]
        public async Task<ActionResult<StafiAkademikDto>> Register(RegisterStafiDto registerStafiDto)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == registerStafiDto.Email))
            {
                ModelState.AddModelError("email", "Email taken");
                return ValidationProblem();
            }
            if (await _userManager.Users.AnyAsync(x => x.UserName == registerStafiDto.UserName))
            {
                ModelState.AddModelError("username", "Username taken");
                return ValidationProblem();
            }

            var user = new StafiAkademik
            {
                Emri = registerStafiDto.Emri,
                Roli = registerStafiDto.Roli,
                Mbiemri = registerStafiDto.Mbiemri,
                Email = registerStafiDto.Email,
                UserName = registerStafiDto.UserName
            };

            var result = await _userManager.CreateAsync(user, registerStafiDto.Password);

            if (result.Succeeded)
            {
                return CreateUserStafi(user);
            }
            return BadRequest("Problem registering user");
        }
    
         [Authorize]
         [HttpGet("currentStafi")]
       
           public async Task<ActionResult<StafiAkademikDto>> getcurrent()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return CreateUserStafi(user);
    
        }

           private StafiAkademikDto CreateUserStafi(StafiAkademik stafi)
        {
            return new StafiAkademikDto
            {
                Id = stafi.Id,
                Emri = stafi.Emri,
                Email = stafi.Email,
                Token = _tokenService.CreateTokenStaf(stafi),
            };
        }

       


 
    }
}