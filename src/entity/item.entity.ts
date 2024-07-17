import { Entity, BaseEntity, Relation, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Purchase } from "./purchase.entity.js"

@Entity()
export class Item extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false,
    })
    cost: number

    @Column({
        nullable: false,
    })
    name: string

    @Column({
        nullable: false,
    })
    systemName: string

    @Column({
        nullable: false,
    })
    type: string

    @OneToMany(() => Purchase, purchase => purchase.item)
    purchases: Relation<Purchase[]>

}
