/*************************************************************************************************************************************
 * © Musing Solutions
 * Author : Chanakya Sankritayayana
 * Date: 14-April-2021
 * RegisterUserModel is DTO class for transferring user registration data from client to server.
 */

namespace Musing.Identity.Api.DTO
{
    public class RegisterUserModelDto
    {
        public string Name { get;set;}
        public string UserName { get; set; }
        public string Password { get; set; }
        public string RenterPassword { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
    }
}