import { Entity, Column, Relation, PrimaryGeneratedColumn, Unique, ManyToOne, BaseEntity } from "typeorm"
import { Item } from "./item.entity.js"
import { User } from "./user.entity.js"

@Entity()
@Unique('user_item', ['user', 'item'])
export class Purchase extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, user => user.purchases)
    user: Relation<User>

    @ManyToOne(() => Item, item => item.purchases)
    item: Relation<Item>

    @Column({
        nullable: false,
        length: 44,
    })
    txHash: string

    @Column({
        type: 'bigint',
        nullable: false,
    })
    txLt: string

}
