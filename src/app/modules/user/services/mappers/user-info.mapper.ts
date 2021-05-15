import { Mapper } from "app/core/models/mapper.interface";
import { UserInfo } from "../../models/user-info.model";

export class UserInfoMapper implements Mapper<UserInfo> {
    fromJson(json: any): UserInfo {
        return new UserInfo(
            json.id,
            json.fullname,
            json.email,
        );
    }
    toJson(doc: UserInfo) {
        throw new Error("Method not implemented.");
    }

}