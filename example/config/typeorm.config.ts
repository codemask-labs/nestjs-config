import { IsBoolean, IsEnum, IsInt, IsString } from 'class-validator'
import { TypeormConnection } from 'example/enums'

export class TypeormConfig {
    @IsEnum(TypeormConnection)
    readonly TYPEORM_CONNECTION: TypeormConnection

    @IsString()
    readonly TYPEORM_HOST: string

    @IsInt()
    readonly TYPEORM_PORT: number

    @IsString()
    readonly TYPEORM_DATABASE: string

    @IsString()
    readonly TYPEORM_USERNAME: string

    @IsString()
    readonly TYPEORM_PASSWORD: string

    @IsBoolean()
    readonly TYPEORM_LOGGING: boolean
}
