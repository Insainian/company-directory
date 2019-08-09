import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Profile {
    @PrimaryColumn()
    username: string
    
    @Column()
    domain: string

    @Column()
    name: string

    @Column()
    title: string

    @Column()
    gender: string

    @Column()
    phone: string

    // TODO
    // @Column()
    // skills: string[]
}