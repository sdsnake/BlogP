import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    title: string;

    @Column("text")
    content: string;

    @Column("date")
    date: string;

}