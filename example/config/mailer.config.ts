import { IsBoolean, IsInt, IsString } from 'class-validator'
import { Config } from 'lib/decorators'

@Config()
export class MailerConfig {
    @IsString()
    readonly MAILER_HOST: string

    @IsInt()
    readonly MAILER_PORT: number

    @IsString()
    readonly MAILER_FROM: string

    @IsBoolean()
    readonly MAILER_SECURE: boolean

    @IsString()
    readonly MAILER_AUTH_EMAIL: string

    @IsString()
    readonly MAILER_AUTH_PASSWORD: string
}
