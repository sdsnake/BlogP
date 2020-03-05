import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Comment} from '../comments/comment.entity'

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

    @OneToMany(type => Comment, comment => comment.post)
    comments: Comment[];

}