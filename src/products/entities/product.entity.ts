import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;

  @Column('int', { default: 0 })
  price: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { unique: true })
  slug: string;

  @Column('int', { default: 0 })
  stock: number;

  @Column('text', { array: true, default: [] })
  sizes: string[];

  @Column('text', { nullable: true })
  gender: string;

  @BeforeInsert()
  checkSlugInsert(){
    if(!this.slug){
      this.slug = this.title;
    }
    this.slug = this.slug.toLowerCase().replaceAll(' ', '_').replaceAll("'", '');
  }

  @BeforeUpdate()
  checkSlugUpdate(){
    this.slug = this.slug.toLowerCase().replaceAll(' ', '_').replaceAll("'", '');
  }
}
