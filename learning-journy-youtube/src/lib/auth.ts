import { NextAuthOptions } from "next-auth";


export const authOptions : NextAuthOptions ={
    session :{
        strategy:"jwt"
    },
    callbacks:{
        jwt : async({token})=>{
            const db_use = await prisma.user.findFirst({
                where:{
                    email:token.email
                }
            })
            if(db_user){
                tokrn.id = db_use.id;
                token.credits = db_user.credits;
            }
            return token;
        }
    }
}