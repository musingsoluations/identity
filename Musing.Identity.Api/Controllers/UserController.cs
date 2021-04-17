/*************************************************************************************************************************************
 * © Musing Solutions
 * Author : Chanakya Sankritayayana
 * Date: 14-April-2021
 * UserController class is used to manage IDP user. it provides function like Register, Enable, Disable, Delete and Update User Data 
 */

using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Musing.Identity.Api.DTO;
using Musing.Identity.Api.Models;

namespace Musing.Identity.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly UserManager<UserModel> _userManager;
        private readonly SignInManager<UserModel> _signInManager;
        public UserController(IMapper mapper, UserManager<UserModel> userManager, SignInManager<UserModel> signInManager)
        {
                _mapper = mapper;
                _userManager = userManager;
                _signInManager = signInManager;
        }

        [HttpPost("registerUser")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserModelDto userModelDto)
        {
            var user = _mapper.Map<UserModel>(userModelDto);
            var result = await _userManager.CreateAsync(user, userModelDto.Password);
            if (result.Succeeded)
            {
                return CreatedAtAction(nameof(GetUserByEmail),new {email =user.Email},new {});
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }

        [ActionName("GetUserByEmail")]
        [HttpGet("GetUserByEmail/{email}")]
        public async Task<IActionResult> GetUserByEmail(string email)
        {
            await Task.Delay(1000);
            return Ok();
        }
    }
}
