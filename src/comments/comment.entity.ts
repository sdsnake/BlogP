import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { type } from "os";
import { Post } from "../posts/post.entity";

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

    @ManyToOne(type=> Post, post => post.comments)
    post: Post;

}