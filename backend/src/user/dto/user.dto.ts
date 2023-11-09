import { IsString } from "class-validator";

export class userDTO{
    @IsString()
    email: string;

    @IsString()
    name : string;
}