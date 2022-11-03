import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SampleServiceBase } from "./base/sample.service.base";

@Injectable()
export class SampleService extends SampleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
