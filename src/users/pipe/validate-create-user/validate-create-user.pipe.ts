import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('inside the validateCreateUserPipe!');
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number!`);
      throw new HttpException(
        'Invalid Data type for property age. Expected number',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${value.age} is a number! and returning...`);
    return { ...value, age: parseAgeToInt };
  }
}
