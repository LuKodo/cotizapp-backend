import { AbstractEntity } from 'src/default/abstract.entity';
import { Quote } from 'src/quotes/entities/quote.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Client extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  contactPerson: string;

  @Column({ type: 'enum', enum: ['Público', 'Privado'], default: 'Privado' })
  type: string;

  @OneToMany(() => Quote, quote => quote.client)
  quotes: Quote[]
}
