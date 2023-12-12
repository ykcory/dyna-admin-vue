import {postRequest} from "@/utils/request.ts";
import {LoginParams} from "@/views/login/interface.ts";

export const loginHttp = (params: LoginParams) => postRequest<string>("/auth/login", params)
