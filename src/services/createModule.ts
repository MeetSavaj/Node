import { Actor } from "../models/actor";

export class CreateModule {

    public check(data: any) {
        return new Promise(async (resolve, reject) => {
            //console.log("sdgsg");
            try {
                const create_module = await Actor.findOrCreate({
                    where: {
                        first_name: data.first_name
                    },
                    defaults: data
                });
                //console.log(create_module);
                if (create_module[1]) {
                    //onsole.log("sdgsg222w");
                    resolve(true);
                }
                else {
                    //console.log("sdgsg");
                    resolve(false);
                }
            } catch {
                reject(false);
            }

        })

        // public create_module = Actor.findOrCreate({
        //             where: {
        //                 first_name: body.first_name
        //             },
        //             defaults: body
        //         });
    }
}