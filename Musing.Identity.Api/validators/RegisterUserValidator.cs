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
            RuleFor(registerUserModelDto => registerUserModelDto.Name)
                .NotNull().WithMessage("Please provide a valid name.")
                .MinimumLength(3).WithMessage("Name must be at least 3 charters.")
                .MaximumLength(100).WithMessage("Name can not be more then 50 charters.");
            RuleFor(registerUserModelDto => registerUserModelDto.Email)
                .NotNull().WithMessage("Please provide an email.")
                .EmailAddress().WithMessage("Please provide a valid email.");
            RuleFor(registerUserModelDto => registerUserModelDto.Password)
                .NotNull().WithMessage("Please provide a password")
                .MinimumLength(5).WithMessage("Password Must be at least 5 characters.");
            RuleFor(registerUserModelDto => new {registerUserModelDto.Password, registerUserModelDto.RenterPassword})
                .Must(rePassword => ValidatePassword(rePassword.Password, rePassword.RenterPassword))
                .WithMessage("Password must match.");
            RuleFor(registerUserModelDto => registerUserModelDto.PhoneNumber)
                .NotNull().WithMessage("Please provide phone number.")
                .Length(5, 15).WithMessage("Phone number must be between 5 to 15 charters.");
            RuleFor(registerUserModelDto => registerUserModelDto.UserName)
               .NotNull().WithMessage("Please provide a user name.")
               .Length(5, 50).WithMessage("User name must be between 5 and 50 characters");
        }

        bool ValidatePassword(string password, string rePassword)
        {
            return password == rePassword;
        }
    }
}