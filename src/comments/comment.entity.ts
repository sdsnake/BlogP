import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    author: string;

    @Column("text")
    content: string;

    @Column("date")
    date: string;

}