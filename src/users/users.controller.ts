import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];

  @Get()
  getAll(): { name: string; id: number }[] {
    return this.users;
  }

  @Get(':id') findOne(
    @Param('id', ParseIntPipe) id: number,
  ): { name: string; id: number } | null {
    return this.users.find((user) => user.id == id);
  }
}
