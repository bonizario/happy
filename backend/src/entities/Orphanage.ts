import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Image from './Image';

@Entity('orphanages')
class Orphanage {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;

  @Column()
  public latitude: string;

  @Column()
  public longitude: number;

  @Column()
  public about: string;

  @Column()
  public instructions: string;

  @Column()
  public opening_hours: string;

  @Column()
  public open_on_weekends: boolean;

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  public images: Image[];
}

export default Orphanage;
