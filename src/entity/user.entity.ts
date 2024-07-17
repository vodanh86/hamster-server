import { Entity, Column, PrimaryColumn, OneToMany, BaseEntity } from "typeorm"
import { Purchase } from "./purchase.entity.js"

@Entity()
export class User extends BaseEntity{

    @PrimaryColumn({
        nullable: false,
        type: 'bigint'
    })
    id: number

    @Column({
        length: 48,
        nullable: false,
    })
    wallet: string

    @Column({
        default: 0,
        nullable: false,
    })
    highScore: number

    @Column({
        default: 0,
        nullable: false,
    })
    plays: number

    @OneToMany(() => Purchase, purchase => purchase.user)
    purchases: Purchase[]

}
