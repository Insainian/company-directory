import { Entity, Column, PrimaryColumn, AfterLoad } from 'typeorm';

@Entity()
export class Profile {
    @PrimaryColumn()
    username: string

    @PrimaryColumn()
    domain: string

    @Column()
    name: string

    @Column()
    title: string

    @Column()
    gender: string

    @Column()
    phone: string

    @Column("simple-array")
    skills: string[]
}