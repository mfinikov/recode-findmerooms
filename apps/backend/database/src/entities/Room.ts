import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    roomId: Number

    @Column()
    title: String

    @Column()
    description: String

    @Column()
    price: Number

    @Column()
    address: String

    @Column()
    coordinates: String

    @Column()
    ownerId: Number
}