import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsDateStringCustomConstraint
  implements ValidatorConstraintInterface
{
  validate(dateString: string) {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;

    if (!regex.test(dateString)) {
      return false;
    }

    const [day, month, year] = dateString.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }

  defaultMessage() {
    return 'Date must be in the format dd.MM.yyyy';
  }
}

export function IsDateStringCustom(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsDateStringCustomConstraint,
    });
  };
}
