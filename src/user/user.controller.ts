import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
//import { resourceUsage } from 'process';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { GetUser } from './get.user.decorator';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/profile')
  @UseGuards(AuthGuard())
  getProfile(@GetUser() user: UserEntity) {
    console.log(user);
  }

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signup(@Body() authCredentialsDTO: AuthCredentialsDTO) {
    return this.userService.signup(authCredentialsDTO);
  }

  @Post('/signin')
  @UsePipes(ValidationPipe)
  signin(@Body() authCredentialsDTO: AuthCredentialsDTO) {
    return this.userService.signin(authCredentialsDTO);
  }
}
