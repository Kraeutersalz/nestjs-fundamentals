import { PartialType } from "@nestjs/mapped-types";
import { CreateColasDto } from './create-colas.dto';


export class UpdateColasDto extends PartialType(CreateColasDto) {}