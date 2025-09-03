import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { removeAccents } from '@urbanzoo/remove-accents'; // opción recomendada

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

  private generateSlug(input: string): string {
    return removeAccents(input)                     // eliminar tildes
      .toLowerCase()
      .replace(/\s+/g, '_')                         // espacios por _
      .replace(/[^a-z0-9_]/g, '')                   // solo letras, números y _
      .replace(/^_+|_+$/g, '');                     // quitar _ de inicio/final
  }

  @BeforeInsert()
  checkSlugInsert() {
    this.slug = this.slug
      ? this.generateSlug(this.slug)
      : this.generateSlug(this.title);
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.generateSlug(this.slug);
  }
}
