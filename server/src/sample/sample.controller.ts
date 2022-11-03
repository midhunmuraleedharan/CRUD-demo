import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SampleService } from "./sample.service";
import { SampleControllerBase } from "./base/sample.controller.base";

@swagger.ApiTags("samples")
@common.Controller("samples")
export class SampleController extends SampleControllerBase {
  constructor(
    protected readonly service: SampleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
