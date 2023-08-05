import { Controller, Post } from '@nestjs/common';

@Controller('/jira')
export class JiraController {

    @Post("/pullDataAboutSelf")
    getDataAboutSelf() {
        return {message:"Done from pullDataAboutSelf"}
    }

    @Post("/pullUserData")
    getUserData() {
        return {message:"Done from pullUserData"}
    }
}
