import {getRequest} from "@/utils/request.ts";

export const getUsersHttp = (params: never) => getRequest("/setting/users", params)
