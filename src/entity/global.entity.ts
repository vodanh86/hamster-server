import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Global extends BaseEntity{

    @PrimaryColumn({
        nullable: false,
    })
    key: string

    @Column({
        nullable: false,
    })
    value: string

}
