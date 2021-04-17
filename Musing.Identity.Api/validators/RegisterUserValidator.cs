using FluentValidation;
using Musing.Identity.Api.DTO;

namespace Musing.Identity.Api.validators
{
    public class RegisterUserValidator : AbstractValidator<RegisterUserModelDto>
    {
        public RegisterUserValidator()
        {
            // Stops the validation on first error
            CascadeMode = CascadeMode.Stop;
            
            RuleFor(registerUserModelDto => registerUserModelDto.UserName)
                .NotNull().WithMessage("Please provide a user name.")
                .Length(5, 50).WithMessage("User name must be between 5 and 50 characters");
            RuleFor(registerUserModelDto => registerUserModelDto.Email)
                .NotNull().WithMessage("Please provide an email.")
                .EmailAddress().WithMessage("Please provide a valid email.");
            RuleFor(registerUserModelDto => registerUserModelDto.Password)
                .NotNull().WithMessage("Please provide a password")
                .MinimumLength(5).WithMessage("Password Must be at least 5 characters.");
            RuleFor(registerUserModelDto => new {registerUserModelDto.Password, registerUserModelDto.RenterPassword})
                .Must(rePassword => ValidatePassword(rePassword.Password, rePassword.RenterPassword))
                .WithMessage("Password must match.");
            RuleFor(registerUserModelDto => registerUserModelDto.FirstName)
                .NotNull().WithMessage("Please provide First Name.")
                .Length(1, 50).WithMessage("First name must be between 1 and 50 charters.");
            RuleFor(registerUserModelDto=> registerUserModelDto.LastName)
                .NotNull().WithMessage("Please provide First Name.")
                .Length(1, 50).WithMessage("First name must be between 1 and 50 charters.");
            RuleFor(registerUserModelDto => registerUserModelDto.PhoneNumber)
                .NotNull().WithMessage("Please provide phone number.")
                .Length(5, 15).WithMessage("Phone number must be between 5 to 15 charters.");
        }

        bool ValidatePassword(string password, string rePassword)
        {
            return password == rePassword;
        }
    }
}