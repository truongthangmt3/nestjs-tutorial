import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return { data: 'you are logged in' };
  }
  signup() {
    return { data: 'register success' };
  }
}
