import {getRequest} from "@/utils/request.ts";

export const isLoginHttp = () => getRequest<boolean>("/auth/is-login")
