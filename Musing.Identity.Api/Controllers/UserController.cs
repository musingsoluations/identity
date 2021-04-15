/*************************************************************************************************************************************
 * © Musing Solutions
 * Author : Chanakya Sankritayayana
 * Date: 14-April-2021
 * UserController class is used to manage IDP user. it provides function like Register, Enable, Disable, Delete and Update User Data 
 */

using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using AutoMapper;
using Musing.Identity.Api.DTO;
using Musing.Identity.Api.Models;

namespace Musing.Identity.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;

        public UserController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [HttpPost("registerUser")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserModelDto userModelDto)
        {
            var user = _mapper.Map<UserModel>(userModelDto);
            await Task.Delay(1000);
            return null;
        }
    }
}
