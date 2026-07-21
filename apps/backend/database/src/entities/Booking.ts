import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    guestId: Number

    @Column()
    roomId: Number

    @Column()
    checkIn: String

    @Column()
    checkOut: String

    @Column()
    status: BookingStatus
}

export enum BookingStatus {
    PENDING,
    CONFIRMED
}